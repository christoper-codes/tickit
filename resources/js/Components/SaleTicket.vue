<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import useDateFormat from '@/composables/dateFormat';
import usePriceFormat from '@/composables/priceFormat';
import QrcodeVue from 'qrcode.vue'
import { computed } from 'vue';

const { dateFormat } = useDateFormat();
const { formatPrice } = usePriceFormat();
const props = defineProps({
    ticket: {
        type: Object,
        required: true,
    },
});
const qrValue = computed(() => {
    return props.ticket.qr;
})
</script>

<template>
      <div class="inline-flex flex-col items-center w-full lg:w-[415px] justify-center bg-center bg-cover text-gray-600">
        <div :class="ticket.purchase_type == 'abonado' ? 'from-yellow-500 to-pink-400' : 'from-primary to-blue-500'" class="bg-gradient-to-r w-full lg:w-[415px] rounded-3xl">
            <div class="flex flex-col">
                <div class="bg-white relative drop-shadow-2xl rounded-3xl p-4 m-4">
                <div class="flex-none sm:flex">
                    <div class="flex-auto justify-evenly">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center my-1">
                            <ApplicationLogo class="w-11 h-auto fill-current" />
                        </div>
                        <button>
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-8 p-1 text-gray-600 rounded-md bg-gray-100" viewBox="0 0 24 24">
                            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                        </svg>
                        </button>
                    </div>
                    <div class="flex flex-col gap-2 items-center justify-center mt-3 mb-5">
                        <h2 class="font-bold text-lg">{{ ticket.event.name }}</h2>
                        <h3 class="text-xs">{{ ticket.season_ticket ? ticket.season_ticket.full_name : '' }}</h3>
                    </div>
                    <div class="flex items-center">
                        <div class="flex flex-col">
                        <div class="flex-auto text-xs text-gray-400 my-1">
                            <div class="text-xs">Estado</div>
                        </div>
                        <div
                        :class="[
                            ticket.purchase_type == 'abonado' ? 'text-yellow-500' : 'text-primary',
                            ticket.is_verified ? '!text-red-500' : '',
                            'my-1 w-full flex-none text-lg font-bold leading-none'
                        ]"
                        >
                        {{ ticket.is_verified ? 'Expiro' : 'Válido' }}
                        </div>
                        <span class="text-xs">Aperturado</span>
                        </div>
                        <div class="flex flex-col mx-auto">

                           <v-btn
                                v-if="!ticket.is_verified"
                                class="!text-green-600 !bg-green-100"
                                icon="mdi-check-bold"
                                variant="tonal"
                                size="large"
                            ></v-btn>
                           <v-btn
                                v-else
                                class="text-red"
                                icon="mdi-close"
                                variant="tonal"
                            ></v-btn>
                        </div>
                        <div class="flex flex-col">
                        <div class="flex-auto text-xs text-gray-400">
                           <div class="text-xs">Tipo</div>
                        </div>
                        <div
                            :class="[
                                ticket.purchase_type == 'abonado' ? 'text-yellow-500' : 'text-primary',
                                ticket.is_verified ? '!text-red-500' : '',
                                'my-1 w-full flex-none text-lg font-bold leading-none'
                            ]"
                            >
                            {{ ticket.purchase_type }}
                        </div>
                        <span class="text-xs">2025 - 2026</span>
                        </div>
                    </div>
                    <div class="border-dashed border-b-[6px] my-1 pt-5">
                        <div :class="ticket.purchase_type == 'abonado' ? 'bg-yellow-500' : 'bg-primary'" class="absolute rounded-full w-5 h-5 -mt-2 -left-2"></div>
                        <div :class="ticket.purchase_type == 'abonado' ? 'bg-pink-400' : 'bg-blue-500'" class="absolute rounded-full w-5 h-5 -mt-2 -right-2"></div>
                    </div>
                    <div class="mt-5 text-sm h-[130px] overflow-y-auto">
                        <div class="w-full">
                        <table class="table-auto w-full text-left whitespace-no-wrap table">
                            <thead>
                            <tr>
                                <th class="px-4 py-2 text-xs">Asiento</th>
                                <th class="px-4 py-2 text-xs">Cantidad</th>
                                <th class="px-4 py-2 text-xs">Subtotal</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="border-y">
                                <td class="px-4 py-2 text-xs">{{ ticket.seat_catalogue.code }}</td>
                                <td class="px-4 py-2 text-xs">1</td>
                                <td class="px-4 py-2 text-xs">{{ formatPrice(ticket.price) }}</td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="flex flex-col mt-5 justify-center text-sm">
                            <h6 class="font-bold text-center">Total: {{ formatPrice(ticket.price) }}</h6>
                        </div>
                        </div>
                    </div>
                    <div class="border-dashed border-b-[6px] my-1 pt-5">
                        <div :class="ticket.purchase_type == 'abonado' ? 'bg-yellow-500' : 'bg-primary'" class="absolute rounded-full w-5 h-5 -mt-2 -left-2"></div>
                        <div :class="ticket.purchase_type == 'abonado' ? 'bg-pink-400' : 'bg-blue-500'" class="absolute rounded-full w-5 h-5 -mt-2 -right-2"></div>
                    </div>
                    <div class="flex items-center px-5 pt-3 text-sm justify-between flex-col gap-2">
                        <div class="text-xs">Fecha del evento</div>
                        <div class="font-bold">{{ dateFormat(ticket.event.start_date) }}</div>
                    </div>
                    <div class="flex flex-col pt-5 pb-3 justify-center items-center text-sm">
                        <qrcode-vue
                            :value="qrValue"
                            :size="100"
                            :level="'L'"
                            :render-as="'svg'"
                            :background="'#ffffff'"
                            :foreground="'#000000'"
                        />

                        <a href="/terminos-y-condiciones" target="_blank" class="mt-3 text-xs"><span class="underline">Términos y condiciones</span></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
