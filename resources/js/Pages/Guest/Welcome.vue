<script setup>
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';
import Footer from '@/Components/Footer.vue';
import GuestNav from '@/Components/navs/GuestNav.vue';
import { themeState } from '@/composables/theme/preference';
import MasterLayout from '@/Layouts/MasterLayout.vue';
import { Link, Head, usePage } from '@inertiajs/vue3';
import { ref } from 'vue'

const carouselRef = ref(null)

const cards = [
    {
    title: 'Abonos',
    desc: 'Adquiere abonos para no tener que comprar boletos partido por partido. Ahorra tiempo y asegura tu lugar para toda la temporada o varios eventos.',
    img: 'https://images.pexels.com/photos/8261581/pexels-photo-8261581.jpeg',
    },
    {
    title: 'Promociones',
    desc: 'Aprovecha descuentos exclusivos al comprar varios boletos, por fechas especiales o con cupones promocionales. ¡Tu experiencia más accesible!',
    img: 'https://images.pexels.com/photos/2456353/pexels-photo-2456353.jpeg',
    },
    {
    title: 'Mapa interactivo',
    desc: 'Elige fácilmente tus asientos con un mapa visual del estadio. Compara zonas, precios y selecciona justo donde quieres estar.',
    img: 'https://images.pexels.com/photos/8554385/pexels-photo-8554385.jpeg',
    },
    {
    title: 'Pasarelas de pago',
    desc: 'Compra en línea de forma segura con PayPal, Mercado Pago, tarjetas y más. También puedes pagar en taquilla con tarjeta o efectivo.',
    img: 'https://images.pexels.com/photos/4542839/pexels-photo-4542839.jpeg',
    },
    {
        title: 'Comparte tus boletos',
        desc: '¿Compraste varios boletos? Compártelos fácilmente con tus amigos desde tu cuenta. Ellos podrán acceder con su propio QR sin complicaciones.',
        img: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg',
    },
    {
    title: 'Taquillas físicas',
    desc: '¿Prefieres comprar en persona? También contamos con taquillas físicas en el estadio, listas para atenderte con distintos métodos de pago.',
    img: 'https://images.pexels.com/photos/4542836/pexels-photo-4542836.jpeg',
    },
];


const faqs = [
  {
    question: '¿Dónde puedo ver mis boletos después de comprarlos?',
    answer: 'Puedes ver y descargar todos tus boletos directamente desde tu dashboard personal en nuestra plataforma, ingresando con tu cuenta.',
  },
  {
    question: '¿Puedo comprar abonos para eventos especiales o múltiples fechas?',
    answer: 'Sí, en ciertos eventos ofrecemos abonos o paquetes especiales. Si están disponibles, los verás destacados en la sección del evento correspondiente.',
  },
  {
    question: '¿El sistema permite compartir boletos con amigos o familiares registrados?',
    answer: 'Sí, puedes transferir boletos a otros usuarios registrados desde tu dashboard, siempre y cuando el evento lo permita.',
  },
  {
    question: '¿Puedo acceder al estadio sin conexión a internet si ya descargué mi boleto?',
    answer: 'Sí, una vez que descargues tu boleto desde el dashboard, puedes presentarlo incluso sin conexión, siempre y cuando el código QR sea visible.',
  },
  {
    question: '¿Existen taquillas físicas para comprar boletos en el estadio?',
    answer: 'Sí, algunas taquillas físicas siguen disponibles para ciertos eventos, aunque te recomendamos comprar en línea para asegurar tu lugar y evitar filas.',
  },
];


function scrollLeft() {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: -320, behavior: 'smooth' })
  }
}
function scrollRight() {
  if (carouselRef.value) {
    carouselRef.value.scrollBy({ left: 320, behavior: 'smooth' })
  }
}
</script>

<template>
    <Head title="Vienvenidos" />
    <MasterLayout>
        <section class="min-h-screen !p-4 sm:!p-8 flex w-full relative">
            <div class="rounded-3xl w-full overflow-hidden relative z-10 bg-cover object-cover bg-center" :style="`background-image: url('https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg')`">
               <div class="absolute top-0 w-full mt-5">
                 <GuestNav/>
               </div>
                <div class="absolute inset-0 bg-gradient-to-l from-transparent via-black/60 to-black/95"></div>
                <div class="relative z-10 h-full flex items-center justify-start max-w-7xl mx-auto lg:mt-5">
                    <div class="max-w-2xl text-white">
                        <div class="flex items-center gap-2 mb-4">
                            <span class="material-symbols-outlined">arrow_right_alt</span>Proximo evento
                        </div>
                        <h1 class="text-4xl lg:text-8xl font-bold mb-4 drop-shadow-lg font-bebas">
                            The Killers 10 de Diciembre
                        </h1>
                        <p class="text-lg lg:text-xl mb-8 drop-shadow-md opacity-90">
                            Descubre los mejores eventos y experiencias únicas en TicketOffice. ¡No te pierdas la oportunidad de vivir momentos inolvidables!
                        </p>
                        <div data-aos="fade-left" data-aos-duration="1300" data-aos-once="true" class="max-w-2xl flex flex-col md:flex-row md:items-center gap-5">
                            <PrimaryButton heightbtn="!h-[70px] !text-base !w-full md:!w-auto" paddingbtn="!px-14">
                                <span class="material-symbols-outlined text-xl mr-1">shopping_cart</span>Comprar Entradas
                            </PrimaryButton>

                            <SecondaryButton heightbtn="!h-[70px] !text-base !w-full md:!w-auto" paddingbtn="!px-14">
                                <span>Ver eventos</span>
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="services" class="relative">
            <div class="absolute left-1/2 -translate-x-1/2 -top-52 lg:-top-[500px] h-[380px] w-[300px] lg:h-[500px] lg:w-[600px] rounded-full blur-[120px] lg:blur-[220px] bg-tw-primary"></div>
            <div class="!mx-auto !px-4 md:!px-0 relative z-10">
                <div class="max-w-7xl !mx-auto !pt-12 lg:!pt-24">
                    <h2 class="font-display text-4xl font-bold text-balance font-bebas lg:text-[60px] !mb-8 !mx-auto">
                        Nuestros servicios
                    </h2>
                    <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                        <p class="lg:w-2/3 text-lg lg:text-xl">
                            En nuestro sistema de boletos, hacemos que asistir a tus eventos favoritos sea fácil, rápido y seguro. Compra en línea, aprovecha promociones, adquiere abonos y elige cómo pagar, todo con la opción de atención en taquillas físicas si lo prefieres.
                        </p>
                    <div class="flex lg:items-center lg:justify-center gap-5">
                        <v-btn @click="scrollLeft" class="!p-5 !border !border-dark/40 dark:!border-light/30 !bg-light dark:!bg-dark !rounded-lg !h-full !shadow-none">
                            <svg class="w-10 h-10" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" ></path></svg>
                        </v-btn>
                        <v-btn @click="scrollRight" class="!p-5 !border !border-dark/40 dark:!border-light/30 !bg-light dark:!bg-dark !rounded-lg !h-full !shadow-none">
                            <svg class="w-10 h-10 rotate-180" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" ></path></svg>
                        </v-btn>
                    </div>
                    </div>
                </div>
                <div class="relative !pb-12 md:!pb-32">
                    <div class="relative !-ml-7 lg:!-ml-0">
                    <div class="custom-scrollbar relative mt-4 overflow-x-auto" ref="carouselRef">
                        <div class="relative !mx-auto flex max-w-7xl flex-col !px-4 lg:!px-0 !py-4 xl:flex-row gap-8">
                        <div class="relative flex items-stretch !max-w-none gap-6 md:gap-8 !p-2">
                            <div v-for="(card, index) in cards" :key="index" class="z-50 relative max-w-[20rem] shrink-0 md:max-w-sm bg-white dark:!bg-white/20 !p-2 rounded-lg shadow-lg">
                            <div class="flex bg-cover relative h-[600px] aspect-3/4 object-cover w-full !p-4 rounded-lg overflow-hidden" :style="`background-image: url('${card.img}')`">
                                <div class="z-50 flex flex-col flex-1 justify-end text-white">
                                <div class="flex-col gap-4 justify-end">
                                    <h3 class="font-display tracking-tight text-4xl lg:text-5xl md:leading-tight font-bebas">
                                        {{ card.title }}
                                    </h3>
                                    <p>
                                        {{ card.desc }}
                                    </p>
                                </div>
                                </div>
                                <div class="z-0 absolute bottom-0 left-0 right-0 h-[350px] lg:h-[350px] !bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,#000_90%)] block"></div>
                            </div>
                            </div>
                            <div class="w-[4px] shrink-0">&nbsp;</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="faqs" class="relative">
            <div class="absolute -right-40 lg:-right-96 -top-52 lg:-top-52 h-[480px] w-[300px] lg:h-[680px] lg:w-[500px] rounded-full blur-[120px] lg:blur-[220px] bg-tw-primary"></div>
            <div class="!mx-auto !px-4 md:!px-0 relative z-10">
                <div class="relative !z-10 max-w-3xl !mx-auto">
                    <h2 class="text-5xl font-bold md:text-6xl md:leading-tight !mb-4 font-bebas text-center">
                        Te estas preguntando...
                    </h2>
                    <div class="mb-4">
                        <div v-for="(faq, index) in faqs" :key="index" class="!py-8 first:pt-0 last:pb-0">
                            <div class="flex flex-col lg:flex-row !gap-5">
                                <div class="shrink-0 mt-1 relative flex justify-center items-center size-10 rounded-xl border">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="!shrink-0 size-6 text-tw-primary fill-current" viewBox="0 0 24 24"><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path></svg>
                                </div>

                                <div class="grow">
                                    <h3 class="md:text-lg font-semibold">
                                        {{ faq.question }}
                                    </h3>
                                    <p class="!mt-1 opacity-70">
                                        {{ faq.answer }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <PrimaryButton heightbtn="!h-[70px]" paddingbtn="!px-14">
                            Ver proximos eventos
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="max-w-7xl mx-auto relative mb-24">
            <div class="mt-24 w-full">
                <h3 class="font-bebas text-6xl font-bold">Ubicación del estadio</h3>
                <p>Calle Navegantes 327, Fracc. Virginia, 94294 Veracruz, Ver.</p>
                <p>Estacionamiento disponible en el estadio y alrededores. Asegúrate de llegar con tiempo para evitar contratiempos.</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.1000362447776!2d-96.12713863341021!3d19.16389135194487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3413bee13e223%3A0x4fe5b42b583ae037!2sEstadio%20Luis%20Pirata%20Fuente!5e0!3m2!1ses-419!2smx!4v1752452039471!5m2!1ses-419!2smx" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-2xl border-0 mt-7"></iframe>
            </div>
        </section>

        <Footer />
    </MasterLayout>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
