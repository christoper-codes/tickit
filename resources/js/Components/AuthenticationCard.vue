<script setup>
import { Link } from '@inertiajs/vue3';
import ApplicationLogo from './ApplicationLogo.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
</script>

<template>
   <main class="min-h-screen w-full flex flex-col lg:flex-row lg:justify-between">
        <div class="min-h-screen w-full lg:w-[45%] bg-white flex items-center justify-center lg:py-20">
            <div class="w-full h-auto">
                <slot />
            </div>
        </div>

       <div data-aos="fade-left" data-aos-duration="1300" class="bg-white hidden min-h-screen w-[55%] rounded-tl-[33px] rounded-bl-[30px] bg-center bg-no-repeat lg:flex flex-col items-center justify-between relative overflow-hidden">
            <video autoplay loop muted playsinline
                class="absolute inset-0 w-full h-full object-cover z-0">
                <source type="video/mp4" src="/videos/auth-video.mp4">
            </video>
            <div class="h-full bg-black/60 backdrop-blur-md w-full flex items-center justify-center" style="z-index: 2;">
               <h3 class="mt-5 inline-block font-bebas pr-1 font-bold text-7xl bg-clip-text bg-white opacity-50 text-transparent">victoria</h3>
            </div>
        </div>
    </main>
</template>

