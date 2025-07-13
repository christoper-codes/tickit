<script setup>
import { Link, Head, usePage } from '@inertiajs/vue3';

const date = new Date();
const formattedDate = new Intl.DateTimeFormat('es-MX', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}).format(date);
</script>

<template>
<Head title="Políticas de privacidad" />
  <div class="bg-white">
    <main class="flex items-center justify-center py-5 lg:py-0 relative bg-white lg:w-[60%] !mx-auto">
    <div class="px-5 lg:px-0 lg:py-5 w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
        <Link :href="route('welcome')" class="block">
            <div class="lg:h-[50px] h-[45px] lg:w-[50px] w-[45px] bg-gradient-to-r from-primary to-primary text-white rounded-full flex items-center justify-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
            </div>
        </Link>
        </div>
        <Link :href="route('welcome')" class="block">
            <img class="w-16 lg:w-16 h-auto" src="/storage/public/hdx-logo.png" alt="img logo">
        </Link>
      </div>
      <div class="flex flex-col items-center w-full mt-5 lg:mt-6">
        <h2 class="text-center shadow-2xl font-bold text-xl lg:text-3xl p-7 rounded-xl block w-full">Términos y Condiciones del Boleto</h2>
        <h4 class="text-center  mt-12 inline-block mx-auto">Ultima actualización: {{ formattedDate }}</h4>
      </div>
      <div class="mt-7 leading-7">
        <div class="font-medium  opacity-90">
        <main class="min-h-screen w-full">
            <div class="w-full mx-auto bg-white py-5 px-4 md:px-10">
                <h1 class="text-2xl font-bold text-gray-800 mb-4">Términos y Condiciones del Boleto – victoria</h1>
                <h2 class="text-xl font-bold text-gray-800 mt-8">1. Reembolsos</h2>
                <p class="text-gray-700 mt-2">
                  El boleto no está sujeto a reembolso, cambio o reposición.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">2. Acceso</h2>
                <p class="text-gray-700 mt-2">
                  El boleto te da derecho a un acceso al inmueble.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">3. Asiento asignado</h2>
                <p class="text-gray-700 mt-2">
                  El boleto te da derecho a un lugar específico.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">4. Reingreso</h2>
                <p class="text-gray-700 mt-2">
                  No está permitido el reingreso al inmueble.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">5. Validez del boleto</h2>
                <p class="text-gray-700 mt-2">
                  El boleto es válido sólo para el evento y asiento indicado.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">6. Revisión de ingreso</h2>
                <p class="text-gray-700 mt-2">
                  La admisión está sujeta a revisión para evitar el ingreso de:
                </p>
                <ul class="list-disc list-inside text-gray-700 mt-2">
                  <li>Alimentos, bebidas alcohólicas</li>
                  <li>Drogas, armas</li>
                  <li>Mochilas, maletas</li>
                  <li>Tabaco, vapeadores</li>
                  <li>Cámaras, grabadoras</li>
                  <li>Otros artículos no autorizados</li>
                </ul>

                <h2 class="text-xl font-bold text-gray-800 mt-8">7. Derecho de admisión</h2>
                <p class="text-gray-700 mt-2">
                  El titular se reserva el derecho de admisión.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">8. Conducta</h2>
                <p class="text-gray-700 mt-2">
                  Se podrá retirar a personas con conducta ofensiva.
                </p>

                <h2 class="text-xl font-bold text-gray-800 mt-8">9. Normas del inmueble</h2>
                <p class="text-gray-700 mt-2">
                  El espectador debe cumplir con todas las reglas del inmueble.
                </p>
            </div>
        </main>
        </div>
      </div>
      <div class="mt-16 flex flex-col items-center justify-center">
        <Link :href="route('welcome')" class="block">
            <img class="!w-20 h-auto" src="/storage/public/hdx-logo.png" alt="img logo">
        </Link>
        <p class="mt-5 lg:mt-7 inline-block mx-auto">victoria | {{ formattedDate }}</p>
      </div>
    </div>
  </main>
  </div>
</template>
