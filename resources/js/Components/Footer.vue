<script setup>
const year = new Date().getFullYear()
</script>

<template>
    <footer class="relative">
        <div class="flex items-center justify-center gap-3">
            <img class="w-10 rounded-sm z-20 relative" src="../../../public/img/logo-light.png" alt="brand logo">
            <h2 class="font-bebas text-5xl font-bold text-center relative z-10">Victoria</h2>
        </div>
        <div class="text-center text-xs lg:text-base w-full py-4 relative z-10">
            © {{ year }} Todos los derechos reservados. <a href="/politicas-de-privacidad" target="_blank"><span class="underline">Políticas de privacidad</span></a>
        </div>
        <div class="absolute left-[55%] -translate-x-1/2 bottom-0 h-[60px] w-[100%] rounded-full blur-[100px] bg-tw-primary"></div>
    </footer>
</template>

