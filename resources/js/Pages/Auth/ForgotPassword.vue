<script setup>
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { toast } from 'vue3-toastify'
import { ref } from 'vue';
import ErrorSession from '@/Components/ErrorSession.vue';

const props = defineProps({
    status: {
        type: String,
    },
});

const form = useForm({ email: ''});
const loading = ref(false);

const submit = () => {
    loading.value = true;
    form.post(route('password.email'), {
        onSuccess: () => {
            toast('Hemos enviado un enlace de restablecimiento a tu correo electrónico', {
                theme: "auto",
                type: "success",
                autoClose: false,
                dangerouslyHTMLString: true
            });
        },
        onError: (errors) => {
            toast(errors.email, {
                theme: "auto",
                type: "error",
                dangerouslyHTMLString: true
            });
        },
        onFinish: () => {
            form.reset('email');
            loading.value = false;
        },
    });
};
</script>

<template>
    <Head title="Recuperar contraseña"/>
    <AuthenticationCard>
        <div class="w-full lg:w-[70%] h-auto mx-auto px-5 lg:px-0 py-10 lg:py-0">
            <div class="">
                <ErrorSession />
                <Link :href="route('events.index')" class="inline-block">
                    <div class="size-10 shadow-md rounded-full bg-primary p-2 flex items-center justify-center mb-3">
                        <span class="material-symbols-outlined text-white">arrow_back</span>
                    </div>
                </Link>
                <h2 class="font-bebas text-4xl font-bold lg:text-5xl">Recuperar contraseña</h2>
                <p class="text-gray-600 text-base mt-2">Ingresa tu correo electronico para recibir un enlace de restablecimiento de contraseña.</p>
            </div>

            <div class="mt-5 flex flex-col gap-3">
                <v-form class="mt-5 flex flex-col gap-1">
                    <div>
                        <v-text-field
                            type="email"
                            color="cyan"
                            placeholder="user@gmail.com"
                            label="Correo electronico"
                            autocomplete="email"
                            v-model="form.email"
                            variant="solo"
                            class="!rounded-2xl"
                            :error-messages="form.errors.email"
                        ></v-text-field>
                    </div>
                    <div class="flex lg:flex-col flex-col justify-between">
                        <PrimaryButton @click="submit" heightbtn="!h-[60px] !text-base !w-full md:!w-auto" paddingbtn="!px-10" :loading="loading">
                            <span class="material-symbols-outlined text-2xl !w-1/2">fingerprint</span>Enviar enlace de restablecimiento
                        </PrimaryButton>
                    </div>
                </v-form>
            </div>
        </div>
    </AuthenticationCard>
</template>
