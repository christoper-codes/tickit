<script setup>
import NavigationDrawer from '@/Components/NavigationDrawer.vue';
import { useForm as useFormInertia } from '@inertiajs/vue3';
import  GuestLayout  from '@/Layouts/GuestLayout.vue';
import usePriceFormat from '@/composables/priceFormat';
import { ref } from 'vue';
import axios from 'axios';
import { toast } from 'vue3-toastify'
const { formatPrice } = usePriceFormat();



var partido = ref();
var selected_value = ref();
var users_list = [];



const props = defineProps({
    "events": {
        Type: Object,
        Required: true
    },
    "users": {
        Type: Object,
        Required: true
    },
    "salesTicketCancellationCode": {
        Type: Object,
        Required: true
    },
})

var searchTab = ref('');
var userSelect = ref('');
var seats = ref([]);


var headersTab = ref([
    { align: 'start', key: 'id_sale_tickets', title: 'Folio' },
    { key: 'email',sortable: false, title: 'Email',},
    { key: 'code', title: 'Codigo' },
    { key: 'payments', title: 'Tipos De Pago'},
    { title: 'Acciones', key: 'actions', sortable: false },
]
);


const usersOfEvent = async () =>  {

    await axios.get( route('ticket-offices.search.event', { id: partido.value})).then(
        response => {

            seats.value = []

            response.data.datos.saleSeats.forEach(elementy => {

                if (seats.value.length > 0) {

                    seats.value.forEach(elementx => {
                        if (elementx['id_sale_tickets'] == elementy['id_sale_tickets']) {
                            elementx['code'] = elementx['code'] + ',' + elementy['code']
                        }else{
                            const paymentTypes = elementy['payments'].map(paymentType => {
                                return `${paymentType.payment_name}: ${formatPrice(paymentType.amount)}`;
                            }).join(', ');

                            seats.value.push(
                            {
                                email : elementy['email'],
                                code: elementy['code'],
                                id_sale_tickets: elementy['id_sale_tickets'],
                                payments: paymentTypes,
                                item: elementy
                            })
                        }
                    });

                }else{
                    const paymentTypes = elementy['payments'].map(paymentType => {
                        return `${paymentType.payment_name}: ${formatPrice(paymentType.amount)}`;
                    }).join(', ');

                    seats.value.push(
                        {
                            email : elementy['email'],
                            code: elementy['code'],
                            id_sale_tickets: elementy['id_sale_tickets'],
                            payments: paymentTypes,
                            item: elementy
                        }
                    )
                }

            });

        }).catch(
            error=>
            {
            console.log(error)
            }
        )

}
const tabs = ref(null);
const cencellationPasswordEntered = ref('');
const paymentTypesSelected = ref([]);
const cancelSeatCodes = ref([]);
const saleTicketsSelected = ref([]);
const paymentTypes = ref([]);
const cancelPassword = ref('');
const loadingPrint = ref(false);
const loadingCancel = ref(false);

cancelPassword.value = props.salesTicketCancellationCode.cancellation_code


const cancelTicket = (item) => {

    if(cencellationPasswordEntered.value != cancelPassword.value) {
        toast('El password no coincide para ejecutar la cancelacion', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }
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
        sale_ticket_id: item.id_sale_tickets,
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
            data.get(route('ticket-offices.search'));
        }
    })

};




const updateSaleTicketsSelected = (item) => {
    cencellationPasswordEntered.value = '';
    paymentTypesSelected.value = [];
    cancelSeatCodes.value = [];
    saleTicketsSelected.value = item.code.split(',');
    paymentTypes.value = item['payments'].split(',');
}

const printTicket = (item, isActive) => {

    loadingPrint.value = true;
    const data = {
        'sale_ticket_id': item.id_sale_tickets,
    };
    axios.post(route('events.print-sale-ticket'), data)
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
};

function printInKioskMode(url) {
    const ventana = window.open(url, '_blank', 'fullscreen=yes,kiosk=yes');
    ventana.onload = () => {
        ventana.print();
       /*  setTimeout(() => {
            ventana.close();
        }, 4000); */

    };
}




</script>

<template>
    <GuestLayout />
    <NavigationDrawer />

    <div class="w-full px-4 lg:px-0 lg:w-[75%] h-auto mx-auto py-10 lg:py-5 font-extrabold text-2xl">
        <h1>Buscar Asientos</h1>
        <v-select
            class="my-3"
            v-model="partido"
            chips
            label="Selecciona el partido"
            :items="props.events"
            variant="solo-filled"
            item-title="name"
            item-value="id"
            @update:model-value="usersOfEvent"
        ></v-select>

        <div v-if="seats.length > 0" class="w-full px-4 lg:px-0 lg:w-[75%] h-auto mx-auto py-10 lg:py-0">
            <v-card
                title=""
                flat
            >

                <template v-slot:text>
                    <v-text-field
                        v-model="searchTab"
                        label="Buscar correo o asientos..."
                        prepend-inner-icon="mdi-magnify"
                        variant="solo"
                        color="orange-darken-2"
                        hide-details
                        single-line
                    ></v-text-field>
                </template>


                <v-data-table
                    :headers="headersTab"
                    :items="seats"
                    :search="searchTab"
                    v-model="userSelect"
                    item-value="username"
                    select-strategy="single"
                >
                    <template v-slot:item.actions="{ item }">
                        <v-dialog max-width="600">
                            <template v-slot:activator="{ props: activatorProps }">
                                <v-btn @click="updateSaleTicketsSelected(item)" v-bind="activatorProps" density="default" icon="mdi-printer" class="!text-blue-600 !bg-blue-200"></v-btn>
                            </template>
                            <template v-slot:default="{ isActive }">
                                <v-card title="¿Estas seguro de reimprimir el ticket?">
                                <v-card-text>
                                    <p class="opacity-50 mt-3 text-center">Preciona 'Imprimir ticket' para ejecutar la acción.</p>
                                    <div class="flex items-center justify-center gap-3 mt-5">
                                        <p v-for="code in saleTicketsSelected" :key="code" class="py-2 px-7 bg-purple-200 text-purple-700 rounded-md text-xl">{{ code }}</p>
                                    </div>
                                </v-card-text>

                                <v-card-actions class="mb-4 mr-4">
                                    <v-spacer></v-spacer>
                                    <v-btn color="red" rounded="large" variant="tonal" class="text-none !px-4" text="Cancelar" @click="isActive.value = false"></v-btn>
                                    <v-btn :loading="loadingPrint" @click="printTicket(item, isActive)" rounded="large" variant="elevated" class="text-none !bg-purple-600 !text-white">
                                        Imprimir ticket
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
                                    <p class="inline mt-3 text-center text-xs py-1 px-5 bg-red-100 text-red-500 rounded-full">Ingresa el codigo de cancelacion y preciona 'Ejecutar Cancelaciòn' para confirmar.</p>
                                    <v-otp-input v-model="cencellationPasswordEntered"></v-otp-input>
                                </div>
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
                                        color="cyan"
                                        ></v-checkbox>
                                    </div>
                                </div>
                                <div class="!w-full mt-0">
                                    <v-tabs
                                        v-model="tabs"
                                        color="cyan"
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
                                                color="cyan"
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

                    </template>
                </v-data-table>


            </v-card>
        </div>
    </div>

</template>

<style scoped>

.h1 {
    color: black;
    font-size: 1%;

}

</style>
