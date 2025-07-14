<script setup>
import { Link } from '@inertiajs/vue3';
import MasterLayout from '@/Layouts/MasterLayout.vue';
</script>

<template>
    <MasterLayout>
        <div data-aos="fade-left" data-aos-duration="1300" data-aos-once="true" class="min-h-screen w-full flex items-center justify-center relative z-10">
            <div class="w-full h-auto">
                <slot />
            </div>
        </div>
    </MasterLayout>

</template>

