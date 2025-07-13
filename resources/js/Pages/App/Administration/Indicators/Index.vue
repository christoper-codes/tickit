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

const sortedEvents = computed(() =>
    props.events.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
);
const loadingEventId = ref(null);
const showEvent = (eventId) => {
    loadingEventId.value = eventId;
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
            <span>Resumen por partido</span>
        </BreadcrumbAppSecondary>

        <div class="relative w-full block overflow-hidden mt-10">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-7">
                <div v-for="event in sortedEvents" :key="event.id" class="shadow-xl w-full p-5 rounded-3xl bg-white">
                    <div class="h-48 w-full rounded-2xl overflow-hidden relative">
                        <img :src="`/storage/${event.global_image.file_path}`" class="w-full h-full object-cover" alt="Event Image">
                    </div>
                    <div class="mt-3">
                        <h3 class="text-lg font-bold mt-3">{{ event.name }}</h3>
                        <p class="text-sm">{{ dateFormat(event.start_date) }}</p>
                    </div>
                    <Link :href="route('indicators.show', { slug: event.slug, id: event.id } )" @click="showEvent(event.id)" class="mt-3 block">
                        <PrimaryButton heightbtn="!h-[60px]" paddingbtn="!w-full !block" :loading="loadingEventId === event.id">
                            <span>Ver indicadores</span>
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
