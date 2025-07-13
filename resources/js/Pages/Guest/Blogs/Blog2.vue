<script setup>
import { Head, Link } from '@inertiajs/vue3';
import  GuestLayout  from '@/Layouts/GuestLayout.vue';
import NavigationDrawer from '@/Components/NavigationDrawer.vue';
import Footer from '@/Components/Footer.vue';
import { ref } from 'vue';
import ErrorSession from '@/Components/ErrorSession.vue';
import Breadcrumb from '@/Components/Breadcrumb.vue';

defineProps({

})

</script>

<template>
    <Head title="Taquillas" />
    <GuestLayout />
    <NavigationDrawer />
    <Breadcrumb>
        <template #title>
            <span>Vive la emoción en cada partido local</span>
        </template>
    </Breadcrumb>

    <main class="px-4 lg:px-0 relative">

        <section class="max-w-7xl min-h-screen mx-auto">
            <!-- Blog Article -->
            <div class="mx-auto">
            <div class="grid lg:grid-cols-3 gap-y-8 lg:gap-y-0 lg:gap-x-6">
                <!-- Content -->
                <div class="lg:col-span-2">
                <div class="py-8 lg:pe-8">
                    <div class="space-y-5 lg:space-y-8">
                    <Link :href="route('welcome')">
                        <div class="inline-flex cursor-pointer items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline focus:outline-none focus:underline">
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            Regresar al inicio
                        </div>
                    </Link >

                    <div class="flex items-center gap-x-5">
                        <a class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
                            Notias deportivas
                        </a>
                        <p class="text-xs sm:text-sm text-gray-800">Octubre 10, 2025</p>
                    </div>

                    <p class="text-lg text-gray-800">La temporada de los victoria no solo se trata de baloncesto; es una fiesta completa que te espera en cada partido en casa. Cada encuentro se convierte en una experiencia inolvidable gracias al emocionante fanfest que acompaña a los juegos.</p>

                    <p class="text-lg text-gray-800">Los aficionados pueden disfrutar de música en vivo antes y después del partido, creando un ambiente vibrante que eleva el ánimo de todos los asistentes. Además, hay dinámicas interactivas que permiten a los seguidores participar y ganar premios, lo que hace que la experiencia sea aún más divertida.</p>

                    <div class="text-center">
                        <div class="grid lg:grid-cols-2 gap-3">
                        <div class="grid grid-cols-2 lg:grid-cols-1 gap-3">
                            <figure class="relative w-full h-60">
                            <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="../../../../../public/img/blog/blog3.jpg" alt="Blog Image">
                            </figure>
                            <figure class="relative w-full h-60">
                            <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="../../../../../public/img/blog/blog2.jpg" alt="Blog Image">
                            </figure>
                        </div>
                        <figure class="relative w-full h-72 sm:h-96 lg:h-full">
                            <img class="size-full absolute top-0 start-0 object-cover rounded-xl" src="../../../../../public/img/blog/blog1.jpg" alt="Blog Image">
                        </figure>
                        </div>

                        <span class="mt-3 block text-sm text-center text-gray-500">
                            Trabajando durante el proceso
                        </span>
                    </div>

                    <p class="text-lg text-gray-800">Los fanáticos también tienen la oportunidad de llevarse un pedacito del equipo a casa con una amplia variedad de tiendas de merchandise. Desde camisetas y gorras hasta accesorios únicos, hay algo para todos los gustos.</p>

                    <p class="text-lg text-gray-800">Y no te preocupes por el hambre: <span class="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium">"el fanfest cuenta con un bar y snackbars"</span> donde podrás degustar deliciosas opciones para disfrutar mientras animas a tu equipo. Desde botanas tradicionales hasta refrescos, todo está diseñado para que no te falte nada durante el emocionante partido.</p>

                    <blockquote class="text-center p-4 sm:px-7">
                        <p class="text-xl font-medium text-gray-800 lg:text-2xl lg:leading-normal xl:text-2xl xl:leading-normal">
                            Así que, si aún no has asistido a un juego de los victoria, ¡no esperes más! Ven y vive la experiencia completa en el fanfest. ¡Te esperamos en la próxima cita en casa para disfrutar del mejor baloncesto y mucho más
                        </p>
                        <p class="mt-5 text-gray-800">
                            Directiva victoria
                        </p>
                    </blockquote>

                    <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                        <!-- Badges/Tags -->
                        <div>
                        <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
                            Deportes
                        </a>
                        <a class="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" href="#">
                            Baloncesto
                        </a>
                        </div>

                        <!-- Author -->
                        <div class="flex items-center gap-x-3">
                        <img class="h-10 w-10 rounded-full" src="../../../../../public/img/user-img.svg" alt="Author Image">
                        <div>
                            <p class="text-sm font-medium text-gray-800">Directiva victoria</p>
                            <p class="text-xs text-gray-500">Autor</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

                <!-- Sidebar -->
                <aside class="lg:col-span-1">
                <div class="sticky top-28 hidden lg:block">
                    <div class="p-4 border border-gray-200 rounded-xl shadow-sm">
                    <h3 class="text-lg font-semibold">Subscribete a nuestra seccion</h3>
                    <p class="text-sm text-gray-500"> Obten las ulimas y mas recientes actualizaciones de equipo de victoria. </p>
                    <form class="mt-4">

                        <div>
                            <p class="font-medium mb-1"><span class="text-red-500">*</span> Correo electronico</p>
                            <v-text-field
                                color="primary"
                                label="E-mail"
                                placeholder="user@gmail.com"
                                hint="Ingresa tu correo electronico"
                                ></v-text-field>
                        </div>
                        <v-btn variant="elevated" class="text-none !bg-secondary-500 !text-white w-full lg:w-auto" size="large" rounded="xl" block>Subscribirse</v-btn>
                    </form>
                    </div>
                </div>
                </aside>
            </div>
            </div>

        </section>

    </main>
    <Footer />

</template>

<style scoped>

</style>
