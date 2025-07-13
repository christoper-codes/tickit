<script setup>
const year = new Date().getFullYear()
</script>

<template>
    <footer class="w-full bg-gradient-to-r from-secondary to-primary p-2 flex items-center justify-center z-20 relative">
        <div class="rounded-3xl bg-white py-12 lg:pt-20 w-full text-center flex items-center justify-center">
            <div class="flex items-center justify-center flex-col gap-5">
                <div class="flex items-center justify-center gap-3 flex-col w-full z-10">
                    <div class="flex items-center  relative">
                        <h2 class="font-extrabold font-bebas text-xl lg:text-4xl !mt-1">Temporada 2025</h2>
                        <img class="w-7 lg:w-10 h-auto absolute -top-2 lg:-top-5 -left-6 lg:-left-7" src="/storage/public/hdx-logo.png" alt="hdx logo">
                    </div>
                    <div class="text-center text-xs lg:text-base w-full text-neutral-500">
                        © {{ year }} Todos los derechos reservados. <a href="/politicas-de-privacidad" target="_blank"><span class="underline">Políticas de privacidad</span></a>
                    </div>
                </div>
                <h2 class="inline-block font-bebas lg:mt-5 pr-1 font-bold text-3xl lg:text-9xl opacity-50 bg-clip-text bg-gradient-to-r from-primary to-secondary text-transparent !underline">victoria</h2>
            </div>
        </div>
    </footer>
</template>

