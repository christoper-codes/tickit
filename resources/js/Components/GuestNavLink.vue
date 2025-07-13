<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { drawerNavState } from '@/composables/drawersStates';

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
        ? 'text-none !h-[40px] lg:!rounded-none !rounded-full lg:!h-[80px] !w-full !justify-start lg:!justify-center lg:!w-24 !text-white !bg-gradient-to-r !from-purple-600 !to-purple-400'
        : 'text-none !h-[40px] lg:!rounded-none !rounded-full lg:!h-[80px] !w-full !justify-start lg:!justify-center lg:!w-24 !text-gray-600 !bg-transparent'
);

const toggloeDrawerNavState = () => {
    if(window.innerWidth < 700) {
        drawerNavState.value = !drawerNavState.value;
    }
};

</script>

<template>
    <Link :href="href">
        <v-btn variant="text" :class="classes" @click="toggloeDrawerNavState">
            <slot />
        </v-btn>
    </Link>
</template>
