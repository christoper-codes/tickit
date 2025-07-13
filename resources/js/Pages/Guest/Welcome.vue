<script setup>
import { themeState } from '@/composables/theme/preference';
import MasterLayout from '@/Layouts/MasterLayout.vue';
import { Link, Head, usePage } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Vienvenidos" />
    <MasterLayout>
        <div class="min-h-screen">
           <div class="text-blue-500 dark:text-red-500"> hello</div>
            <div @click="themeState = themeState === 'dark' ? 'light' : 'dark'" class="z-50 relative mt-5 text-2xl cursor-pointer">toggle</div>
        </div>
    </MasterLayout>
</template>

<style lang="scss" scoped>

</style>
