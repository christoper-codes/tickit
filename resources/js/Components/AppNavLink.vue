<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { draweAppNavState } from '@/composables/drawersStates';

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
    },
});

const classes = computed(() =>
    props.active
        ? 'text-none !h-[50px] !rounded-2xl !w-full !bg-gradient-to-r !from-primary !to-cyan-500 !text-white !justify-start !flex !items-center'
        : 'text-none !h-[50px] !rounded-2xl !w-full !bg-transparent !justify-start !flex !items-center'
);

const toggledraweAppNavState = () => {
    if(window.innerWidth < 700) {
        draweAppNavState.value = !draweAppNavState.value;
    }
}

</script>

<template>
    <Link :href="href">
        <v-btn variant="text" :class="classes" @click="toggledraweAppNavState">
            <slot />
        </v-btn>
    </Link>
</template>
