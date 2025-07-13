<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SuccessSession from '@/Components/SuccessSession.vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import { Head } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import usePriceFormat from '@/composables/priceFormat';
import useDateFormat from '@/composables/dateFormat';
import useEventResume from '@/composables/exports/eventResume';
import Eventshow from '@/Components/IndicatorsCharts/Eventshow.vue';
import { toast } from 'vue3-toastify';
import useStringFormat from '@/composables/stringFormat';
import ExportButton from '@/Components/buttons/ExportButton.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';

const { formatPrice } = usePriceFormat();
const { dateFormat } = useDateFormat();
const { formatFirstLetterUppercase } = useStringFormat();
const { exportSummaryByTickets } = useEventResume();

const dateToFindResume = ref(null);
const itemsPerDate = ref([]);
const salesPerDate = ref({efectivo: 0, tarjeta: 0, adeudo: 0, total: 0, venta: 0});

const props = defineProps({
    "user": {
        Type: Object,
        Required: true
    },
    "historyPerEvent" : {
        Type: Object,
        Required: true
    },
})

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

// Headers for the data table
const amountOwed = ref(0);
const items = ref([]);
const headerProps = {
    class: '!font-bold'
};

const headers = [
    { title: 'Folio', key: 'Folio' },
    { title: 'Estatus', key: 'Estatus' },
    { title: 'Tipo de venta', key: 'Tipo de venta' },
    { title: 'Total asientos vendidos', key: 'Total asientos vendidos' },
    { title: 'Asientos', key: 'Asientos' },
    { title: 'Monto total de venta', key: 'Monto total de venta' },
    { title: 'Monto Pagado', key: 'Monto Pagado' },
    { title: 'Adeudo', key: 'Adeudo' },
    { title: 'Tipos de pago', key: 'Tipos de pago' },
    { title: 'Promoción', key: 'Promotion' },
    { title: 'Venta a meses', key: 'Venta a meses' },
    { title: 'Deudor', key: 'Deudor' },
    { title: 'Fecha de venta', key: 'Fecha' },
];

props.historyPerEvent.new_data.sale_tickets
    .slice()
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .forEach((saleTicket) => {
    const paymentTypes = saleTicket.global_payment_types.map(paymentType => {
        let paymentInfo = `${formatFirstLetterUppercase(paymentType.name)}: ${paymentType.pivot.amount}`;
        if (paymentType.name === 'tarjeta' && paymentType.pivot.card_type_name) {
            paymentInfo += ` (${paymentType.pivot.card_type_name})`;
        }
        return paymentInfo;
    }).join(', ');

    const seatCatalogues = saleTicket.event_seat_catalogs.map(seatCatalogue => {
        return `${seatCatalogue.seat_catalogue.code}`;
    }).join(', ');

    const totalReturned = saleTicket.sale_ticket_status.name === 'cancelado' ? 0 : saleTicket.total_returned;
    const adeudo = ref(0);
    if (saleTicket.sale_ticket_status.name === 'pendiente') {
        adeudo.value = Number(saleTicket.total_amount - (Number(saleTicket.installment_payment_histories.reduce((sum, item) => sum + parseFloat(item.total_amount), 0))));
    } else {
        adeudo.value = 0;
    }

    const originalDate = new Date(saleTicket.created_at);
    originalDate.setHours(originalDate.getHours() - 6);
    const adjustedDate = originalDate.toISOString();
    items.value.push({
        'Folio': saleTicket.id,
        'Estatus': saleTicket.sale_ticket_status.name,
        'Tipo de venta': saleTicket.is_online ? 'En linea' : 'Taquilla',
        'Total asientos vendidos': saleTicket.event_seat_catalogs.length,
        'Asientos': seatCatalogues,
        'Monto total de venta': formatPrice(saleTicket.total_amount),
        'Monto Pagado': formatPrice((Number(Number(saleTicket.amount_received) - Number(saleTicket.total_returned)))),
        'Adeudo': formatPrice(adeudo.value),
        'Tipos de pago': paymentTypes,
        'Promotion': saleTicket.promotion_id ? `${saleTicket.promotion.name}` : 'N/A',
        'Venta a meses': saleTicket.payment_in_installments ? saleTicket.payment_in_installments : 'N/A',
        'Deudor': saleTicket.sale_debtor_id ? `${saleTicket.sale_debtor.first_name} ${saleTicket.sale_debtor.last_name}` : 'N/A',
        'Fecha': adjustedDate,
    });

    amountOwed.value += Number(adeudo.value);
});

const filterByDate = () => {
    if (!dateToFindResume.value) {
        itemsPerDate.value = [];
        return;
    }
    const selectedDate = new Date(dateToFindResume.value).toISOString().split('T')[0];
    itemsPerDate.value = items.value.filter(item => {
        const itemDate = new Date(item['Fecha']).toISOString().split('T')[0];
        return itemDate === selectedDate;
    });

    salesPerDate.value = {efectivo: 0, tarjeta: 0, adeudo: 0, total: 0, venta: 0};

    itemsPerDate.value.forEach((item) => {
        if (item.Estatus === 'pagado' || item.Estatus === 'pendiente') {
           const paymentTypes = item['Tipos de pago'].split(',').reduce((acc, payment) => {
                const [key, value] = payment.split(':').map(str => str.trim());
                acc[key.toLowerCase()] = parseFloat(value);
                return acc;
            }, {});
            const seatsSolt = item.Asientos.split(',').length;
            salesPerDate.value.venta += seatsSolt;

            if (paymentTypes.efectivo) {
                salesPerDate.value.efectivo += paymentTypes.efectivo;
            }

            if (paymentTypes.tarjeta) {
                salesPerDate.value.tarjeta += paymentTypes.tarjeta;
            }

            const adeudo = parseFloat(item['Adeudo'].replace('$', '').replace(',', ''));
            salesPerDate.value.adeudo += adeudo;

            const total = parseFloat(item['Monto Pagado'].replace('$', '').replace(',', ''));
            salesPerDate.value.total += total;
        }
    });

    toast('Datos obtenidos con exito!', {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
    })
};

const allowedDates = ref([]);
const generateAllowedDates = () => {
    allowedDates.value = items.value
        .filter(item => item.Estatus === 'pagado' || item.Estatus === 'pendiente')
        .map(item => {
            const date = new Date(item.Fecha);
            return date.toISOString().split('T')[0];
        });
};

const isAllowedDate = (val) => {
    const formattedDate = val.toISOString().split('T')[0];
    return allowedDates.value.includes(formattedDate);
};

onMounted(() => {
    generateAllowedDates();
});
</script>

<template>

    <Head title="indicadores"/>
    <SuccessSession />
    <AppLayout >
        <ErrorSession />
        <div class="relative w-full block overflow-hidden px-4 pt-10 lg:px-0 lg:pt-10 mb-20 pb-10">
            <section
                class="w-full relative bg-cover bg-center lg:h-[450px] flex flex-col items-start justify-center rounded-2xl overflow-hidden"
                :style="{ backgroundImage: `url(/storage/${historyPerEvent.event.global_image.file_path})` }"
                >
                <div class="w-full rounded-xl lg:rounded-none bg-black/40 p-7 text-white backdrop-blur-md h-full flex flex-col items-center justify-center gap-6">
                    <h2 data-aos="fade-left" data-aos-duration="2500" class="font-bold text-2xl lg:text-4xl">
                        {{ historyPerEvent.event.name }}
                    </h2>
                    <div>
                    <div v-for="(sales, type) in historyPerEvent.type_sales" :key="type">
                        <div v-if="type == 'total'">
                       <h4 class="font-bold text-xl">
                            Aforo esperado: {{ sales.sales + (historyPerEvent.availability.abonados || 0) }}
                            <span class="text-base">(asistentes)</span>
                        </h4>
                        </div>
                    </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" class="grid lg:grid-cols-3 gap-5 w-full">
                        <div class="p-10 bg-white/20 rounded text-center">
                            <h3 class="font-bold">Temporada</h3>
                            <p>{{ historyPerEvent.event.serie.global_season.name }}</p>
                        </div>
                        <div class="p-10 bg-white/20 rounded text-center">
                            <h3 class="font-bold">Ubicación</h3>
                            <p>{{ historyPerEvent.event.serie.global_season.name }}</p>
                        </div>
                        <div class="p-10 bg-white/20 rounded text-center">
                            <h3 class="font-bold">Fecha</h3>
                            <p>{{ dateFormat(historyPerEvent.event.start_date) }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="mt-16 lg:px-10">
                <h2 class="text-4xl font-bold">Disponibilidad de asientos</h2>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5 mb-16">
                    <div v-for="(count, type) in historyPerEvent.availability" :key="type">
                        <div  class="p-5 border-[3px] border-gray-200 rounded-2xl bg-white flex flex-col justify-between gap-5">
                            <div class="flex items-center justify-between gap-3 text-xl">
                                <div class="flex items-center gap-2 font-bold">
                                    <span class="material-symbols-outlined block p-2 rounded-md bg-blue-500 text-white">check_circle</span>
                                    <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                                </div>
                                <span class="block font-bold">{{ count }}</span>
                            </div>
                            <div class="flex items-center gap-3">
                                 <span class="material-symbols-outlined block p-2 rounded-full bg-blue-100 text-blue-600">check_circle</span>
                                <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-16 lg:px-10">
                <h2 class="text-4xl font-bold">Venta general</h2>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-10 mt-5 mb-16">
                <div v-for="(amount, type) in historyPerEvent.type_payments" :key="type">
                    <div  class="p-5 border-[3px] border-gray-200 rounded-2xl bg-white flex flex-col justify-between gap-5">
                        <div class="flex items-center justify-between gap-3">
                            <h3>Ventas para este evento</h3>
                            <span class="material-symbols-outlined block p-2 rounded-full bg-green-100 text-green-600">payments</span>
                        </div>
                        <div class="flex items-center justify-between gap-3 text-xl">
                            <div class="flex items-center gap-2 font-bold">
                                <span class="material-symbols-outlined block p-2 rounded-md bg-green-500 text-white">bar_chart</span>
                                <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                            </div>
                            <span class="block font-bold">{{ formatPrice(amount.amount) }} MXN</span>
                        </div>
                        <div>
                            <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                        </div>
                    </div>
                </div>
                <div  class="p-5 border-[3px] border-gray-200 rounded-2xl bg-white flex flex-col justify-between gap-5">
                    <div class="flex items-center justify-between gap-3">
                        <h3>Adeudo para este evento</h3>
                        <span class="material-symbols-outlined block p-2 rounded-full bg-pink-100 text-red-600">payments</span>
                    </div>
                    <div class="flex items-center justify-between gap-3 text-xl">
                        <div class="flex items-center gap-2 font-bold">
                            <span class="material-symbols-outlined block p-2 rounded-md bg-red-500 text-white">bar_chart</span>
                            <h3>Adeudo</h3>
                        </div>
                        <span class="block font-bold">{{ formatPrice(amountOwed) }} MXN</span>
                    </div>
                    <div>
                        <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                    </div>
                </div>
            </div>
            <div class="w-full lg:px-10 flex flex-col lg:flex-row justify-between gap-10 mt-16">
                <div class="w-full lg:w-1/3">
                    <div class="w-full">
                        <v-date-picker header="Venta por día" title="Selecciona una fecha"
                            v-model="dateToFindResume"
                            :allowed-dates="isAllowedDate"
                            class="!w-full"
                        ></v-date-picker>

                        <PrimaryButton @click="filterByDate" heightbtn="!h-[60px]" paddingbtn="!w-full !block">
                            <span>Buscar resumen</span>
                        </PrimaryButton>
                    </div>
                </div>
                <div class="w-full lg:w-2/3">
                    <div v-if="itemsPerDate.length > 0">
                        <div class="mb-16">
                            <div class="mb-10 mt-2">
                                <h2 class="text-4xl font-bold">Venta</h2>
                                <h3 class="text-lg mt-4">{{ formatPrice(salesPerDate.total) }} MXN</h3>
                                <h3 class="text-lg">{{ salesPerDate.venta }} asientos vendidos</h3>
                            </div>
                            <div class="w-full grid lg:grid-cols-2 gap-10">
                                <div class="p-5 text-center shadow-xl border-b-8 border-b-green-500 rounded-lg w-full">
                                    <p class="font-bold opacity-50">Efectivo</p>
                                    <h3 class="text-2xl font-bold mt-2">{{ formatPrice(salesPerDate.efectivo) }} MXN</h3>
                                </div>
                                <div class="p-5 text-center shadow-xl border-b-8 border-b-blue-500 rounded-lg w-full">
                                    <p class="font-bold opacity-50">Tarjeta</p>
                                    <h3 class="text-2xl font-bold mt-2">{{ formatPrice(salesPerDate.tarjeta) }} MXN</h3>
                                </div>
                                <div class="p-5 text-center shadow-xl border-b-8 border-b-red-500 rounded-lg w-full">
                                    <p class="font-bold opacity-50">Adeudo</p>
                                    <h3 class="text-2xl font-bold mt-2">{{ formatPrice(salesPerDate.adeudo) }} MXN</h3>
                                </div>
                                <div class="p-5 text-center shadow-xl border-b-8 border-b-yellow-500 rounded-lg w-full">
                                    <p class="font-bold opacity-50">Total</p>
                                    <h3 class="text-2xl font-bold mt-2">{{ formatPrice(salesPerDate.total) }} MXN</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="flex bg-white items-center justify-center text-center min-h-[500px] shadow-lg rounded-xl flex-col gap-1">
                        <h2 class="text-lg">Seleccione una fecha válida para un resumen de venta</h2>
                    </div>
                </div>
            </div>

            <div v-if="itemsPerDate.length > 0" class="w-full mt-16 lg:px-10">
                <v-data-table :items="itemsPerDate" :headers="headers" :header-props="headerProps">
                    <template v-slot:item.Estatus="{ item }">
                        <span
                            class="py-1 px-4 rounded-full"
                            :class="{
                                '!text-green-600 bg-green-100': item.Estatus === 'pagado',
                                '!text-red-600 bg-red-100': item.Estatus === 'cancelado',
                                '!text-yellow-600 bg-yellow-100': item.Estatus === 'pendiente'
                            }"
                        >
                            {{ item.Estatus }}
                        </span>
                    </template>

                    <template v-slot:item.Fecha="{ item }">
                        {{ dateFormat(item.Fecha) }}
                    </template>
                </v-data-table>
            </div>

            <div class="w-full lg:px-10 mt-10 bg-white">
                <Eventshow v-bind:salesPerDay="historyPerEvent.sales_per_day" />
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10  lg:p-10">
                <div v-for="(sales, type) in historyPerEvent.type_sales" :key="type" :class="{ 'lg:col-span-3': type == 'total'}">
                    <div class="border-[3px] border-gray-200 p-5 rounded-2xl bg-white flex flex-col justify-between gap-5">
                        <div v-if="type == 'total'" class="flex flex-col items-center gap-3">
                            <h3 class="text-3xl font-bold mb-2">Asientos vendidos</h3>
                            <div class="flex items-center justify-between gap-3 text-xl">
                                <div class="flex items-center gap-2 font-bold">
                                    <span class="material-symbols-outlined block p-2 rounded-md bg-green-500 text-white">trending_up</span>
                                    <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                                </div>
                                <p class="block font-bold">{{ sales.sales }} <span class="text-xs">(asientos)</span> </p>
                            </div>
                            <div>
                                <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                            </div>
                        </div>
                        <div v-else-if="type == 'online'">
                            <div class="flex flex-col items-center justify-between gap-3">
                                <div class="flex items-center justify-between gap-3 text-xl">
                                    <div class="flex items-center gap-2 font-bold">
                                        <span class="material-symbols-outlined block p-2 rounded-md bg-blue-500 text-white">confirmation_number</span>
                                        <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                                    </div>
                                    <p class="block font-bold">{{ sales.sales }} <span class="text-xs">(asientos)</span> </p>
                                </div>
                                <div>
                                    <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="type == 'taquilla'">
                            <div class="flex flex-col items-center justify-between gap-3">
                                <div class="flex items-center justify-between gap-3 text-xl">
                                    <div class="flex items-center gap-2 font-bold">
                                        <span class="material-symbols-outlined block p-2 rounded-md bg-pink-500 text-white">confirmation_number</span>
                                        <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                                    </div>
                                    <p class="block font-bold">{{ sales.sales }} <span class="text-xs">(asientos)</span> </p>
                                </div>
                                <div>
                                    <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="type == 'taquilla cortesias'">
                            <div class="flex flex-col items-center justify-between gap-3">
                                <div class="flex items-center justify-between gap-3 text-xl">
                                    <div class="flex items-center gap-2 font-bold">
                                        <span class="material-symbols-outlined block p-2 rounded-md bg-pink-500 text-white">confirmation_number</span>
                                        <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                                    </div>
                                    <p class="block font-bold">{{ sales.sales }} <span class="text-xs">(asientos cortesias)</span> </p>
                                </div>
                                <div>
                                    <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="flex flex-col items-center justify-between gap-3">
                                <div class="flex items-center justify-between gap-3 text-xl">
                                    <div class="flex items-center gap-2 font-bold">
                                        <span class="material-symbols-outlined block p-2 rounded-md bg-yellow-500 text-white">confirmation_number</span>
                                        <h3>{{ formatFirstLetterUppercase(type) }}</h3>
                                    </div>
                                    <p class="block font-bold">{{ sales.sales }} <span class="text-xs">(asientos)</span> </p>
                                </div>
                                <div>
                                    <p class="text-right text-xs">Actualizado al día: {{currentDay + '/' + currentMonth + '/' + currentYear }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full mt-16 px-0 lg:px-10">
                <div class="flex flex-col lg:flex-row items-center justify-between gap-5 mb-5">
                    <h2 class="font-bold text-4xl">Historial de ventas</h2>
                    <ExportButton @click="exportSummaryByTickets(historyPerEvent.event.id)" heightbtn="!h-[60px]" paddingbtn="!px-14" bgbtn="!bg-green-500">
                        <span>Exportar a Excel</span>
                    </ExportButton>
                </div>
                <v-data-table :items="items" :headers="headers" :header-props="headerProps">
                    <template v-slot:item.Estatus="{ item }">
                        <span
                            class="py-1 px-4 rounded-full"
                            :class="{
                                '!text-green-600 bg-green-100': item.Estatus === 'pagado',
                                '!text-red-600 bg-red-100': item.Estatus === 'cancelado',
                                '!text-orange-600 bg-orange-100': item.Estatus === 'parcialmente cancelado',
                                '!text-yellow-600 bg-yellow-100': item.Estatus === 'pendiente'
                            }"
                        >
                            {{ formatFirstLetterUppercase(item.Estatus) }}
                        </span>
                    </template>
                    <template v-slot:item.Fecha="{ item }">
                        {{ dateFormat(item.Fecha) }}
                    </template>
                </v-data-table>
            </div>
        </div>
    </AppLayout>
</template>
