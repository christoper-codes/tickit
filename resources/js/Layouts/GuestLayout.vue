<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import { drawerNavState } from '@/composables/drawersStates';
import useTicketOfficeState from '@/composables/TicketOfficeState';
import ErrorSession from '@/Components/ErrorSession.vue';
import GuestNavLink from '@/Components/GuestNavLink.vue';
import useUserPolicy from '@/composables/UserPolicy';

const { cashRegisterPresent } = useTicketOfficeState();
const user = usePage().props.auth.user;

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
const toggleFav = () => {
  fav.value = !fav.value;
};
const { viewVendorTopics } = useUserPolicy();
const isMember = ref(true)

const props = defineProps({
    isEventsShow: {
        type: Boolean,
        required: false,
    },
    user_roles: {
        type: Object,
        required: false
    }
});

if (props.user_roles && !viewVendorTopics(props.user_roles)) {
    isMember.value = false
}

</script>

<template>
    <div class="bg-slate-950 relative overflow-hidden !z-50">
        <div class="hidden lg:block absolute left-1/2 top-0 h-[280px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-t blur-[150px] from-primary-800 to-primary-600">
        </div>
        <div class="w-full max-w-7xl mx-auto py-3 lg:py-5 px-4 lg:px-0 flex items-center justify-between relative">
            <div class="flex items-center gap-3">
            <Link :href="route('welcome')" class="lg:block hidden">
                <ApplicationLogo class="w-16 h-auto fill-current"/>
            </Link>
            <div class="flex gap-1 flex-col">
                <h1 class="bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-300 text-transparent text-lg md:text-2xl font-bold">victoria</h1>
                <p class="text-gray-50 text-xs flex gap-1"><span class="hidden lg:block">Club de baloncesto | </span> Temporada 2025 - 2026</p>
            </div>
        </div>
        <div v-if="cashRegisterPresent" class="text-white font-semibold  lg:flex items-center gap-3">
            <Link :href="route('ticket-offices.index')">
                <p class="text-3xl font-bold">Caja <span class="font-thin text-yellow-400">{{ cashRegisterPresent }}</span> activa</p>
            </Link>
        </div>
        <div v-else class="flex items-center gap-4 lg:gap-10 text-white">
            <div class="items-center gap-2 lg:gap-4 hidden md:flex ">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current size-5 lg:size-6" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current size-5 lg:size-6" viewBox="0 0 24 24"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current size-5 lg:size-6" viewBox="0 0 24 24"><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
            </div>
            <div class="h-5 w-[1px] bg-gray-600 hidden md:flex"></div>
           <div class="items-center gap-2 lg:gap-4 flex">
            <div v-if="route().current('events.show')" class="bg-gradient-to-r from-purple-400 via-orange-400 to-pink-500 p-[2px]">
                <Link :href="route('dashboard')" >
                    <div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 text-white transition-background px-3 py-2 text-sm font-medium">
                        Mis boletos
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="outline-none transition-transform group-hover:translate-x-0.5 [&>path]:stroke-[2px]" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path>
                        </svg>
                    </div>
                </Link>
            </div>
            <div v-else class="flex group items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-sm p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <span class="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#338EF7_50%,#F54180_100%)]"></span>
                <Link :href="route('dashboard')" >
                    <div class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 text-white transition-background px-3 py-2 text-sm font-medium text-foreground backdrop-blur-3xl">
                        Mis boletos
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="outline-none transition-transform group-hover:translate-x-0.5 [&>path]:stroke-[2px]" width="16" height="16" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path>
                        </svg>
                    </div>
                </Link>
            </div>
           </div>
        </div>
        </div>
    </div>
   <div class="bg-white/60 sticky w-full z-40 top-0 left-0 overflow-hidden backdrop-filter backdrop-blur-md shadow-xl">
        <div class="w-full h-1 bg-gradient-to-r from-primary-600 via-purple-400 to-secondary-400">
        </div>
        <div class="px-4 lg:px-0 py-2 lg:py-0">
            <div class="flex items-center justify-between max-w-7xl mx-auto ">
                <div class="lg:flex items-center gap-10 hidden justify-between w-full">
                    <div class="flex items-center gap-3">
                        <GuestNavLink :href="route('welcome')" :active="route().current('welcome')">
                            <span class="material-symbols-outlined text-lg">home</span>Inicio
                        </GuestNavLink>
                        <div class="text-center">
                            <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            location="bottom start" origin="top center"
                            >
                            <!-- <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" variant="text" class="text-none !h-[80px] !w-28 !text-gray-600 !bg-transparent" rounded="0"><span class="material-symbols-outlined text-lg">settings</span>Servicios</v-btn>
                            </template> -->

                            <v-card min-width="500" rounded="lg" class="!bg-white backdrop-blur-sm">
                                <v-list class="!bg-transparent">
                                <v-list-item
                                    prepend-avatar="https://img.icons8.com/?size=100&id=m0c1h1XS3gNM&format=png&color=000000"
                                    title="Usuario de la app"
                                    subtitle="@usuario-fan"
                                >
                                    <template v-slot:append>
                                    <v-btn
                                        :class="fav ? 'text-red' : ''"
                                        icon="mdi-heart"
                                        variant="tonal"
                                        @click="fav = !fav"
                                    ></v-btn>
                                    </template>
                                </v-list-item>
                                </v-list>

                                <v-divider></v-divider>

                                <v-list class="!bg-transparent">
                                <v-list-item>
                                    <v-switch
                                    v-model="message"
                                    color="cyan"
                                    label="Ver boeltos solo en web"
                                    hide-details
                                    ></v-switch>
                                </v-list-item>

                                <v-list-item>
                                    <v-switch
                                    v-model="hints"
                                    color="cyan"
                                    label="Ver boletos en la app y web"
                                    hide-details
                                    ></v-switch>
                                </v-list-item>
                                </v-list>

                                <v-card-actions>
                                <v-spacer></v-spacer>

                                <v-btn
                                    color="red"
                                    variant="tonal"
                                    class="text-none" rounded="lg"
                                    @click="menu = false"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="primary"
                                    class="text-none" rounded="lg"
                                    variant="tonal"
                                    @click="menu = false"
                                >
                                    Save
                                </v-btn>
                                </v-card-actions>
                            </v-card>
                            </v-menu>
                        </div>
                        <GuestNavLink :href="route('events.index')" :active="route().current('events.index') || route().current('events.show')">
                            <span class="material-symbols-outlined text-lg">note_stack</span>Eventos
                        </GuestNavLink>
                        <!-- <GuestNavLink :href="route('blogs.show', 1)" :active="route().current('blogs.show')">
                            <span class="material-symbols-outlined text-lg">bookmark</span>Blogs
                        </GuestNavLink> -->
                    </div>
                    <ErrorSession />
                    <div v-if="$page.props.auth.user && !isEventsShow" class="flex items-center gap-3">
                        <Link
                            :href="route('dashboard')"
                            >
                            <v-btn variant="elevated" class="text-none !bg-primary-500 !text-white !px-7" size="large" rounded="xl">Dashboard</v-btn>
                        </Link>
                        <div v-if="isMember">
                            <Link :href="route('ticket-offices.index')">
                                <v-btn variant="tonal" class="text-none !bg-primary-100 !text-primary-600 !px-7" size="large" rounded="xl">Taquillas</v-btn>
                            </Link>
                        </div>
                    </div>
                    <div v-else-if="!$page.props.auth.user" class="flex items-center gap-3">
                        <Link
                            :href="route('register')"
                        >
                            <v-btn variant="elevated" class="text-none !bg-primary-500 !text-white !px-7" size="large" rounded="xl">Registrarse</v-btn>
                        </Link>
                        <Link
                            :href="route('login')"
                        >
                        <v-btn variant="tonal" class="text-none !bg-primary-100 !text-primary-600 !px-7" size="large" rounded="xl">Iniciar sesion</v-btn>
                        </Link>
                    </div>
                </div>
                    <Link :href="route('welcome')" class="lg:hidden block">
                    <ApplicationLogo class="w-12 h-auto fill-current"/>
                </Link>
                <div class="flex lg:hidden">
                    <div class="container">
                        <label @click.stop>
                        <input type="checkbox" @click="drawerNavState = !drawerNavState">
                        <div class="checkmark">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        </label>
                    </div>
                </div>
            </div>
       </div>
   </div>
</template>


<style>
.v-btn__prepend {
    margin-right: 3px;
}
.v-btn__content {
    gap: 5px;
}
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.container {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
}

.checkmark {
  position: relative;
  top: 0;
  left: -10px;
  height: 1.1em;
  width: 1.3em;
}

.checkmark span {
  width: 30px;
  height: 2.5px;
  background-color: #4b5563;
  position: absolute;
  transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
}

.checkmark span:nth-child(1) {
  top: 10%;
}

.checkmark span:nth-child(2) {
  top: 50%;
}

.checkmark span:nth-child(3) {
  top: 90%;
}

.container input:checked + .checkmark span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  -webkit-transform: translateY(-50%) rotate(45deg);
  -moz-transform: translateY(-50%) rotate(45deg);
  -ms-transform: translateY(-50%) rotate(45deg);
  -o-transform: translateY(-50%) rotate(45deg);
}

.container input:checked + .checkmark span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%) rotate(-45deg);
  -webkit-transform: translateY(-50%) rotate(-45deg);
  -moz-transform: translateY(-50%) rotate(-45deg);
  -ms-transform: translateY(-50%) rotate(-45deg);
  -o-transform: translateY(-50%) rotate(-45deg);
}

.container input:checked + .checkmark span:nth-child(3) {
  transform: translateX(-50px);
  -webkit-transform: translateX(-50px);
  -moz-transform: translateX(-50px);
  -ms-transform: translateX(-50px);
  -o-transform: translateX(-50px);
  opacity: 0;
}
</style>

