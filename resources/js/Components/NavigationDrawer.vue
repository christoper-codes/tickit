<script setup>
import { drawerNavState } from '@/composables/drawersStates';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import AppNavLink from '@/Components/AppNavLink.vue';
import GuestNavLink from '@/Components/GuestNavLink.vue';
import useUserPolicy from '@/composables/UserPolicy';


const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);
const { viewVendorTopics } = useUserPolicy();
const isMember = ref(true)

const toggleFav = () => {
  fav.value = !fav.value;
};

const props = defineProps({
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
  <div>
    <v-layout>
      <v-navigation-drawer v-model="drawerNavState" temporary class="!bg-white">
        <div class="">
            <Link @click="drawerNavState = !drawerNavState" :href="route('welcome')" class="flex items-end gap-1 shadow-md p-4">
                <ApplicationLogo class="w-11 h-auto fill-current" />
                <div class="font-semibold text-text-primary-600 text-xs">
                    <span class="block">victoria de</span>
                    <span class="block">xalapa</span>
                </div>
            </Link>
            <div class="flex flex-col items-center justify-between gap-10 p-4">
                    <div class="flex flex-col items-center gap-5 w-full">
                        <div class="w-full ">
                            <GuestNavLink :href="route('welcome')" :active="route().current('welcome')">
                                <span class="material-symbols-outlined text-lg">home</span>Inicio
                            </GuestNavLink>
                        </div>
                        <div v-if="isMember" class="w-full ">
                            <GuestNavLink :href="route('ticket-offices.index')" :active="route().current('ticket-offices.index')">
                                <span class="material-symbols-outlined text-lg">mp</span>Taquillas
                            </GuestNavLink>
                        </div>
                        <div class="w-full ">
                            <GuestNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                <span class="material-symbols-outlined text-lg">local_activity</span>Mis boletos
                            </GuestNavLink>
                        </div>
                        <div class="w-full">
                            <GuestNavLink :href="route('events.index')" :active="route().current('events.index') || route().current('events.show')">
                                <span class="material-symbols-outlined text-lg">note_stack</span>Eventos
                            </GuestNavLink>
                        </div>
                        <div class="text-center w-full left-zone">
                            <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            location="bottom start" origin="top center"
                            >
                            <!-- <template v-slot:activator="{ props }">
                                <v-btn v-bind="props" variant="text" class="text-none !h-[40px] lg:!rounded-none !rounded-full lg:!h-[80px] !w-full !justify-start lg:!justify-center lg:!w-24 !text-gray-600 !bg-transparent"><span class="material-symbols-outlined text-lg">settings</span>Servicios</v-btn>
                            </template> -->

                            <v-card min-width="300" rounded="lg" class="">
                                <v-list class="">
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

                                <v-list class="">
                                <v-list-item>
                                    <v-switch
                                    v-model="message"
                                    color="purple"
                                    label="Ver boeltos solo en web"
                                    hide-details
                                    ></v-switch>
                                </v-list-item>

                                <v-list-item>
                                    <v-switch
                                    v-model="hints"
                                    color="purple"
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
                        <!-- <div class="w-full">
                            <GuestNavLink :href="route('blogs.show', 1)" :active="route().current('blogs.show')">
                                <span class="material-symbols-outlined text-lg">bookmark</span>Blogs
                            </GuestNavLink>
                        </div> -->
                    </div>
                    <Link
                        v-if="$page.props.auth.user"
                        :href="route('dashboard')"
                        class="w-full"
                    >
                        <v-btn @click="drawerNavState = !drawerNavState" variant="tonal" class="text-none !bg-primary-100 !text-primary-600" block size="large" rounded="xl">Dashboard</v-btn>
                    </Link>
                    <div v-else class="flex flex-col items-center gap-3 w-full">
                        <Link
                            @click="drawerNavState = !drawerNavState"
                            class="w-full"
                            :href="route('register')"
                        >
                            <v-btn variant="elevated" class="text-none !bg-primary-500 !text-white" block size="large" rounded="xl">Registrarse</v-btn>
                        </Link>
                        <Link
                            @click="drawerNavState = !drawerNavState"
                            class="w-full"
                            :href="route('login')"
                        >
                        <v-btn variant="tonal" class="text-none !bg-primary-100 !text-primary-600" block size="large" rounded="xl">Iniciar sesion</v-btn>
                        </Link>
                    </div>
                </div>
        </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>


<style scoped>
.left-zone .v-btn.v-btn--density-default {
    align-items: center !important;
    justify-content: start !important;
}
    .v-navigation-drawer__scrim {
        display: none !important;
    }

</style>

