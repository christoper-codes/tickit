<script setup>
defineProps({
  heightbtn: { type: String, required: false, default: '!h-[50px]' },
  loading: { type: Boolean, required: false, default: false},
  paddingbtn: { type: String, required: false, default: '!px-7' },
})
</script>

<template>
  <v-btn
    variant="tonal"
    :loading="loading"
    :class="`${heightbtn} ${paddingbtn} !bg-primary !text-white !rounded-2xl`"
  >
    <slot></slot>
  </v-btn>
</template>
