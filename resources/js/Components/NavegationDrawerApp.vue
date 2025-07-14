<script setup>
import { drawerNavState, draweAppNavState } from '@/composables/drawersStates';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import AppNavLink from './AppNavLink.vue';
import useUserPolicy from '@/composables/UserPolicy';
import PrimaryButton from './buttons/PrimaryButton.vue';


const fav = ref(true);
const menu = ref(false);
const menu1 = ref(false);
const menu2 = ref(false);
const message = ref(false);
const hints = ref(true);
const open = ref([]);
const page = usePage();
const { viewAdminTopics } = useUserPolicy();
const { viewVendorTopics } = useUserPolicy();

onMounted(() => {
    const superAdmin = ['/create-users', '/indicadores-generales', '/indicadores-evento', '/transito'];
    const admin = ['/series', '/eventos-gestion', '/instituciones', '/promociones', '/convenios'];
    if (superAdmin.some(route => page.url.includes(route))) {
        open.value = ['super_admin'];
    }
    if (admin.some(route => page.url.includes(route))) {
        open.value = ['admin'];
    }
});

const toggleFav = () => {
  fav.value = !fav.value;
};

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});



</script>

<template>
  <div class="!bg-transparent">
      <v-navigation-drawer v-model="draweAppNavState" temporary class="!bg-transparent">
        <div class="min-h-screen relative overflow-hidden">
            <div class="w-full relative">
                <div class="w-full py-3 lg:py-4 px-4">
                    <div class="text-center profile-btn cursor-pointer">
                        <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        location="bottom start" origin="top center"
                        >
                            <template v-slot:activator="{ props }">
                                <v-btn
                                    class="!rounded-full !size-40 bg-profile !bg-neutral-300 dark:!bg-neutral-800 !shadow-none"
                                    v-bind="props"
                                    @click="fav = !fav"
                                    >
                                    <div
                                        class="size-36 overflow-hidden flex items-center justify-center bg-profile"
                                        v-if="user.global_images.length > 0"
                                        :style="{ backgroundImage: `url(/storage/${user.global_images[0].file_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                                        >
                                    </div>
                                    <div
                                        v-else
                                        class="size-36 overflow-hidden flex items-center justify-center bg-profile"
                                        :style="{ backgroundImage: `url('https://images.pexels.com/photos/2847648/pexels-photo-2847648.jpeg')`, backgroundSize: 'cover', backgroundPosition: 'center' }"
                                        >
                                    </div>
                                </v-btn>
                                <div class="flex flex-col items-center mt-4">
                                    <p class="text-center font-bebas text-2xl font-bold">{{ user.first_name + ' ' + user.last_name }}</p>
                                    <p class="text-center text-xs">@{{ user.username }}</p>
                                </div>
                            </template>

                            <v-card min-width="350" rounded="lg" class=" backdrop-blur-sm">
                                <v-list class="!bg-transparent">
                                    <v-list-item :title="user.first_name" :subtitle="'@'+user.username">
                                        <template v-slot:append>
                                        <v-btn :class="!fav ? 'text-red' : ''" icon="mdi-heart" variant="tonal" @click="fav = !fav"></v-btn>
                                        </template>
                                    </v-list-item>
                                </v-list>

                                <v-card-actions>
                                <div class="w-full flex items-center justify-between rounded-lg overflow-hidden shadow-xl relative mb-3">
                                    <div class="w-[55%] py-7 px-3 pr-0 text-sm font-semibold text-gray-700">
                                        <Link :href="route('logout')" method="post" as="button">
                                            <v-btn  color="red" variant="tonal" block class="text-none" rounded="lg">
                                                Cerrar sesión
                                            </v-btn>
                                        </Link>
                                    </div>
                                    <img class="w-[35%] absolute top-0 -right-5" src="https://modernize-nuxt3-main.netlify.app/images/backgrounds/unlimited-bg.png" alt="Webiste image">
                                </div>
                                </v-card-actions>
                            </v-card>
                        </v-menu>
                    </div>

                </div>
            </div>

            <div class="flex flex-col items-center justify-between gap-10 p-4">
                    <div class="flex flex-col w-full">
                        <h2 class="font-semibold text-2xl mb-3 font-bebas">Dashboard</h2>
                        <div class="flex flex-col items-center gap-4 w-full">
                            <div class="w-full ">
                                <AppNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                    <span class="material-symbols-outlined text-xl">home</span>Mis boletos
                                </AppNavLink>
                            </div>
                            <div class="w-full " v-if="viewVendorTopics(user.user_roles)">
                                <AppNavLink :href="route('ticket-offices.index')" :active="route().current('ticket-offices.index')">
                                    <span class="material-symbols-outlined text-xl">confirmation_number</span>Taquillas
                                </AppNavLink>
                            </div>
                            <div class=" w-full">
                                <AppNavLink :href="route('ticket-offices.share')" :active="route().current('ticket-offices.share')">
                                    <span class="material-symbols-outlined text-xl">share</span>Compartir boletos
                                </AppNavLink>
                            </div>
                            <div class="w-full ">
                                <AppNavLink :href="route('events.index')" :active="route().current('events.index')">
                                    <span class="material-symbols-outlined text-xl">note_stack</span>Próximos eventos
                                </AppNavLink>
                            </div>
                        </div>
                    </div>

                    <div v-if="viewAdminTopics(user.user_roles)" class="flex flex-col w-full">
                        <h2 class="font-semibold text-2xl mb-3 font-bebas">Accesos administrativos</h2>
                        <div class="flex flex-col items-center gap-0 w-full">

                            <v-card class="mx-auto !bg-transparent !shadow-none" width="100%">
                                <v-list v-model:opened="open">
                                    <v-list-group value="super_admin" >
                                        <template v-slot:activator="{ props }">
                                        <v-list-item
                                            v-bind="props"
                                            prepend-icon="mdi-cloud-key"
                                            title="Super administracion"
                                        ></v-list-item>
                                        </template>

                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('create.users')" :active="route().current('create.users')">
                                                <span class="material-symbols-outlined text-lg">person</span>Usuarios
                                            </AppNavLink>
                                        </div>
                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('indicators.index')" :active="route().current('indicators.index') || route().current('indicators.show')">
                                                <span class="material-symbols-outlined text-lg">monitoring</span>Indicadores
                                            </AppNavLink>
                                        </div>
                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('events.with.traffic')" :active="route().current('events.with.traffic')">
                                                <span class="material-symbols-outlined text-lg">block</span>Tránsito
                                            </AppNavLink>
                                        </div>
                                    </v-list-group>
                                </v-list>
                            </v-card>
                            <v-card class="mx-auto !bg-transparent !shadow-none" width="100%">
                                <v-list v-model:opened="open">
                                    <v-list-group value="admin" >
                                        <template v-slot:activator="{ props }">
                                        <v-list-item
                                            v-bind="props"
                                            prepend-icon="mdi-cog-outline"
                                            title="Administracion"
                                        ></v-list-item>
                                        </template>

                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('series.index')" :active="route().current('series.index')">
                                                <span class="material-symbols-outlined text-lg">note_stack</span>Series
                                            </AppNavLink>
                                        </div>
                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('event.management.indexManagement')" :active="route().current('event.management.indexManagement')">
                                                <span class="material-symbols-outlined text-lg">confirmation_number</span>Eventos
                                            </AppNavLink>
                                        </div>
                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('institutions.index')" :active="route().current('institutions.index')">
                                                <span class="material-symbols-outlined text-lg">home_work</span>Instituciones
                                            </AppNavLink>
                                        </div>
                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('promotions.index')" :active="route().current('promotions.index')">
                                                <span class="material-symbols-outlined text-lg">Loyalty</span>Promociones
                                            </AppNavLink>
                                        </div>
                                        <div class="mt-3 w-full">
                                            <AppNavLink :href="route('agreements.index')" :active="route().current('agreements.index')">
                                                <span class="material-symbols-outlined text-lg">Handshake</span>Convenios
                                            </AppNavLink>
                                        </div>
                                        <div class=" w-full">
                                            <AppNavLink :href="route('wallet.index')" :active="route().current('wallet.index')">
                                                <span class="material-symbols-outlined text-lg">account_balance_wallet</span>Monederos
                                            </AppNavLink>
                                        </div>
                                    </v-list-group>
                                </v-list>
                            </v-card>
                        </div>
                    </div>

                    <div class="w-full p-5 flex items-center justify-between rounded-xl overflow-hidden shadow-xl border relative bg-white/10 dark:bg-neutral-900">
                        <div class="w-full">
                            <v-dialog max-width="500">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <v-btn  v-bind="activatorProps" variant="tonal" block class="text-none !h-[60px] !bg-red-600 !rounded-2xl !text-white !border-b-4 !border-b-red-700">
                                            Cerrar sesión
                                        </v-btn>
                                    </template>
                                    <template v-slot:default="{ isActive }">
                                        <v-card title="¿Estás seguro de finalizar tu sesión?">

                                        <v-card-actions class="!my-4 !px-4">
                                            <v-spacer></v-spacer>
                                            <v-btn color="red" variant="tonal" class="text-none !h-[50px] !px-4 !rounded-2xl" text="Cancelar" @click="isActive.value = false"></v-btn>
                                            <Link :href="route('logout')" method="post" as="button">
                                                <PrimaryButton>
                                                    <span class="material-symbols-outlined text-xl !w-1/2">person</span> Cerrar sesión
                                                </PrimaryButton>
                                            </Link>
                                        </v-card-actions>
                                        </v-card>
                                    </template>
                            </v-dialog>
                        </div>
                    </div>
                </div>
        </div>
      </v-navigation-drawer>
  </div>
</template>


<style scoped>

.bg-profile{
    border-radius: 100px 55px 55px 99px/80px 82px 75px 79px !important;
}
.v-btn__prepend {
    margin-right: 3px;
}
.v-btn__content {
    gap: 5px;
}
.v-navigation-drawer__scrim {
    display: none !important;
}
.v-navigation-drawer--temporary.v-navigation-drawer--active {
    width: 75% !important;
    border: none !important;
}

@media (min-width: 768px) {
    .v-navigation-drawer--temporary.v-navigation-drawer--active {
        width: 290px !important;
        box-shadow: none !important;
    }
}
@keyframes spin-gradient {
  0% {
    background: #f8b3fa;
  }
  25% {
    background: #f4fcb2;
  }
  50% {
    background: #de89ff;
  }
  75% {
    background: #a567f5;
  }
  100% {
    background: #ffed88;
  }
}

</style>

