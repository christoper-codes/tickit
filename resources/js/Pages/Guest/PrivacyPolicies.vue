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
  <div class="bg-white w-full">
    <main class="flex items-center justify-center py-5 lg:py-0 relative bg-white lg:w-[60%] !mx-auto">
    <div class="px-5 lg:px-0 lg:py-5">
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
        <h2 class="text-center shadow-2xl font-bold text-xl lg:text-3xl p-7 rounded-xl block w-full">Políticas de privacidad</h2>
        <h4 class="text-center  mt-12 inline-block mx-auto">Ultima actualización: {{ formattedDate }}</h4>
      </div>
      <div class="mt-7 leading-7">
        <div class="font-medium  opacity-90">
        <main class="min-h-screen w-full">
        <div class="w-full mx-auto bg-white py-5 px-4 md:px-10">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">Políticas de Privacidad – victoria</h1>

            <p class="text-gray-700">
            Cuando usa victoria, nos confía datos como su nombre, correo electrónico y dirección para cumplir con el objetivo principal de la plataforma.
            </p>
            <p class="text-gray-700 mt-2">
            victoria no comparte esta información con terceros y los datos no son de dominio público.
            </p>

            <h2 class="text-xl font-bold text-gray-800 mt-8">1. Recopilación y uso de datos</h2>
            <p class="text-gray-700 mt-2">
            Información de perfil de usuario: Recopilamos datos cuando los usuarios crean o actualizan sus cuentas de victoria. Esto puede incluir:
            </p>
            <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Nombre</li>
            <li>Correo electrónico</li>
            <li>Domicilio</li>
            <li>Fotografía de perfil</li>
            </ul>

            <h2 class="text-xl font-bold text-gray-800 mt-8">2. Políticas de privacidad de credencialización</h2>
            <p class="text-gray-700 mt-2">
            Club victoria (en adelante HXLP), tiene la convicción de darle seguridad a sus afiliados sobre la protección de la información personal (en adelante “Datos Personales”) que compartan con HXLP, siendo responsable de su tratamiento conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
            </p>

            <h3 class="text-lg font-semibold text-gray-800 mt-4">a. Datos que se podrán recabar:</h3>
            <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Nombre completo</li>
            <li>Fecha de nacimiento</li>
            <li>Número de celular</li>
            <li>Correo electrónico</li>
            <li>Sexo</li>
            <li>Fotografía para la credencial</li>
            </ul>

            <h3 class="text-lg font-semibold text-gray-800 mt-4">b. Finalidad del tratamiento de los datos:</h3>
            <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Dudas y aclaraciones relacionadas con la credencialización.</li>
            <li>Enviar información, publicidad y promociones de HXLP, sus patrocinadores y aliados comerciales.</li>
            <li>Segmentación de afiliados para dinámicas y envío de información específica.</li>
            <li>Otras acciones que cumplan con la ley y mantengan la confidencialidad de los datos.</li>
            </ul>
            <p class="text-gray-700 mt-2">
            La información puede enviarse por medios electrónicos como correo, teléfono o mensajería (Ej. WhatsApp).
            </p>

            <h2 class="text-xl font-bold text-gray-800 mt-8">3. Privacidad y consentimiento</h2>
            <p class="text-gray-700 mt-2">
            La credencialización con HXLP implica el consentimiento pleno y sin reservas de los usuarios para el tratamiento de sus datos personales, conforme a este Aviso de Privacidad. Se tomarán medidas para salvaguardar estos datos.
            </p>
            <p class="text-gray-700 mt-2">
            El titular de los datos declara ser mayor de edad al momento de proporcionar la información. En caso de menores o personas con incapacidad legal, solo se permitirá la afiliación con consentimiento del tutor legal.
            </p>

            <h2 class="text-xl font-bold text-gray-800 mt-8">4. Medidas de seguridad</h2>
            <p class="text-gray-700 mt-2">
            HXLP cuenta con medidas técnicas, físicas y administrativas adecuadas para proteger la confidencialidad de los datos personales.
            </p>

            <h2 class="text-xl font-bold text-gray-800 mt-8">5. Derechos del titular de los datos personales</h2>
            <ul class="list-disc list-inside text-gray-700 mt-2">
            <li>Acceder a sus datos personales.</li>
            <li>Rectificarlos cuando sean inexactos o incompletos.</li>
            <li>Revocar el consentimiento para su tratamiento y cancelar la credencialización.</li>
            </ul>

            <h2 class="text-xl font-bold text-gray-800 mt-8">6. Cambios al aviso de privacidad</h2>
            <p class="text-gray-700 mt-2">
            HXLP se reserva el derecho de modificar este aviso de privacidad. Cualquier cambio que requiera su consentimiento le será notificado por medios físicos o digitales.
            </p>
            <p class="text-gray-700 mt-2">
            Fecha de realización del presente Aviso de Privacidad: <strong>27 de febrero de 2023</strong>.
            </p>
            <p class="text-gray-700 mt-2">
            Contacto: <a href="mailto:soporte@victoriadexalapa.com.mx" class="underline text-blue-500">soporte@victoriadexalapa.com.mx</a>
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
