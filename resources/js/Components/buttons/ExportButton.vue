<script setup>
    defineProps({
        heightbtn: { type: String, required: false, default: '!h-[50px]' },
        loading: { type: Boolean, required: false, default: false},
        paddingbtn: { type: String, required: false, default: '!px-7' },
        bgbtn: { type: String, required: false, default: '!bg-primary' },
    })
</script>

<template>
  <v-btn
    variant="tonal"
    :loading="loading"
    :class="`${heightbtn} ${paddingbtn} ${bgbtn} !text-white !rounded-2xl !flex !items-center !justify-center !gap-5`"
  >
    <span class="material-symbols-outlined text-xl !w-1/2">file_save</span>
    <slot></slot>
  </v-btn>
</template>
