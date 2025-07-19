<script setup>
import { ref, watch } from 'vue';

const showTostify = ref(false);
const message = ref('Exito en el proceso!');
import { toast } from 'vue3-toastify'

watch(showTostify, (value) => {
    if(value) {
        toast(message.value, {
            "theme": "auto",
            "type": "success",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
    }
    showTostify.value = false;
});
</script>

<template>
    <div v-if="$page.props.flash && $page.props.flash.success" class="z-50 relative">
        <span class="hidden">
            {{ showTostify = true }}
            {{ message = $page.props.flash.success.message }}
        </span>
    </div>
</template>
