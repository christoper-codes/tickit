<script setup>
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import { Head, useForm, Link } from '@inertiajs/vue3';
import { toast } from 'vue3-toastify'
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import { ref } from 'vue';
import ErrorSession from '@/Components/ErrorSession.vue';

const props = defineProps({
    email: {
        type: String,
        required: true,
    },
    token: {
        type: String,
        required: true,
    },
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const loading = ref(false);
const show = ref(false);

const submit = () => {
    loading.value = true;
    form.post(route('password.store'), {
        onSuccess: () => {
            toast("Contraseña Restablecida", {
                theme: "auto",
                type: "success",
                autoClose: false,
                dangerouslyHTMLString: true
            });
        },
        onError: (errors) => {
            console.error(errors);
            toast(errors.password || errors.password_confirmation || errors.email, {
                theme: "auto",
                type: "error",
                dangerouslyHTMLString: true
            });
        },
        onFinish: () => {
            form.reset('password', 'password_confirmation')
            loading.value = false;
        },
    });
};
</script>

<template>
    <Head title="Restablecer contraseña" />
    <AuthenticationCard>
        <div class="w-full lg:w-[70%] h-auto mx-auto px-5 lg:px-0 py-10 lg:py-0 max-w-2xl">
            <div class="">
                <ErrorSession />
                <Link :href="route('events.index')" class="inline-block">
                    <div class="size-10 shadow-md rounded-full bg-tw-primary p-2 flex items-center justify-center mb-3">
                        <span class="material-symbols-outlined text-white">arrow_back</span>
                    </div>
                </Link>
                <h2 class="font-bebas text-4xl font-bold lg:text-5xl">Restablecer contraseña</h2>
                <p class="text-gray-600 text-base mt-2">Ingresa la nueva contraseña para restablecerla.</p>
            </div>

            <div class="mt-5 flex flex-col gap-3">
                <v-form class="mt-5 flex flex-col gap-1">
                    <div class="flex flex-col">
                        <v-text-field
                            id="password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            color="cyan"
                            placeholder="●●●●●●●●"
                            label="Contraseña"
                            autocomplete="new-password"
                            hint="Ingresa tu contraseña nueva"
                            v-model="form.password"
                            variant="solo"
                            class="!rounded-2xl"
                            :error-messages="form.errors.password"
                        ></v-text-field>
                        <v-text-field
                            id="password_confirmation"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                            @click:append="show = !show"
                            color="cyan"
                            placeholder="●●●●●●●●"
                            label="Confirmar contraseña"
                            autocomplete="new-password"
                            hint="Confirma tu contraseña nueva"
                            v-model="form.password_confirmation"
                            variant="solo"
                            class="!rounded-2xl"
                            :error-messages="form.errors.password_confirmation"
                        ></v-text-field>
                    </div>
                    <div class="flex lg:flex-col flex-col justify-between">
                        <PrimaryButton @click="submit" heightbtn="!h-[60px] !text-base !w-full md:!w-auto" paddingbtn="!px-10" :loading="loading" :disabled="form.processing">
                            <span class="material-symbols-outlined text-2xl !w-1/2">fingerprint</span>Restablecer
                        </PrimaryButton>
                    </div>
                </v-form>
            </div>
        </div>
    </AuthenticationCard>
</template>
