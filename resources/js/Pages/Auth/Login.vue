<script setup>
import InputError from '@/Components/InputError.vue';
import { Head, Link, useForm as useFormInertia } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import { useForm, useField } from 'vee-validate'
import { ref } from 'vue';
import { loginSchema } from '@/validation/auth/login-schema';
import ErrorSession from '@/Components/ErrorSession.vue';
import NavigationDrawer from '@/Components/NavigationDrawer.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';

const { handleSubmit } = useForm({validationSchema : loginSchema});
const email = useField('email');
const password = useField('password');
const remember = useField('remember');
const data  = useFormInertia({
    email: '',
    password: '',
    remember: true,
    slug: '',
    id: '',
});

const show = ref(false);
const loading = ref(false);

const submit = handleSubmit((values) => {
    loading.value = true;
    data.email = email.value;
    data.password = password.value;
    data.remember = remember.value;
    data.slug = props.slug;
    data.id = props.id;

    data.post(route('login'), {
        onFinish: () => {
           loading.value = false;
        }
    });
});

const props = defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
    slug: {
        type: String,
    },
    id: {
        type: String,
    },
});
</script>

<template>
    <Head title="Log in"/>
    <AuthenticationCard>
        <div class="w-full h-auto mx-auto px-5 lg:px-0 py-10 lg:py-0 max-w-2xl">
            <div class="">
                <ErrorSession />
                <Link :href="route('welcome')">
                    <div class="size-10 shadow-md rounded-full bg-tw-primary p-2 flex items-center justify-center mb-3">
                        <span class="material-symbols-outlined text-white">arrow_back</span>
                    </div>
                </Link>
                <h2 class="font-bebas text-4xl font-bold lg:text-5xl">Iniciar sesión</h2>
            </div>

            <div class="mt-5 flex flex-col gap-3">
                <v-form class="mt-5 flex flex-col gap-1">
                    <div>
                        <v-text-field
                            color="cyan"
                            type="email"
                            placeholder="user@gmail.com"
                            label="Correo electrónico"
                            autocomplete="email"
                            hint="Ingresa tu correo electrónico"
                            v-model="email.value.value"
                            variant="solo"
                            :error-messages="email.errorMessage.value"
                            class="!rounded-2xl"
                        ></v-text-field>
                        <InputError class="" :message="data.errors.email" />
                    </div>
                    <div>
                        <v-text-field
                        placeholder="●●●●●●●●"
                        label="Contraseña"
                        color="cyan"
                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show ? 'text' : 'password'"
                        hint="Almenos 8 caracteres"
                        name="input-10-1"
                        variant="solo"
                        counter
                        @click:append="show = !show"
                        v-model="password.value.value"
                        :error-messages="password.errorMessage.value"
                    ></v-text-field>
                        <InputError class="" :message="data.errors.password" />
                    </div>

                    <div class="flex lg:flex-col flex-col justify-between">
                        <div class="flex items-center justify-between">
                            <v-switch label="Recordar sesión" v-model="remember.value.value" color="cyan"></v-switch>
                            <Link :href="route('password.request')" class="text-tw-primary underline mb-7">¿Olvidaste tu contraseña?</Link>
                        </div>
                        <PrimaryButton @click="submit" :disabled="data.processing" heightbtn="!h-[60px] !text-base !w-full md:!w-auto" paddingbtn="!px-10" :loading="loading">
                            <span class="material-symbols-outlined text-2xl !w-1/2">fingerprint</span>Iniciar sesión
                        </PrimaryButton>
                        <div class="lg:hidden mt-5">
                            ¿Aún no tienes cuenta?
                            <Link :href="route('register', { slug: slug, id: id})">
                                <span class="text-tw-primary underline">Registrarte ahora</span>
                            </Link>
                        </div>
                    </div>
                    <div v-if="slug && loading" class="flex flex-col items-center justify-center mt-4 animate-pulse">
                        <p class="font-bold text-xs">Preparando las zonas para el evento...</p>
                    </div>
                    <div class="hidden lg:block mt-7">
                        ¿Aún no tienes cuenta?
                        <Link :href="route('register', { slug: slug, id: id})">
                            <span class="text-tw-primary underline">Registrarte ahora</span>
                        </Link>
                    </div>
                </v-form>

            </div>
        </div>
    </AuthenticationCard>
</template>

