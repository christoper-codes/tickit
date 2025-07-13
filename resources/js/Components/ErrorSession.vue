<script setup>
import { ref, watch } from 'vue';

const showTostify = ref(false);
const message = ref('Fracaso en el proceso!');

watch(showTostify, (value) => {
    if(value) {
        Toastify({
            text: message.value,
            duration: -1,
            className: "toastify-error",
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            onClick: function(){}
        }).showToast();
    }

    showTostify.value = false;
});

</script>

<template>
    <div  v-if="$page.props.flash && $page.props.flash.error" class="text-red-500 my-5">
        <span class="hidden">
            {{ showTostify = true }}
            {{ message = $page.props.flash.error.message }}
        </span>
        <div class="border-t-4 border-danger-primary-500 rounded-lg bg-danger-primary-50 p-4" role="alert" tabindex="-1" aria-labelledby="hs-bordered-red-style-label">
            <div class="flex">
            <div class="shrink-0">
                <!-- Icon -->
                <span class="inline-flex justify-center items-center size-8 rounded-full border-4 border-red-100 bg-red-200 text-red-800">
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
                </span>
                <!-- End Icon -->
            </div>
            <div class="ms-3">
                <h3 id="hs-bordered-red-style-label" class="text-danger-primary-600 font-semibold">
                {{ $page.props.flash.error.message }}
                </h3>
                <ul class="mt-3 list-disc list-inside text-xs">
                <li v-for="(error, index) in $page.props.flash.error.error" :key="index" class="font-normal text-danger-primary-600">
                    <span class="font-semibold">{{ index }}: </span>
                    <span>{{ error }}</span>
                </li>
                </ul>
            </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
