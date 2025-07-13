<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SuccessSession from '@/Components/SuccessSession.vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import BreadcrumbAppSecondary from '@/Components/BreadcrumbAppSecondary.vue';
import { Head, usePage, useForm as useFormInertia } from '@inertiajs/vue3';
import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import SaleTicket from '@/Components/SaleTicket.vue';
import { shareTicketSchema } from '@/validation/Administration/share-tickets-schema';
import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';

const { handleSubmit } = useForm({validationSchema : shareTicketSchema});

const data  = useFormInertia({
    senderUserName: {},
    receiverUserName: {},
    ticketListOfSender: [],
});

const props = defineProps({
    "user": {
        Type: Object,
        Required: true
    },
    "users": {
        Type: Object,
        Required: true
    },
    'events_with_tickets': {
        type: Object,
        required: true,
    },
})

const eventsWithTickets = ref(Object.values(props.events_with_tickets));
const tab = ref('tab-0');

const users_list = [];
const tickets_list_v = ref([]);

let dialog = ref(false);

let alertDialong = ref(false);

const user = usePage().props.auth.user;
const selected_value = ref(null);

const alert = ()=> {

    data.receiverUserName = selected_value.value;

    if (!data.receiverUserName) {
        dialog.value = true
    }else{
        dialog.value = false
        alertDialong.value = true
    }
}

const selection = ref([])
const messageErrorreceiverUserName = ref('Debes seleccionar a un amigo');

const send_tickets = (values)=>{

    data.senderUserName = props.user['id'];
    data.receiverUserName = selected_value.value['id'];

    tickets_list_v.value.forEach(element => {
        data.ticketListOfSender.push(element['id']);
    });

    data.post(route('ticket-offices.change'), {
        onFinish: () => {
            alertDialong.value = false
            data.get(route('ticket-offices.share'),{});
        }
    });
};

const tickets_select = (ticket) => {
    let contain = false;

    if (tickets_list_v.value.length == 0) {
        tickets_list_v.value.push(ticket)
    } else {
        tickets_list_v.value.forEach(element => {
            if (ticket['id'] == element['id']) {
                contain = true
                tickets_list_v.value = tickets_list_v.value.filter(item => item['id'] !== ticket['id'])
            }
        });

        if (!contain) {
            tickets_list_v.value.push(ticket)
        }
    }

    selection.value = tickets_list_v.value;
}


props.users.forEach(element => {

    if (user['username'] != element['username']) {
        users_list.push(
            {
                name: `${element['first_name']} ${element['last_name']} ${element['middle_name']} (${element['email']})`,
                value: element
            }
        )
    }

});
</script>

<template>

    <Head title="Compartir"/>
    <SuccessSession />
    <AppLayout >
        <ErrorSession />
        <BreadcrumbAppSecondary>
            <span>Compartir Boletos</span>
        </BreadcrumbAppSecondary>

        <v-dialog
            v-model="alertDialong"
            width="900"
        >
            <v-card
            >

                <div class="p-5">
                    <h1 style="color: black; font-weight: bold;">Términos y condiciones</h1>
                    <br/>
                    <p>
                        <b style="color: red;">SOLO SE PUEDEN TRANSFERIR BOLETOS ENTRE USUARIOS DE OTRA APLICACIÓN (este boleto no llega al correo).</b>
                    </p>
                    <br/>
                    <p class="text-red-500 lowercase">
                     EL BOLETO NO ESTÁ SUJETO A REEMBOLSO, CAMBIO O REPOSICIÓN. EL BOLETO TE DA DERECHO A UN ACCESO AL INMUEBLE. El boleto te da derecho a un lugar específico dentro del inmueble. No está permitido el reingreso. Este boleto es válido solo para el evento y asiento descrito en pantalla. Queda prohibido mostrar capturas de pantalla del boleto en la entrada. El poseedor del boleto asume cualquier riesgo o peligro accidental proveniente del evento. La admisión está sujeta a que el espectador permita que se practique la revisión correspondiente para evitar el acceso a alimentos y bebidas alcohólicas, drogas, armas, mochilas, maletas, productos de tabaco, vapeadores, grabadoras, cámaras de cualquier tipo o cualquier otro artículo o sustancia no autorizada. El titular del inmueble del evento o sus representantes se reservan el derecho de admisión o, en su caso, se retirará del inmueble a cualquier persona cuya conducta se considere ofensiva, que induzca al desorden, y en general aquellas conductas que pudieran constituir una infracción o delito, no estando obligado a reembolsar cantidad alguna. El espectador se obliga a cumplir con las reglas del inmueble.
                    </p>
                </div>

                <template v-slot:actions>
                    <v-btn
                        v-if="selection.length > 0"
                        class="ms-auto"
                        color="green"
                        text="Aceptar"
                        @click="send_tickets"
                    ></v-btn>
                </template>
            </v-card>
        </v-dialog>


        <div class="pt-5 lg:pt-10">
            <div class="flex flex-col w-full justify-between">
                <v-autocomplete
                    class="!w-full"
                    v-model="selected_value"
                    clearable
                    chips
                    label="Busca a tu amigo..."
                    :items="users_list"
                    variant="solo-filled"
                    item-title="name"
                    item-value="value"
                ></v-autocomplete>
                <div>
                    <v-btn
                        class="!rounded-2xl !h-[70px] !px-6 !shadow-none !text-white !bg-green-500"
                        @click="alert"
                    >
                        Compartir boletos
                    </v-btn>
                    <div v-if="dialog === true" class="mt-2">
                        <InputError class="" :message="messageErrorreceiverUserName" />
                    </div>
                </div>
            </div>


            <div>
                <template v-if="eventsWithTickets.some(event => event.tickets.length > 0)">
                    <div v-for="event in eventsWithTickets" :key="event.event.id" class="mb-10 last:mb-0">
                        <div v-if="event.tickets.length > 0">
                            <div class="flex flex-col lg:flex-row gap-10 lg:overflow-y-auto pb-5">
                                <div v-for="ticket in event.tickets" :key="ticket.id" class="flex flex-col items-center">
                                    <div v-if="ticket.purchase_type != 'abonado' && !ticket.is_verified">
                                        <SaleTicket :ticket="ticket" />
                                        <v-btn
                                            :class="tickets_list_v.some(t => t.id === ticket.id) ? '!bg-red-500' : '!bg-primary'" class="!mt-3 !rounded-2xl !h-[60px] !px-6 !shadow-none !text-white"
                                            block
                                            @click="tickets_select(ticket)"
                                        >
                                            {{ tickets_list_v.some(t => t.id === ticket.id) ? 'Cancelar selección' : 'Compartir boleto' }}
                                        </v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="flex items-center justify-center flex-col gap-5 mt-10">
                        <div class="text-center flex items-center justify-center flex-col gap-5">
                            <img class="w-40 lg:w-72 h-auto" src="/storage/public/empty-cart.webp" alt="Webiste image">
                            <span>No cuentas con boletos disponibles. ¡Compra tus boletos para el próximo partido!</span>
                        </div>
                        <div>
                            <Link :href="route('events.index')">
                                <SecondaryButton
                                    heightbtn="!h-[70px]"
                                    paddingbtn="!px-14"
                                >
                                    Comprar boletos
                                </SecondaryButton>
                            </Link>
                        </div>
                    </div>
            </template>
        </div>
    </div>
</AppLayout>

</template>

<style scoped>
.container{
    align-items: center;
    width: 70%;
}
</style>
