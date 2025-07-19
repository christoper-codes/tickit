<script setup>
import { Link, usePage } from '@inertiajs/vue3';
import { menuStateSocialMedia } from '@/composables/nav/menu-state.js'

const year = new Date().getFullYear()
const user = usePage().props.auth.user;
</script>

<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        v-if="menuStateSocialMedia"
        @click="menuStateSocialMedia = !menuStateSocialMedia"
        class="fixed inset-0 bg-black/50 z-20 backdrop-blur-sm"
      ></div>
    </transition>
    <transition name="slide" mode="out-in">
      <div
        v-if="menuStateSocialMedia"
        class="bg-white dark:!bg-neutral-800 fixed top-0 left-0 h-screen w-[100%] md:w-[50%] lg:w-[43%] xl:w-[35%] z-30 overflow-hidden"
      >
        <div
          class="h-full w-full flex flex-col items-start justify-between py-7 px-5 relative z-0"
        >
          <svg
            class="absolute inset-0 size-full stroke-black/10 [mask-image:radial-gradient(100%_50%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="about-svg"
                width="80"
                height="80"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#about-svg)" />
          </svg>

          <div
            @click="menuStateSocialMedia = !menuStateSocialMedia"
            class="p-1 border-2 border-black/50 dark:border-white/50 rounded cursor-pointer z-10"
          >
            <svg
              class="w-8 h-auto stroke-black dark:stroke-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <div
            class="w-full text-center inline-flex flex-col gap-7 2xl:gap-9 text-2xl 2xl:text-3xl z-10 text-neutral-800 dark:text-neutral-100"
          >
            <Link :href="route('events.index')" class="inline-block cursor-pointer">
                <div class="inline-block cursor-pointer">
                    <div class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Eventos</div>
                </div>
            </Link>
            <Link v-if="user" :href="route('welcome')" class="inline-block cursor-pointer">
                <div class="inline-block cursor-pointer">
                    <div class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Volver al inicio</div>
                </div>
            </Link>
             <Link :href="route('dashboard')" class="inline-block cursor-pointer">
                <div class="inline-block cursor-pointer">
                    <div class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Mis boletos</div>
                </div>
            </Link>
            <Link  v-if="!user" :href="route('login')" class="inline-block cursor-pointer">
                <div class="inline-block cursor-pointer">
                    <div class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Iniciar sesión</div>
                </div>
            </Link>
            <Link  v-if="!user" :href="route('register')" class="inline-block cursor-pointer">
                <div class="inline-block cursor-pointer">
                    <div class="relative inline-block transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full">Registrarme</div>
                </div>
            </Link>
          </div>
          <div
            class="flex items-center justify-center gap-3 flex-col w-full z-10"
          >
            <div class="flex items-center  relative text-neutral-800 dark:text-neutral-100">
                <h2 class="font-extrabold font-bebas text-4xl !mt-1">victoria</h2>
            </div>
            <div class="text-center w-full text-xs 2xl:text-sm text-neutral-400">
              © {{ year }} Todos los derechos reservados.
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
