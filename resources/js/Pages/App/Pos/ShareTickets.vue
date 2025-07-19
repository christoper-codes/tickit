<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SuccessSession from '@/Components/SuccessSession.vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import BreadcrumbAppSecondary from '@/Components/BreadcrumbAppSecondary.vue';
import { Head, Link, usePage, useForm as useFormInertia } from '@inertiajs/vue3';
import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import SaleTicket from '@/Components/SaleTicket.vue';
import { shareTicketSchema } from '@/validation/Administration/share-tickets-schema';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';
import { toast } from 'vue3-toastify'
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';

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
let alertDialong = ref(false);

const user = usePage().props.auth.user;
const selected_value = ref(null);

const alert = ()=> {
    data.receiverUserName = selected_value.value;
    if (!data.receiverUserName) {
         toast('Debe seleccionar a un usuario', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }

    alertDialong.value = true
}

const selection = ref([])
const send_tickets = (values)=>{
    if (tickets_list_v.value.length == 0) {
         toast('Debe seleccionar a un boleto', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }

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

        <v-dialog v-model="alertDialong" max-width="500">
                <template v-slot:default="{ isActive }">
                    <v-card title="¿Estás seguro de finalizar tu sesión?">

                    <v-card-actions class="!my-4 !px-4">
                        <v-spacer></v-spacer>
                        <v-btn color="red" variant="tonal" class="text-none !h-[50px] !px-4 !rounded-2xl" text="Cancelar" @click="isActive.value = false"></v-btn>
                        <PrimaryButton @click="send_tickets">
                            <span class="material-symbols-outlined text-xl !w-1/2">person</span> Cerrar sesión
                        </PrimaryButton>
                    </v-card-actions>
                    </v-card>
                </template>
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
                    <v-btn class="!rounded-2xl !h-[70px] !px-6 !shadow-none !text-white !bg-green-500 !border-b-4 !border-b-green-700" @click="alert">
                        Compartir boletos
                    </v-btn>
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
                                            :class="tickets_list_v.some(t => t.id === ticket.id) ? '!bg-red-500' : '!bg-tw-primary'" class="!mt-3 !rounded-2xl !h-[60px] !px-6 !shadow-none !text-white"
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
                            <span>No cuentas con boletos disponibles. ¡Compra tus boletos para el próximo evento!</span>
                        </div>
                         <div>
                            <Link :href="route('events.index')">
                                <SecondaryButton heightbtn="!h-[70px]" paddingbtn="!px-14">
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
