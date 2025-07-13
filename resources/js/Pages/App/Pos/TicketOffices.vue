<script setup>
import { Head, Link, router,  useForm as useFormInertia } from '@inertiajs/vue3';
import Footer from '@/Components/Footer.vue';
import { ref } from 'vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import useStringFormat from '@/composables/stringFormat';
import AppNav from '@/Components/navs/AppNav.vue';
import GuestNav from '@/Components/navs/GuestNav.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';
import useDateFormat from '@/composables/dateFormat';
import usePriceFormat from '@/composables/priceFormat';
import axios from 'axios';
import { toast } from 'vue3-toastify'

const { dateFormat } = useDateFormat();
const { formatPrice } = usePriceFormat();

const props =  defineProps({
    'ticket_offices': {
        type: Array,
        required: true,
    }
})
const dialog = ref(false);
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
});
const tabs = ref(null);
const saleTicketsSelected = ref([]);
const paymentTypes = ref([]);
const paymentTypesSelected = ref([]);
const items = ref([]);
const loadingPrint = ref(false);
const loadingCancel = ref(false);
const cancelSeatCodes = ref([]);
const cancelPassword = ref('');
const { formatFirstLetterUppercase } = useStringFormat();
const headers = [
    { title: 'Folio', key: 'Folio' },
    { title: 'Estatus', key: 'Estatus' },
    { title: 'Promoción', key: 'Promotion' },
    { title: 'Fecha de venta', key: 'Fecha de venta' },
    { title: 'Fue transferido', key: 'Fue transferido' },
    { title: 'Asientos', key: 'Asientos' },
    { title: 'Verificados', key: 'Verificados' },
    { title: 'Monto Pagado', key: 'Monto Pagado' },
    { title: 'Monto total', key: 'Monto total' },
    { title: 'Adeudo', key: 'Monto restante' },
    { title: 'Pagos realizados', key: 'Tipos de pago' },
    {title: 'Acciones', key: 'Acciones', sortable:false}
];
const headerProps = {
    class: '!font-bold'
};
const updateSaleTicketsSelected = (item) => {
    paymentTypesSelected.value = [];
    cancelSeatCodes.value = [];
    saleTicketsSelected.value = item.Asientos.split(',');
    paymentTypes.value = item['Tipos de pago'].split(',');
}

const cancelTicket = (item, isActive) => {
    if(paymentTypes.value.length != paymentTypesSelected.value.length) {
        toast('Se deben selecionar todos los tipos de pago para ordenar el descuento de la venta', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }
    const paymentTypesSelectedKeys = paymentTypesSelected.value.map(item => {
        return item.split(':')[0].trim();
    });

    const isPartialCancel = ref(false);

    if(cancelSeatCodes.value.length > 0) isPartialCancel.value = true

    const data  = useFormInertia({
        sale_ticket_id: item.Folio,
        is_partial_cancel: isPartialCancel.value,
        cancel_seat_codes: cancelSeatCodes.value,
        payment_types_selected_keys: paymentTypesSelectedKeys
    });

    loadingCancel.value = true;

    data.delete(route('sale-ticket.cancelation-sale-ticket'), {
        onSuccess: (response) => {
            toast('Los asientos se han cancelado exitosamente!', {
                "theme": "auto",
                "type": "success",
                "dangerouslyHTMLString": true
            })
            searchSaleTicket();
            isActive.value = false;
        },
        onError: (error) => {
            toast('Hubo un error al cancelar los asientos', {
                "theme": "auto",
                "type": "error",
                "autoClose": 10000,
                "dangerouslyHTMLString": true
            })
        },
        onFinish: () => {
            loadingCancel.value = false;
            isActive.value = false;
        }
    })
};
const openned = ref(false);

/*
* Search sale tickets by folio or id
*/
const sale_ticket_id = ref('');
const loadingSearch = ref(false);
const searchSaleTicket = () => {
    if(sale_ticket_id.value == '') {
        toast('El folio o id del ticket no puede estar vacio', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return;
    }
    loadingSearch.value = true;
    items.value = [];
    axios.get(route('ticket-offices.ticket.details', {id: sale_ticket_id.value}))
        .then(response => {
            console.log(response.data);
            const saleTicket = response.data.data.sale_ticket;
            const paymentTypes = saleTicket.global_payment_types.map(paymentType => {
                return `${formatFirstLetterUppercase(paymentType.name)}: ${paymentType.pivot.amount}`;
            }).join(', ');
            const seatCatalogues  = saleTicket.event_seat_catalogues.map(seatCatalogue => {
                return `${seatCatalogue.seat_catalogue.code}`;
            }).join(', ');

            const seatCataloguesVerified = saleTicket.event_seat_catalogues.map(seatCatalogue => {
                return `${seatCatalogue.seat_catalogue.code} - ${seatCatalogue.seat_catalogue.is_verified ? 'Verificado' : 'No verificado'}`;
            }).join(', ');

            items.value.push({
                'Folio': saleTicket.id,
                'Estatus': saleTicket.sale_ticket_status.name,
                'Promotion': saleTicket.promotion,
                'Fecha de venta': dateFormat(saleTicket.created_at),
                'Fue transferido': saleTicket.is_transfer ? 'Si' : 'No',
                'Asientos': seatCatalogues,
                'Verificados': seatCataloguesVerified,
                'Monto total': formatPrice(saleTicket.total_amount),
                'Monto Pagado': formatPrice((Number(Number(saleTicket.amount_received)-Number(saleTicket.total_returned)))),
                'Monto restante': formatPrice(saleTicket.remaining_amount),
                'Tipos de pago': paymentTypes,
                'Deudor': saleTicket.sale_debtor,
                'PurcharseType': saleTicket.purchase_type
            });
            openned.value = true;
        })
        .catch(error => {
            console.error(error);
            toast(error.message, {
                "theme": "auto",
                "type": "error",
                "autoClose": 10000,
                "dangerouslyHTMLString": true
            })
        })
        .finally(() => {
            loadingSearch.value = false;
        });

};

const printTicketAbonado = (item, isActive) => {
loadingPrint.value = true;
    if(item.Deudor){
        axios.get(route('events.subscribers.installment.receipt', { id: item.Folio }))
            .then(response => {
                const pdfContent = atob(response.data.pdf);
                const pdfBlob = new Blob([new Uint8Array([...pdfContent].map(char => char.charCodeAt(0)))], { type: 'application/pdf' });
                const pdfUrl = window.URL.createObjectURL(pdfBlob);
                printInKioskMode(pdfUrl);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                loadingPrint.value = false;
                isActive.value = false;
            })

    }else{
        axios.get(route('events.printSubscriber', { id: item.Folio , purchase_type:item.PurcharseType }))
            .then(response => {
                const pdfContent = atob(response.data.pdf);
                const pdfBlob = new Blob([new Uint8Array([...pdfContent].map(char => char.charCodeAt(0)))], { type: 'application/pdf' });

                if (response.data.subscriber) {
                    const pdfUrl = window.URL.createObjectURL(pdfBlob);
                    printInKioskMode(pdfUrl);
                }else{
                    const pdfFile = new File([pdfBlob], 'arch.pdf', { type: 'application/pdf' });
                    const formData = new FormData();
                    formData.append('pdf', pdfFile);
                    axios.post(route('print'), formData)
                        .then(response => {
                            console.log(response.data);
                        })
                        .catch(error => {
                            console.error(error);
                            const pdfUrl = window.URL.createObjectURL(pdfBlob);
                            printInKioskMode(pdfUrl);
                        });
                }
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                loadingPrint.value = false;
                isActive.value = false;
            })
    };
}

function printInKioskMode(url, close = true) {
    const ventana = window.open(url, '_blank', 'fullscreen=yes,kiosk=yes');
    ventana.onload = () => {
        ventana.print();
        if (close){
            setTimeout(() => {
                //ventana.close();
            }, 4000);
        }
    };
}
</script>

<template>
    <Head title="Taquillas" />
    <AppNav/>
    <div class="pt-5">
        <GuestNav/>
    </div>
    <main class="relative overflow-hidden">
        <div class="absolute -right-40 lg:-right-96 bottom-40 h-[480px] w-[300px] lg:h-[680px] lg:w-[600px] rounded-full blur-[120px] lg:blur-[220px] bg-primary">
        </div>
        <section class="max-w-7xl min-h-screen pt-28 lg:pt-10 mb-20 mx-auto px-4 lg:px-0 ">
            <div class="w-full">
                <div class="space-y-5 lg:space-y-8 max-w-2xl">
                    <Link :href="route('welcome')">
                        <div class="inline-flex cursor-pointer items-center gap-x-1.5 decoration-2 hover:underline focus:outline-none focus:underline">
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            Regresar a eventos
                        </div>
                    </Link >

                    <h2 class="text-3xl font-bold lg:text-6xl font-bebas">Taquillas administrables</h2>
                    <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" variant="elevated" class="text-none !h-[70px] !rounded-2xl !px-12 !bg-gradient-to-r from-primary to-secondary !text-white">Administrar ventas</v-btn>
                        </template>
                        <v-card>
                            <v-toolbar class="!bg-gradient-to-r !from-slate-950 !via-purple-950 !to-slate-950">
                                <v-btn class="!text-white" icon="mdi-close" @click="dialog = false"></v-btn>
                                <v-toolbar-title>
                                    <div class="font-bold text-white">Administración de ventas</div>
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                <v-btn color="white" text="Aceptar" variant="tonal" @click="dialog = false"></v-btn>
                                </v-toolbar-items>
                            </v-toolbar>
                            <div class="w-full max-w-[90%] mx-auto mt-10">
                                <div class="flex items-center justify-center gap-1 flex-col w-full">
                                    <v-text-field
                                        color="purple"
                                        label="Folio o ID del ticket"
                                        placeholder="123"
                                        hint="Ingresa el folio o id del ticket"
                                        v-model="sale_ticket_id"
                                        variant="outlined"
                                        class="!w-full"
                                    ></v-text-field>
                                    <PrimaryButton @click="searchSaleTicket" heightbtn="!h-[70px]" paddingbtn="!px-12" :loading="loadingSearch">
                                        <span>Buscar venta asociada</span>
                                    </PrimaryButton>
                                </div>

                                <div v-if="openned" class="mb-10 cash-register-history">
                                    <v-data-table :items="items" :headers="headers" :header-props="headerProps">
                                        <template v-slot:item.Estatus="{ item }">
                                            <span class="py-1 px-4 rounded-full"
                                            :class="{
                                                '!text-green-600 bg-green-100': item.Estatus === 'pagado',
                                                '!text-red-600 bg-red-100': item.Estatus === 'cancelado',
                                                '!text-orange-600 bg-orange-100': item.Estatus === 'parcialmente cancelado',
                                                '!text-yellow-600 bg-yellow-100': item.Estatus === 'pendiente'
                                            }">
                                                {{ formatFirstLetterUppercase(item.Estatus) }}
                                            </span>
                                        </template>
                                        <template v-slot:item.Promotion="{ item }">
                                            {{ item.Promotion ? `${item.Promotion.name} (${ formatFirstLetterUppercase(item.Promotion.promotion_type.name) })` : '' }}
                                        </template>
                                        <template v-slot:item.Acciones="{ item }">
                                            <div class="flex items-center gap-3 justify-between !my-3">
                                                    <v-dialog max-width="600">
                                                        <template v-slot:activator="{ props: activatorProps }">
                                                            <v-btn @click="updateSaleTicketsSelected(item)" v-bind="activatorProps" density="default" icon="mdi-printer-settings" class="!text-purple-600 !bg-purple-300"></v-btn>
                                                        </template>
                                                        <template v-slot:default="{ isActive }">
                                                            <v-card title="¿Estas seguro de reimprimir el ticket?">
                                                            <v-card-text>
                                                                <p class="opacity-50 mt-3 text-center">Preciona 'Imprimir' para ejecutar la acción.</p>
                                                                <div class="flex items-center justify-center gap-3 mt-5">
                                                                    <p v-for="code in saleTicketsSelected" :key="code" class="py-2 px-7 bg-purple-200 text-purple-700 rounded-md text-xl">{{ code }}</p>
                                                                </div>
                                                            </v-card-text>

                                                            <v-card-actions class="mb-4 mr-4">
                                                                <v-spacer></v-spacer>
                                                                <v-btn color="red" rounded="large" variant="tonal" class="text-none !px-4" text="Cancelar" @click="isActive.value = false"></v-btn>
                                                                <v-btn :loading="loadingPrint" @click="printTicketAbonado(item, isActive)" rounded="large" variant="elevated" class="text-none !bg-purple-600 !text-white">
                                                                    Imprimir
                                                                </v-btn>
                                                            </v-card-actions>
                                                            </v-card>
                                                        </template>
                                                </v-dialog>
                                                <v-dialog max-width="800">
                                                        <template v-slot:activator="{ props: activatorProps }">
                                                            <v-btn @click="updateSaleTicketsSelected(item)" v-bind="activatorProps" density="default" icon="mdi-delete" class="!text-red-600 !bg-red-200"></v-btn>
                                                        </template>
                                                        <template v-slot:default="{ isActive }">
                                                            <v-card title="¿Estas seguro de cancelar el ticket?">
                                                            <v-card-text>
                                                                <div class="flex flex-col items-center justify-center">
                                                                    <p class="text-xs py-1 px-5 bg-red-100 text-red-500 rounded-full">Selecciona el tipo de pago y orden en el que descontara la venta</p>
                                                                    <div v-if="paymentTypesSelected.length > 0" class="mt-3 text-purple-600 font-bold flex items-center justify-center gap-3">
                                                                        <div v-for="(type, index) in paymentTypesSelected" :key="index">
                                                                        <p class="py-1 px-3 bg-purple-100 rounded-md"> {{ index + 1 }} - {{ type }} </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="flex items-center gap-2">
                                                                        <v-checkbox
                                                                        class="!flex !items-center"
                                                                        v-for="(type, index) in paymentTypes" :key="index"
                                                                        v-model="paymentTypesSelected"
                                                                        :label="type"
                                                                        :value="type"
                                                                        color="purple"
                                                                        ></v-checkbox>
                                                                    </div>
                                                                </div>
                                                                <div class="!w-full mt-0">
                                                                    <v-tabs
                                                                        v-model="tabs"
                                                                        color="purple"
                                                                        grow
                                                                        >
                                                                        <v-tab :value="1">
                                                                            <span>Cancelación total</span>
                                                                        </v-tab>

                                                                        <v-tab :value="2">
                                                                            <span>Cancelación parcial</span>
                                                                        </v-tab>

                                                                    </v-tabs>

                                                                    <v-tabs-window v-model="tabs">
                                                                    <v-tabs-window-item :value="1">
                                                                        <v-card>
                                                                        <v-card-text class="!mt-5">
                                                                            <div class="flex items-center justify-center gap-3">
                                                                                <p v-for="code in saleTicketsSelected" :key="code" class="py-2 px-7 bg-purple-200 text-purple-700 rounded-md text-xl">{{ code }}</p>
                                                                            </div>
                                                                        </v-card-text>
                                                                        </v-card>
                                                                    </v-tabs-window-item>
                                                                    <v-tabs-window-item :value="2">
                                                                        <v-card>
                                                                        <v-card-text>
                                                                            <v-select
                                                                                append-inner-icon="mdi-qrcode"
                                                                                :items="saleTicketsSelected"
                                                                                v-model="cancelSeatCodes"
                                                                                multiple
                                                                                label="Selecciona los asientos a cancelar"
                                                                                color="purple"
                                                                                clearable
                                                                                class="w-full"
                                                                                hint="Opcion multiple"
                                                                                persistent-hint=""
                                                                            ></v-select>
                                                                        </v-card-text>
                                                                        </v-card>
                                                                    </v-tabs-window-item>
                                                                    </v-tabs-window>
                                                                </div>
                                                            </v-card-text>

                                                            <v-card-actions class="mb-4 mr-4">
                                                                <v-spacer></v-spacer>
                                                                <v-btn color="red" rounded="large" variant="tonal" class="text-none !px-4" text="Cancelar" @click="isActive.value = false"></v-btn>
                                                                <v-btn :loading="loadingCancel" @click="cancelTicket(item, isActive)" rounded="large" variant="elevated" class="text-none !bg-red-600 !text-white">
                                                                    Ejecutar Cancelaciòn
                                                                </v-btn>
                                                            </v-card-actions>
                                                            </v-card>
                                                        </template>
                                                </v-dialog>
                                            </div>
                                        </template>
                                    </v-data-table>
                                </div>
                            </div>
                        </v-card>
                    </v-dialog>
                    <div class="flex flex-col gap-3">
                         <div class="flex items-center gap-x-5">
                            <div class="flex items-center gap-x-2">
                                <span class="material-symbols-outlined text-xl">location_on</span>El nido del halcón
                            </div>
                            <div class="flex items-center gap-x-2">
                                <span class="material-symbols-outlined text-xl">calendar_today</span>{{formattedDate}}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Title -->
                <ErrorSession />

                <div v-if="ticket_offices" class="w-full flex-col lg:flex-row flex items-start justify-between gap-6 mt-7">
                    <!-- Grid -->
                    <div class="grid sm:grid-cols-2 gap-6 w-full lg:w-2/3">
                        <!-- Card -->
                        <div :href="route('ticket-offices.show', ticketOffice.id)" v-for="ticketOffice in ticket_offices" :key="ticketOffice.id" class="group flex flex-col">
                            <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                                <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src="https://images.pexels.com/photos/4921264/pexels-photo-4921264.jpeg" alt="Blog Image">
                                 <div class="absolute top-0 w-full h-full z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center text-white">
                                    <div class="font-bold">
                                        Taquilla Número {{ ticketOffice.id }}
                                    </div>
                                </div>
                            </div>

                            <div class="mt-7">
                                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                                    {{ formatFirstLetterUppercase(ticketOffice.name) }}
                                </h3>
                                <p class="mt-3 text-gray-800">
                                    {{ formatFirstLetterUppercase(ticketOffice.description) }}
                                </p>
                                <div class="flex items-center justify-between mt-5">
                                    <Link :href="route('ticket-offices.show', ticketOffice.id)">
                                        <PrimaryButton heightbtn="!h-[70px]" paddingbtn="!px-12">
                                            <span>Administrar taquilla</span>
                                        </PrimaryButton>
                                    </Link>
                                    <Link :href="route('ticket-offices.check')">
                                        <SecondaryButton heightbtn="!h-[70px]" paddingbtn="!px-12">
                                            <span>Verificar</span>
                                        </SecondaryButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />

    </main>
</template>

<style scoped>

</style>
