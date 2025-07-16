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

const stopTimer = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const resetTimer = () => {
  stopTimer();
  minutes.value = props.initialMinutes;
  seconds.value = 0;
};

watch(drawerPaymentState, (newValue) => {
  if (newValue) {
    resetTimer();
    startTimer();
  } else {
    stopTimer();
  }
});

onUnmounted(() => {
  stopTimer();
});
</script>

<template>
    <p class="text-sm lg:text-lg text-center mb-5">Tiempo de reservacion: <br> <span class="font-bold"> {{ minutes }}:{{ seconds < 10 ? '0' : '' }}{{ seconds }}</span></p>
</template>

<style scoped>

</style>
