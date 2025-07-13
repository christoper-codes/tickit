<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { drawerPaymentState } from '@/composables/drawersStates';

const props = defineProps({
  initialMinutes: {
    type: Number,
    required: true
  }
});

const minutes = ref(props.initialMinutes);
const seconds = ref(0);

let timer;

const startTimer = () => {
  timer = setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        clearInterval(timer);
      } else {
        minutes.value -= 1;
        seconds.value = 59;
      }
    } else {
      seconds.value -= 1;
    }
  }, 1000);
};

watch(drawerPaymentState, (newValue) => {
  if (newValue) {
    startTimer();
  } else {
    stopTimer();
  }
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
    <p class="text-sm lg:text-lg text-center mb-5">Tiempo de reservacion: <br> <span class="font-bold"> {{ minutes }}:{{ seconds < 10 ? '0' : '' }}{{ seconds }}</span></p>
</template>

<style scoped>

</style>
