<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import SaleTicket from '@/Components/SaleTicket.vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import TicketCharts from '@/Components/TicketCharts.vue';
import confetti from 'canvas-confetti';
import { onMounted, ref, watch } from 'vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';
import SuccessSession from '@/Components/SuccessSession.vue';
import BreadcrumbApp from '@/Components/BreadcrumbApp.vue';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';

const page = usePage().props;

const count = 200;
const defaults = {
  origin: { y: 0.7 }
};

const fire = (particleRatio, opts) => {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
};

const shootConfetti = () => {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

const isNewUser = false;

const shootConfettiTwice = () => {
  shootConfetti();
  setTimeout(shootConfetti, 1000);
};

onMounted(() => {
  if (isNewUser) {
    shootConfettiTwice();
  }
});

/* watch(() => page.flash, (newFlash) => {
  if (newFlash === 'is_new_user') {
    shootConfettiTwice();
  }
}); */

const props = defineProps({
    'events_with_tickets': {
        type: Object,
        required: true,
    },
})
const eventsWithTickets = ref(Object.values(props.events_with_tickets));
const tab = ref('tab-0');
</script>

<template>
    <Head title="Dashboard" />

    <AppLayout>
        <SuccessSession />

        <BreadcrumbApp>
            <template #title>
                <span>Mis boletos</span>
            </template>
        </BreadcrumbApp>

        <div class="mt-10">
            <template v-if="eventsWithTickets.some(event => event.tickets.length > 0)">
                <div v-for="event in eventsWithTickets" :key="event.event.id" class="mb-10 last:mb-0">
                    <div v-if="event.tickets.length > 0">
                        <div class="flex flex-col lg:flex-row gap-10 lg:overflow-y-auto pb-5">
                            <SaleTicket v-for="ticket in event.tickets" :key="ticket.id" v-bind:ticket="ticket" />
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

    </AppLayout>
</template>

<style scoped>

</style>
