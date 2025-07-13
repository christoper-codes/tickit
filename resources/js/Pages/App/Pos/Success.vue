<script setup>
import { Head, Link } from '@inertiajs/vue3';
import { onMounted } from 'vue';
import confetti from 'canvas-confetti';
import SuccessSession from '@/Components/SuccessSession.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';

const count = 200;
const defaults = {
  origin: { y: 0.7 }
};

const fire = (particleRatio, opts) => {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
};

const shootConfetti = () => {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};


const shootConfettiTwice = () => {
  shootConfetti();
  setTimeout(shootConfetti, 1000);
};

onMounted(() => {
    shootConfettiTwice();

});

</script>

<template>
    <Head title="success" />
    <SuccessSession />

    <div>
        <!-- Hero -->
        <div class="relative h-screen overflow-hidden flex items-center flex-col justify-center gap-10">
            <div class="absolute -right-40 lg:-right-96 -top-52 lg:-top-52 h-[480px] w-[300px] lg:h-[680px] lg:w-[500px] rounded-full blur-[120px] lg:blur-[220px] bg-primary">
            </div>
            <div class="text-center z-20 relative">
                <h1 class="font-bold text-4xl md:text-5xl lg:text-7xl font-bebas">
                    ¡Boletos adquiridos con éxito!
                </h1>
                <p>¡Gracias por su compra! Puede ver sus boletos adquiridos en la seccion 'dashboard'.</p>
            </div>
            <Link :href="route('dashboard')">
                <PrimaryButton heightbtn="!h-[70px] !text-base !w-full md:!w-auto" paddingbtn="!px-14">
                    <span class="material-symbols-outlined text-2xl mr-2">confirmation_number</span>Ver mis boletos
                </PrimaryButton>
            </Link>
        </div>
    </div>
</template>

<style scoped>

</style>
