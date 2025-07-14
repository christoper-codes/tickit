<script setup>
defineProps({
  heightbtn: { type: String, required: false, default: '!h-[50px]' },
  paddingbtn: { type: String, required: false, default: '!px-7' },
  loading: { type: Boolean, required: false, default: false},
})
</script>

<template>
  <v-btn variant="tonal" :loading="loading" :class="`${heightbtn} ${paddingbtn} !border-b-4 !border-b-neutral-400 !rounded-2xl !bg-neutral-100 !text-neutral-700`">
    <slot></slot>
  </v-btn>
</template>
