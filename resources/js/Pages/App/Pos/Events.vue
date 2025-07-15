<script setup>
import NavigationDrawer from '@/Components/NavigationDrawer.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, usePage } from '@inertiajs/vue3';
import Footer from '@/Components/Footer.vue';
import { onMounted, ref } from 'vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import useDateFormat from '@/composables/dateFormat';
import useUserPolicy from '@/composables/UserPolicy';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';
import GuestNav from '@/Components/navs/GuestNav.vue';
import GuestNavSocial from '@/Components/navs/GuestNavSocial.vue';
import { menuStateSocialMedia, menuStateApp } from '@/composables/nav/menu-state.js'
import AppNav from '@/Components/navs/AppNav.vue';
import CashRegisterNav from '@/Components/navs/CashRegisterNav.vue';
import Banner from '@/Components/Banner.vue';
import MasterLayout from '@/Layouts/MasterLayout.vue';

const { dateFormat } = useDateFormat();
const loading = ref(false);
const filteredEvents = ref([]);
const selectedEventType = ref('todos'); // Estado para el filtro seleccionado
const { viewVendorTopics, viewAdminTopics } = useUserPolicy();
const showEvent = () => {loading.value = true;}

const props = defineProps({
    events: {
        type: Array,
        required: true,
    },
    user_roles: {
        type: Array,
        required: false,
    },
    platform_settings: {
        type: Array,
        required: true,
    },
});

console.log(props.events);

const parallaxY = ref(0);
const isLg = ref(window.innerWidth >= 1024);

const handleScroll = () => {
  if (isLg.value) {
    parallaxY.value = window.scrollY * 0.5;
  } else {
    parallaxY.value = 0;
  }
};

const handleResize = () => {
  isLg.value = window.innerWidth >= 1024;
  if (!isLg.value) {
    parallaxY.value = 0;
  }
};

onMounted(() => {
    filterEventsByType('todos');

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
});


const showImageModal = ref(false);
const modalImageSrc = ref('');

const openImageModal = (src) => {
    modalImageSrc.value = src;
    showImageModal.value = true;
}
const closeImageModal = () => {
    showImageModal.value = false;
    modalImageSrc.value = '';
}

const filterEventsByType = (type) => {
    selectedEventType.value = type;

    let baseEvents = props.events.filter((event) => {
        if(event.event_visibility_type.name == 'publico'){
            return true;
        }
        if(props.user_roles){
            if(event.event_visibility_type.name == 'vendedores' && viewVendorTopics(props.user_roles)){
                return true;
            }
        }
        if(event.event_visibility_type.name == 'administradores' && viewAdminTopics(props.user_roles)){
            return true;
        }
        return false;
    });

    if (type === 'todos') {
        filteredEvents.value = baseEvents;
    } else {
        filteredEvents.value = baseEvents.filter(event =>
            event.event_type.name.toLowerCase() === type.toLowerCase()
        );
    }
}
</script>

<template>
    <MasterLayout>
    <Head title="Eventos" />
    <CashRegisterNav v-bind:user_roles="user_roles"/>
    <GuestNavSocial />
    <AppNav />
    <!--<Banner :banner="platform_settings[0].settings.banner"/>-->
    <transition name="fade">
        <div v-if="showImageModal"
            class="fixed inset-0 !z-50 flex items-center justify-center bg-black/50 backdrop-blur-[9px] transition-all duration-500"
            @click.self="closeImageModal"
        >
            <div class="bg-neutral-200 dark:bg-neutral-500 shadow-2xl rounded-lg p-3 relative max-w-full w-[90vw] md:w-[60%] flex flex-col items-center transition-all duration-500">
                <img class="w-full h-auto rounded-lg" :src="modalImageSrc" alt="Imagen ampliada" />
            </div>
        </div>
    </transition>
    <section class="py-5 w-full relative z-20">
        <GuestNav/>
        <div class="max-w-7xl mx-auto px-4 lg:px-0 text-center mt-16">
            <h2 class="font-bold font-bebas text-8xl">Eventos recomendados</h2>
            <p>Explora los eventos más destacado y descubre lo que tenemos preparado para ti.</p>
            <div class="flex items-center justify-center gap-8 mt-10">
                <v-btn @click="filterEventsByType('todos')" variant="tonal" :class="selectedEventType === 'todos' ? '!h-[70px] !px-14 !bg-yellow-500 !border-b-4 !border-b-yellow-700 !overflow-hidden !text-white !rounded-2xl !relative before:!content-[\'\'] before:!w-10 before:!h-10 before:!bg-white/25 before:!absolute before:!rounded-full before:!-bottom-[13px] before:!-right-[13px]' : '!h-[70px] !px-14 !border-b-4 !border-b-neutral-400 !rounded-2xl !bg-neutral-100 !text-neutral-700 !overflow-hidden'">
                   <span>Todos</span>
                </v-btn>
                <v-btn @click="filterEventsByType('deportivo')" variant="tonal" :class="selectedEventType === 'deportivo' ? '!h-[70px] !px-14 !bg-yellow-500 !border-b-4 !border-b-yellow-700 !overflow-hidden !text-white !rounded-2xl !relative before:!content-[\'\'] before:!w-10 before:!h-10 before:!bg-white/25 before:!absolute before:!rounded-full before:!-bottom-[13px] before:!-right-[13px]' : '!h-[70px] !px-14 !border-b-4 !border-b-neutral-400 !rounded-2xl !bg-neutral-100 !text-neutral-700 !overflow-hidden'">
                   <span>Deportivos</span>
                </v-btn>
                <v-btn @click="filterEventsByType('cultural')" variant="tonal" :class="selectedEventType === 'cultural' ? '!h-[70px] !px-14 !bg-yellow-500 !border-b-4 !border-b-yellow-700 !overflow-hidden !text-white !rounded-2xl !relative before:!content-[\'\'] before:!w-10 before:!h-10 before:!bg-white/25 before:!absolute before:!rounded-full before:!-bottom-[13px] before:!-right-[13px]' : '!h-[70px] !px-14 !border-b-4 !border-b-neutral-400 !rounded-2xl !bg-neutral-100 !text-neutral-700 !overflow-hidden'">
                   <span>Culturales</span>
                </v-btn>
            </div>
        </div>
    </section>

    <main class="max-w-7xl mx-auto px-4 lg:px-0 relative mb-20">
        <div class="absolute -top-[700px] left-1/2 -translate-x-1/2 h-[480px] w-[300px] lg:h-[680px] lg:w-[600px] rounded-full blur-[120px] lg:blur-[220px] bg-tw-primary">
        </div>
        <div class="max-w-7xl min-h-screen pt-0 mx-auto z-20 relative">
            <div class="">
                <div class="lg:col-span-2">
                    <div v-if="events.length > 0" class="py-8">
                        <div v-for="(event, index) in filteredEvents" :key="event.id"  class="space-y-5 lg:space-y-8 pb-10 mt-16">
                            <div class="flex items-center justify-between gap-14" :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
                                <div class="w-full lg:w-[40%]">
                                    <h2 class="font-bebas text-4xl font-bold lg:text-6xl">{{ event.name }}</h2>
                                    <h3 class="mt-5 inline-block"><span class="font-bold">Fecha:</span> {{ dateFormat(event.start_date) }}</h3>
                                    <p class="mt-3">{{ event.description }}</p>
                                    <div class="flex items-center mt-3">
                                        <div class="flex items-center gap-x-3">
                                            <img class="h-14 w-14 rounded-full" src="../../../../../public/img/user-img.svg" alt="Author Image">
                                            <div>
                                                <p class="text-base font-medium">Directiva victoria</p>
                                                <p class="text-sm text-gray-500">Autor</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col md:flex-row md:items-center gap-5 mt-4 w-full">
                                        <Link v-if="$page.props.auth.user" :href="route('events.show', { slug: event.slug, id: event.id } )" class="w-full">
                                            <PrimaryButton @click="showEvent" heightbtn="!h-[65px] !px-14 !w-full !block" :loading="loading">
                                                <span class="material-symbols-outlined text-lg">shopping_cart</span>Comprar entradas
                                            </PrimaryButton>
                                        </Link>
                                        <Link v-else :href="route('login', { slug: event.slug, id: event.id})" class="w-full">
                                            <PrimaryButton  heightbtn="!h-[65px] !px-14 !w-full !block" :loading="loading">
                                                <span class="material-symbols-outlined text-lg">shopping_cart</span>Comprar entradas
                                            </PrimaryButton>
                                        </Link>
                                    </div>
                                </div>

                                <div class="w-full lg:w-[60%]">
                                    <div
                                        @click="openImageModal(`/storage/${event.global_image.file_path}`)"
                                        class="group flex bg-cover relative h-[400px] aspect-3/4 object-cover bg-center w-full p-4 lg:p-7 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border-b-8 border-r-8 border-neutral-300 dark:border-neutral-700"
                                        :style="`background-image: url(/storage/${event.global_image.file_path})`"
                                        >
                                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:!opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
                                            <div class="text-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2"/><line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" stroke-width="2"/><line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="2"/></svg>
                                                <h2 class="text-white font-semibold">
                                                    Ampliar imagen
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
    </MasterLayout>
</template>
