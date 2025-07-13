<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
    banner:{
        type: Object,
        required: true
    }
});
const mouseX = ref(0);
const mouseY = ref(0);
const imageRef = ref(null);
const isDesktop = ref(false);

const handleMouseMove = (event) => {
    if (!isDesktop.value || !imageRef.value) return;

    const rect = imageRef.value.getBoundingClientRect();
    const deltaX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const deltaY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);

    mouseX.value = Math.max(-1, Math.min(1, deltaX));
    mouseY.value = Math.max(-1, Math.min(1, deltaY));
};

onMounted(() => {
    isDesktop.value = window.innerWidth >= 1024;
    if (isDesktop.value) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', () => {
            mouseX.value = 0;
            mouseY.value = 0;
        });
    }
});
</script>

<template>
    <div v-if="banner.is_active" class="h-screen w-full p-5 lg:p-7 bg-gradient-to-br from-primary to-secondary fixed inset-0 z-50 flex items-center justify-center">
        <img ref="imageRef" class="h-full w-auto rounded-2xl transition-transform duration-100 ease-out"
            :style="isDesktop ? {
                transform: `perspective(1000px) rotateX(${mouseY * -7}deg) rotateY(${mouseX * 7}deg) translateZ(20px)`,
                transformStyle: 'preserve-3d'
            } : {}"
            :src="`/storage/${banner.file_path}`" alt="banner image"
        >
    </div>
</template>
