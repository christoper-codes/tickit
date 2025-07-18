<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import { drawerNavState, draweAppNavState } from '@/composables/drawersStates';
import NavegationDrawerApp from '@/Components/NavegationDrawerApp.vue';
import MasterLayout from './MasterLayout.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import { themeState } from '@/composables/theme/preference';

const fav = ref(true);
const menu = ref(false);
const message = ref(false);
const hints = ref(true);

const toggleFav = () => {
  fav.value = !fav.value;
};

const user = usePage().props.auth.user;
const isMobile = ref(window.innerWidth < 1024);

</script>

<template>
    <MasterLayout>
        <NavegationDrawerApp v-bind:user="user" />
        <transition name="fade" mode="out-in">
            <div v-if="draweAppNavState && isMobile" @click="draweAppNavState = !draweAppNavState" class="h-screen w-full bg-black/50 fixed z-50 backdrop-blur-sm"></div>
        </transition>
        <div class="fixed w-full z-40 top-0 left-0 overflow-hidden backdrop-filter backdrop-blur-md">
            <div class="w-full bg-transparent py-5 lg:py-5 px-4 lg:px-10 flex items-center justify-end">
                <div class="lg:flex items-center gap-4 lg:gap-6 hidden">
                    <h3 class="font-bold">v3.0.1</h3>

                    <svg @click="themeState = themeState === 'dark' ? 'light' : 'dark'" class="w-8 h-auto stroke-black dark:stroke-white cursor-pointer" data-slot="icon" fill="none" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"></path><circle cx="12" cy="12" r="3.75" stroke-width="1.5" fill="none"></circle></svg>

                    <Link :href="route('events.index')">
                        <PrimaryButton heightbtn="!h-[60px]" paddingbtn="!px-10">
                            <span>Encontrar eventos</span>
                        </PrimaryButton>
                    </Link>
                </div>
                <div class="lg:hidden">
                    <svg @click="draweAppNavState = !draweAppNavState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon" class="size-8 mb-1"><path fill-rule="evenodd" d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
        <div class="lg:ml-[270px]">
            <main class="px-5 lg:px-0 lg:pr-5 space-y-4 sm:space-y-6 min-h-screen overflow-hidden relative">
            <div class="z-20 relative !m-0  min-h-screen" data-aos="fade-right" data-aos-duration="1500">
                <div class="absolute -right-40 lg:-right-96 -top-52 lg:-top-52 h-[480px] w-[300px] lg:h-[680px] lg:w-[500px] rounded-full blur-[120px] lg:blur-[220px] bg-tw-primary">
                </div>
                <div class="absolute -bottom-60 -left-72 h-[700px] w-[1500px] rounded-full blur-[100px]">
                </div>
                    <div class="z-20 relative lg:!pt-16">
                        <slot/>
                    </div>
                </div>
            </main>
        </div>
    </MasterLayout>
</template>


<style >
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

.profile-btn .v-btn--size-default {
    padding: 0px !important;
    min-width: 0px !important;
}

/* CSS Inner Shadow Code */
.inner-shadow {
box-shadow: 36px -1px 26px -35px rgba(189, 189, 189, 0.67) inset;
-webkit-box-shadow: 36px -1px 26px -35px rgba(189, 189, 189, 0.67) inset;
-moz-box-shadow: 36px -1px 26px -35px rgba(189, 189, 189, 0.67) inset;
}
</style>

