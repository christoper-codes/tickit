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
    filteredEvents.value = props.events.filter((event) => {
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
            class="fixed inset-0 !z-50 flex items-center justify-center bg-black/50 backdrop-blur-[7px] transition-all duration-500"
            @click.self="closeImageModal"
        >
            <div class="bg-gradient-to-tr from-white to-primary shadow-2xl rounded p-3 relative max-w-full w-[90vw] md:w-[520px] flex flex-col items-center transition-all duration-500">
                <img class="w-full h-auto" :src="modalImageSrc" alt="Imagen ampliada" />
            </div>
        </div>
    </transition>
    <section class="lg:h-screen !p-4 sm:!p-8 flex w-full relative">
        <div class="rounded-3xl w-full overflow-hidden relative z-10 shadow-xl shadow-black/15">
            <div class="relative h-full">
                <div class="relative isolate overflow-hidden w-full h-full">
                    <div class="block absolute left-[-40%] md:left-[43%] top-0 right-0 bottom-0 bg-cover z-0"
                        :style="{backgroundImage: `url('/storage/public/hero-img.jpg')`, transform: isLg ? `translateY(${parallaxY}px)` : 'none', willChange: 'transform',}">
                    </div>
                    <div class="absolute left-[-40%] md:left-[43%] top-0 right-0 bottom-0 bg-cover bg-black/30 z-10"></div>
                    <div class="absolute !inset-y-0 !right-1/2 z-10 !w-[200%] !origin-top-right !skew-x-[-30deg] bg-white ring-1 shadow-xl !shadow-purple-500 !ring-purple-500/10 -mr-80 lg:!-mr-96" aria-hidden="true">
                    </div>

                    <div class="hidden lg:block pt-3">
                        <GuestNav/>
                    </div>
                    <div class="flex items-center justify-between lg:hidden relative z-10 px-5 pt-7">
                        <div class="flex items-center relative">
                            <h2 class="font-extrabold font-bebas text-2xl !mt-1">victoria</h2>
                            <img class="w-10 h-auto absolute -top-5 -left-3" src="/storage/public/hdx-logo.png" alt="hdx logo">
                        </div>
                        <div @click="menuStateApp = !menuStateApp">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-8 mb-1"><path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>

                    <div class="flex lg:items-center h-full !mb-12 lg:!mb-0 z-20 relative">
                        <div class="!mx-auto !max-w-7xl !px-6 lg:!px-0 !w-full !py-32 lg:!py-0 lg:!-mt-40">
                            <div>
                                <h2 data-aos="fade-down" data-aos-duration="1300" data-aos-once="true" class="font-metal pr-1 italic text-2xl inline-block bg-clip-text bg-gradient-to-r from-primary to-secondary/60 text-transparent">Próximo partido</h2>
                                <h1 data-aos="fade-down" data-aos-duration="1300" data-aos-once="true" class="lg:text-[70px] !max-w-2xl text-4xl md:text-5xl font-bold font-bebas mt-3">
                                    {{ filteredEvents[0]?.name || 'Nuevos partidos próximamente' }}
                                </h1>

                                <p data-aos="fade-down" data-aos-duration="1300" data-aos-once="true" class="font-medium text-balance sm:!text-xl max-w-[900px] !mt-7">
                                    {{ filteredEvents[0]?.description || 'El nido del halcón' }} | {{ filteredEvents[0]?.start_date ? dateFormat(filteredEvents[0]?.start_date) : 'Nuevas fechas' }}.
                                    <br>
                                    Vive la emoción del baloncesto con los <span class="font-bold">victoria</span>.
                                </p>

                                <div data-aos="fade-left" data-aos-duration="1300" data-aos-once="true" class="flex flex-col md:flex-row md:items-center gap-5 !mt-10">
                                    <Link v-if="$page.props.auth.user" :href="route('events.show', { slug: filteredEvents[0]?.slug || '', id: filteredEvents[0]?.id || '' })">
                                        <PrimaryButton @click="showEvent" heightbtn="!h-[70px] !text-base !w-full md:!w-auto" paddingbtn="!px-14" :loading="loading">
                                            <span class="material-symbols-outlined text-lg">shopping_cart</span>Comprar boletos
                                        </PrimaryButton>
                                    </Link>
                                    <Link v-else :href="route('login', { slug: filteredEvents[0]?.slug || '', id: filteredEvents[0]?.id || '' })">
                                        <PrimaryButton heightbtn="!h-[70px] !text-base !w-full md:!w-auto" paddingbtn="!px-14">
                                           <span class="material-symbols-outlined text-lg">shopping_cart</span>Comprar boletos
                                        </PrimaryButton>
                                    </Link>

                                    <SecondaryButton
                                        heightbtn="!h-[70px] !text-base !w-full md:!w-auto"
                                        paddingbtn="!px-14"
                                        @click="openImageModal('/storage/public/calendar-hdx-2025.jpg')"
                                    >
                                        <div class="flex items-center justify-center gap-1">
                                            <p>Ver calendario</p>
                                        </div>
                                    </SecondaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <main class="max-w-7xl mx-auto px-4 lg:px-0 relative">
        <div class="absolute -right-40 lg:-right-96 -top-52 lg:-top-52 h-[480px] w-[300px] lg:h-[680px] lg:w-[500px] rounded-full blur-[120px] lg:blur-[220px] bg-primary">
        </div>
        <div class="hidden lg:block absolute -bottom-60 -left-72 h-[1300px] w-[1500px] rounded-full blur-[100px] bg-white">
        </div>
        <ErrorSession />
        <div class="max-w-7xl min-h-screen pt-0 mx-auto z-20 relative">
            <div class="lg:grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                <div class="lg:col-span-2">
                    <div v-if="events.length > 0" class="py-8 lg:pe-8">
                        <div v-for="event in filteredEvents" :key="event.id"  class="space-y-5 lg:space-y-8 pb-10 mt-16 border-b-4 lg:border-b-8 border-neutral-300 border-dashed">
                            <div>
                                <h2 class="font-bebas text-4xl font-bold lg:text-6xl">{{ event.name }}</h2>
                                <h3 class="mt-5 inline-block font-metal pr-1 italic text-2xl bg-clip-text bg-gradient-to-r from-primary to-secondary/60 text-transparent">{{ dateFormat(event.start_date) }}</h3>
                                <p class="mt-3">{{ event.description }}</p>
                                <p class="mt-3">Gimnasio Nido del Halcón UV | 91094 Xalapa-Enríquez, Ver.</p>
                                <div class="flex flex-col md:flex-row md:items-center gap-5 mt-4">
                                    <Link v-if="$page.props.auth.user" :href="route('events.show', { slug: event.slug, id: event.id } )">
                                        <PrimaryButton @click="showEvent" heightbtn="!h-[65px] !px-14 !w-full md:!w-auto" :loading="loading">
                                            <span class="material-symbols-outlined text-lg">shopping_cart</span>Comprar boletos
                                        </PrimaryButton>
                                    </Link>
                                    <Link v-else :href="route('login', { slug: event.slug, id: event.id})">
                                        <PrimaryButton  heightbtn="!h-[65px] !px-14">
                                            <span class="material-symbols-outlined text-lg">shopping_cart</span>Comprar boletos
                                        </PrimaryButton>
                                    </Link>
                                </div>
                            </div>

                            <div
                                @click="openImageModal(`/storage/${event.global_image.file_path}`)"
                                class="group flex bg-cover relative h-[400px] aspect-3/4 object-cover bg-center w-full p-4 lg:p-7 rounded-xl border shadow-xl overflow-hidden cursor-pointer transition-all duration-500"
                                :style="`background-image: url(/storage/${event.global_image.file_path})`"
                                >
                                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-40 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2"/><line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" stroke-width="2"/><line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="2"/></svg>
                                </div>

                                <div class="z-50 flex flex-col flex-1 justify-end text-white">
                                    <div class="flex-col gap-4 justify-end">
                                    <h2 class="inline-block font-metal pr-1 italic text-5xl bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent !underline">
                                        Ampliar imagen
                                    </h2>
                                    </div>
                                </div>
                                <div class="z-0 absolute bottom-0 left-0 right-0 h-[350px] lg:h-[300px] !bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_90%)] block"></div>
                            </div>

                            <div class="flex items-center justify-end mt-5">
                                <div class="flex items-center gap-x-3">
                                    <img class="h-14 w-14 rounded-full" src="../../../../../public/img/user-img.svg" alt="Author Image">
                                    <div>
                                        <p class="text-base font-medium text-gray-800">Directiva victoria</p>
                                        <p class="text-sm text-gray-500">Autor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside :class="events.length > 0 ? 'lg:col-span-1 hidden lg:block' : 'col-span-1 lg:col-span-3'">
                    <div v-if="events.length > 0" :class="events.length > 0 ? 'sticky top-10 mb-20' : 'top-10 mb-20'">
                        <div class="h-auto w-full rounded-lg border-8 border-neutral-200 overflow-hidden mt-10 flex items-center justify-center">
                            <iframe v-if="events.length > 0" class="rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.653263134143!2d-96.91874712501097!3d19.51354808178317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db320be3350bd1%3A0xba83c38e6e168a4!2sGimnasio%20Nido%20del%20Halc%C3%B3n%20UV!5e0!3m2!1ses-419!2smx!4v1735482228924!5m2!1ses-419!2smx" width="400" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <iframe v-else class="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.653263134143!2d-96.91874712501097!3d19.51354808178317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85db320be3350bd1%3A0xba83c38e6e168a4!2sGimnasio%20Nido%20del%20Halc%C3%B3n%20UV!5e0!3m2!1ses-419!2smx!4v1735482228924!5m2!1ses-419!2smx" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div v-else class="flex items-center justify-center flex-col gap-5 pt-60">
                        <div class="text-center flex items-center justify-center flex-col gap-5">
                            <img class="w-40 lg:w-72 h-auto" src="/storage/public/empty-cart.webp" alt="Webiste image">
                            <span>Nuevos partidos próximamente</span>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>
    <Footer />
    </MasterLayout>
</template>
