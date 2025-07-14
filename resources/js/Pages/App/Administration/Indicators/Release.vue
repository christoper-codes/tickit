<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SuccessSession from '@/Components/SuccessSession.vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import BreadcrumbAppSecondary from '@/Components/BreadcrumbAppSecondary.vue';
import { Head, usePage, useForm as useFormInertia, Link } from '@inertiajs/vue3';
import { computed, onMounted, ref } from 'vue';
import EventsIndex from '@/Components/IndicatorsCharts/EventsIndex.vue';
import useDateFormat from '@/composables/dateFormat';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';
import axios from 'axios';
import { toast } from 'vue3-toastify'

const { dateFormat } = useDateFormat();

const props = defineProps({
    "user": {
        Type: Object,
        Required: true
    },
    "events": {
        Type: Array,
        Required: true
    },
})

const events = ref(props.events);
const loadingEventId = ref(null);
const showEvent = (eventId) => {
    loadingEventId.value = eventId;

    axios.post(route('events.release.reserved.seats', eventId))
        .then((response) => {
            if(response.data.success) {
                toast(response.data.message, {
                    "theme": "auto",
                    "type": "success",
                    "dangerouslyHTMLString": true
                })
                events.value = response.data.data;
            }
        })
        .catch((error) => {
            toast(error.data.message, {
                "theme": "auto",
                "type": "error",
                "autoClose": 10000,
                "dangerouslyHTMLString": true
            })
        })
        .finally(() => {
           loadingEventId.value = null;
        });
};

const globalPayementTypeProps = (item) => {
  return {
    title: item.name,
    subtitle: dateFormat(item.start_date),
  };
};
</script>

<template>

    <Head title="indicadores"/>
    <SuccessSession />
    <AppLayout >
        <ErrorSession />
        <BreadcrumbAppSecondary>
            <span>Transito por evento</span>
        </BreadcrumbAppSecondary>

        <div class="relative w-full block overflow-hidden mt-10 pb-10">
            <div v-if="events.length > 0" class="grid grid-cols-1 lg:grid-cols-3 gap-7">
                <div v-for="event in events" :key="event.id" class="shadow-xl w-full p-5 rounded-3xl bg-white">
                    <div class="h-48 w-full rounded-2xl overflow-hidden relative">
                        <img :src="`/storage/${event.global_image.file_path}`" class="w-full h-full object-cover" alt="Event Image">
                    </div>
                    <div class="mt-3">
                        <h3 class="text-lg font-bold mt-3">{{ event.name }}</h3>
                        <p class="text-sm">{{ dateFormat(event.start_date) }}</p>
                        <p class="text-sm font-bold text-tw-primary">{{ event.traffic_seats_count }} Asientos en tránsito</p>
                    </div>
                    <div @click="showEvent(event.id)" class="mt-3 block">
                        <SecondaryButton heightbtn="!h-[60px]" paddingbtn="!w-full !block" :loading="loadingEventId === event.id">
                            <span>Liberar</span>
                        </SecondaryButton>
                    </div>
                    <p class="text-xs mt-3 text-center text-red-500">Seran liberados asientos reservados hace mas de 20 minutos</p>
                </div>
            </div>
            <div v-else class="flex items-center justify-center flex-col gap-5 mt-10">
                <div class="text-center flex items-center justify-center flex-col gap-5">
                    <img class="w-40 lg:w-72 h-auto" src="/storage/public/empty-cart.webp" alt="Webiste image">
                    <span>¡No hay eventos con asientos en transito!</span>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
