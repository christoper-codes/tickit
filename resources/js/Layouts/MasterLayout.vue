<script setup>
import { ref, reactive, watch } from 'vue'
import { themeState } from '@/composables/theme/preference'

</script>

<template>
  <v-app :theme="themeState">
    <div class="relative">
        <svg class="absolute !inset-0 size-full stroke-black/10 dark:stroke-white/15 [mask-image:radial-gradient(100%_150%_at_top_right,white,transparent)]" aria-hidden="true"><defs><pattern id="about-svg" width="100" height="100" x="50%" y="-1" patternUnits="userSpaceOnUse"><path d="M.5 200V.5H200" fill="none" /></pattern></defs><rect width="100%" height="100%" stroke-width="" fill="url(#about-svg)" /></svg>
        <slot/>
    </div>
  </v-app>
</template>
