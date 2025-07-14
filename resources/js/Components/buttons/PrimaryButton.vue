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
    :class="`${heightbtn} ${paddingbtn} !bg-tw-primary !border-b-4 !border-b-tw-primary-dark !overflow-hidden !text-white !rounded-2xl !relative before:!content-[''] before:!w-10 before:!h-10 before:!bg-white/25 before:!absolute before:!rounded-full before:!-bottom-[13px] before:!-right-[13px]`"
  >
    <slot></slot>
  </v-btn>
</template>
