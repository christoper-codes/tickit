<script setup>
import useTicketOfficeState from '@/composables/TicketOfficeState';
import useUserPolicy from '@/composables/UserPolicy';
import { Link } from '@inertiajs/vue3';

const { cashRegisterPresent } = useTicketOfficeState();
const { viewVendorTopics } = useUserPolicy();
defineProps({
    user_roles: {
        type: Array,
        required: false,
    }
})
</script>

<template>
    <div v-if="user_roles && viewVendorTopics(user_roles)">
        <Link :href="route('ticket-offices.index')">
            <div v-if="cashRegisterPresent " class="fixed bottom-5 lg:bottom-16 left-3 z-[60]">
                <div class="flex flex-col items-center text-xs lg:text-base gap-2 justify-center bg-white shadow-lg border-4 cursor-pointer hover:scale-105 transition-transform duration-500 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl">
                    <span class="text-xs">caja</span>
                    <div class="lg:text-4xl font-bold">{{ cashRegisterPresent }}</div>
                </div>
            </div>
            <div v-else class="fixed bottom-5 lg:bottom-16 left-3 z-[60]">
                <div class="flex flex-col items-center text-xs lg:text-base gap-2 justify-center bg-white shadow-lg border-4 cursor-pointer hover:scale-105 transition-transform duration-500 px-3.5 py-3 lg:py-4 rounded-2xl">
                    <span class="text-xs">Abrir caja</span>
                    <span class="material-symbols-outlined text-4xl">computer</span>
                </div>
            </div>
        </Link>
    </div>
</template>
