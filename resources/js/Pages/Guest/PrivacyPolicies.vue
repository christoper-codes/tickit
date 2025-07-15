<script setup>
import MasterLayout from '@/Layouts/MasterLayout.vue';
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
    <MasterLayout>
    <div class="w-full">
        <main class="flex items-center justify-center py-5 lg:py-0 relative lg:w-[60%] !mx-auto">
        <div class="px-5 lg:px-0 lg:py-5">
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
            <Link :href="route('welcome')" class="block">
                <div class="lg:h-[50px] h-[45px] lg:w-[50px] w-[45px] bg-tw-primary text-white rounded-full flex items-center justify-center text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-7" viewBox="0 0 24 24"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
                </div>
            </Link>
            </div>
            <Link :href="route('welcome')" class="block">
                <h2 class="font-bebas text-3xl font-bold">Victoria</h2>
            </Link>
        </div>
        <div class="flex flex-col items-center w-full mt-5 lg:mt-6">
            <h2 class="text-center bg-neutral-100 dark:bg-neutral-900 shadow-2xl font-bold text-xl lg:text-3xl p-7 rounded-xl block w-full">Políticas de privacidad</h2>
            <h4 class="text-center  mt-12 inline-block mx-auto">Ultima actualización: {{ formattedDate }}</h4>
        </div>
        <div class="mt-7 leading-7">
            <div class="font-medium">
            <main class="min-h-screen w-full">
                <div class="w-full mx-auto py-5 px-4 md:px-10">
                    <h1 class="text-2xl font-bold mb-4">Políticas de Privacidad – victoria</h1>
                    <p class="opacity-70">
                    Al utilizar victoria, confías en nosotros para manejar tu información personal como nombre, correo electrónico y dirección, lo cual es esencial para el funcionamiento de la plataforma.
                    </p>
                    <p class="opacity-70 mt-2">
                    Esta información es utilizada exclusivamente por victoria y no se comparte con terceros ni se hace pública.
                    </p>

                    <h2 class="text-xl font-bold mt-8">1. Información que recopilamos y su uso</h2>
                    <p class="opacity-70 mt-2">
                    Cuando un usuario crea o modifica su cuenta en victoria, recopilamos ciertos datos personales necesarios para ofrecer nuestros servicios:
                    </p>
                    <ul class="list-disc list-inside opacity-70 mt-2">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Dirección</li>
                        <li>Imagen de perfil</li>
                    </ul>

                    <h2 class="text-xl font-bold mt-8">2. Tratamiento de datos para credencialización</h2>
                    <p class="opacity-70 mt-2">
                    La plataforma victoria (también denominada HXLP) se compromete a proteger los datos personales que sus usuarios proporcionan, cumpliendo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.
                    </p>

                    <h3 class="text-lg font-semibold mt-4">a. Datos que pueden ser solicitados:</h3>
                    <ul class="list-disc list-inside opacity-70 mt-2">
                        <li>Nombre y apellidos</li>
                        <li>Fecha de nacimiento</li>
                        <li>Número telefónico</li>
                        <li>Email de contacto</li>
                        <li>Género</li>
                        <li>Fotografía para la credencial</li>
                    </ul>

                    <h3 class="text-lg font-semibold mt-4">b. Propósito del uso de esta información:</h3>
                    <ul class="list-disc list-inside opacity-70 mt-2">
                        <li>Atender solicitudes o dudas relacionadas con el proceso de credencialización.</li>
                        <li>Enviar campañas promocionales y noticias de victoria, sus patrocinadores o socios.</li>
                        <li>Realizar segmentaciones para enviar comunicaciones específicas según el perfil del usuario.</li>
                        <li>Cualquier otra acción que cumpla con la normativa aplicable y garantice la privacidad de los datos.</li>
                    </ul>
                    <p class="opacity-70 mt-2">
                    La información podrá ser enviada por medios electrónicos como correo electrónico, llamadas o plataformas de mensajería (por ejemplo, WhatsApp).
                    </p>

                    <h2 class="text-xl font-bold mt-8">3. Consentimiento informado</h2>
                    <p class="opacity-70 mt-2">
                    Al aceptar ser credencializado en victoria, el usuario da su consentimiento explícito para el tratamiento de sus datos conforme a este aviso. Se implementan medidas para asegurar la confidencialidad de dicha información.
                    </p>
                    <p class="opacity-70 mt-2">
                    Quien proporciona los datos declara tener mayoría de edad. En caso contrario, se requerirá el permiso del tutor legal para completar el registro.
                    </p>

                    <h2 class="text-xl font-bold mt-8">4. Seguridad de la información</h2>
                    <p class="opacity-70 mt-2">
                    victoria ha adoptado procedimientos técnicos, administrativos y físicos para prevenir el acceso no autorizado a los datos personales.
                    </p>

                    <h2 class="text-xl font-bold mt-8">5. Derechos del usuario</h2>
                    <ul class="list-disc list-inside opacity-70 mt-2">
                        <li>Consultar la información que hemos almacenado.</li>
                        <li>Solicitar correcciones si los datos son incorrectos o incompletos.</li>
                        <li>Revocar su consentimiento y solicitar la eliminación de su perfil o credencial.</li>
                    </ul>

                    <h2 class="text-xl font-bold mt-8">6. Modificaciones a este aviso</h2>
                    <p class="opacity-70 mt-2">
                    victoria se reserva el derecho de actualizar este aviso de privacidad. Si los cambios requieren un nuevo consentimiento, se notificará oportunamente al usuario a través de canales físicos o digitales.
                    </p>
                    <p class="opacity-70 mt-2">
                    Última actualización de este Aviso de Privacidad: <strong>15 de julio de 2025</strong>.
                    </p>
                    <p class="opacity-70 mt-2">
                    Contacto: <a href="mailto:soporte@victoria.com" class="underline text-blue-500">soporte@victoria.com</a>
                    </p>
                </div>
            </main>
            </div>
        </div>
        <div class="mt-16 flex flex-col items-center justify-center">
            <h2 class="font-bebas text-3xl font-bold">Victoria</h2>
            <p class="mt-5 lg:mt-7 inline-block mx-auto">victoria | {{ formattedDate }}</p>
        </div>
        </div>
    </main>
    </div>
    </MasterLayout>
</template>
