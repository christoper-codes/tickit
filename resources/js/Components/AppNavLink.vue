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
        ? 'text-none !h-[60px] !rounded !w-full !justify-start !flex !items-center !border-l-4 !border-l-tw-primary !bg-black/5 dark:!bg-white/5'
        : 'text-none !h-[60px] !rounded !w-full !bg-transparent !justify-start !flex !items-center'
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
