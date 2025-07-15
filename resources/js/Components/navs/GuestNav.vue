<script setup >
import { Link, usePage } from '@inertiajs/vue3';
import SecondaryButton from '../buttons/SecondaryButton.vue';
import { menuStateSocialMedia, menuStateApp } from '@/composables/nav/menu-state.js'
import GuestNavSocial from './GuestNavSocial.vue';
import { themeState } from '@/composables/theme/preference';

const user = usePage().props.auth.user;
</script>

<template>
    <div class="w-full relative">
        <div class="lg:hidden">
            <div class="flex items-center w-full justify-between relative z-20">
                <Link :href="route('welcome')">
                    <div class="flex gap-2 items-center relative">
                        <img class="w-6 rounded-sm z-20 relative" src="../../../../public/img/logo-light.png" alt="brand logo">
                        <h2 class="font-extrabold font-bebas text-2xl !mt-1">victoria</h2>
                    </div>
                </Link>
                <div class="flex items-center gap-2">
                    <svg @click="themeState = themeState === 'dark' ? 'light' : 'dark'" class="w-7 h-auto stroke-white cursor-pointer" data-slot="icon" fill="none" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"></path><circle cx="12" cy="12" r="3.75" stroke-width="1.5" fill="none"></circle></svg>
                    <div @click="menuStateApp = !menuStateApp">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-8 mb-1"><path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full hidden lg:flex items-center justify-between !mx-auto !max-w-7xl py-5 z-20 relative">
            <Link :href="route('welcome')">
                <div class="flex items-center gap-2 relative">
                    <img class="w-8 rounded-sm z-20 relative" src="../../../../public/img/logo-light.png" alt="brand logo">
                    <h2 class="font-extrabold font-bebas text-4xl !mt-1">victoria</h2>
                </div>
            </Link>

            <div class="flex items-center gap-5">
                <GuestNavSocial />
                <div @click="menuStateSocialMedia = !menuStateSocialMedia" class="items-center gap-1 cursor-pointer relative inline-flex transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">
                    <span class="block">Enlaces rapidos</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 fill-current" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>
                </div>
                <div v-if="!user" class="inline-block">
                    <Link :href="route('login')" class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Iniciar sesión</Link>
                </div>
                <div v-if="!user" class="inline-block">
                    <Link :href="route('register')" class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Registrarse</Link>
                </div>
                <div v-if="user" class="inline-block">
                    <Link :href="route('events.index')" class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Eventos</Link>
                </div>
                <div v-if="user" class="inline-block">
                    <Link :href="route('dashboard')" class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Dashboard</Link>
                </div>
                <svg @click="themeState = themeState === 'dark' ? 'light' : 'dark'" class="w-7 h-auto stroke-white cursor-pointer" data-slot="icon" fill="none" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"></path><circle cx="12" cy="12" r="3.75" stroke-width="1.5" fill="none"></circle></svg>
            </div>
            <Link :href="route('dashboard')" >
                <SecondaryButton>
                    Mis boletos
                </SecondaryButton>
            </Link>
        </div>
    </div>
</template>
