<script setup>
import { Head, Link, useForm as useFormInertia, usePage } from '@inertiajs/vue3';
import Footer from '@/Components/Footer.vue';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import EstadioHdx from '@/Components/SectionsHdx/EstadioHdx.vue';
import ZonaA from '@/Components/SectionsHdx/ZonaA.vue';
import ZonaC from '@/Components/SectionsHdx/ZonaC.vue';
import ZonaF from '@/Components/SectionsHdx/ZonaF.vue';
import usePriceFormat from '@/composables/priceFormat';
import PaymentDrawer from '@/Components/PaymentDrawer.vue';
import useUserPolicy from '@/composables/UserPolicy';
import panzoom from 'panzoom';
import { drawerPaymentState } from '@/composables/drawersStates';
import useDateFormat from '@/composables/dateFormat';
import useTicketOfficeState from '@/composables/TicketOfficeState';
import { useField, useForm } from 'vee-validate';
import axios from 'axios';
import { toast } from 'vue3-toastify'
import ZonaB from '@/Components/SectionsHdx/ZonaB.vue';
import ZonaE from '@/Components/SectionsHdx/ZonaE.vue';
import ZonaH from '@/Components/SectionsHdx/ZonaH.vue';
import useStringFormat from '@/composables/stringFormat';
import GuestNav from '@/Components/navs/GuestNav.vue';
import AppNav from '@/Components/navs/AppNav.vue';
import CashRegisterNav from '@/Components/navs/CashRegisterNav.vue';
import PrimaryButton from '@/Components/buttons/PrimaryButton.vue';
import MasterLayout from '@/Layouts/MasterLayout.vue';
import SecondaryButton from '@/Components/buttons/SecondaryButton.vue';

const { dateFormat } = useDateFormat();
const { formatFirstLetterUppercase } = useStringFormat();
const tab = ref('seats');

const { cashRegisterDataId, sellerUserId, ticketOfficeId } = useTicketOfficeState();
const snackbar = ref(false);

const paymentFileds = {
    'total': useField('total'),
    'amount_received': useField('amount_received', 0),
    'amount_returned': useField('amount_returned', 0),
}

const acceptTerms = ref(false);
const totalAmount = ref(0);
const amountReceived = ref(0);
const amountReturned = ref(0);

const showImageModal = ref(false);
const modalImageSrc = ref('');

const openImageModal = (src) => {
    modalImageSrc.value = src;
    showImageModal.value = true;
}
const closeImageModal = () => {
    showImageModal.value = false;
    modalImageSrc.value = '';
}

/*
* |--------------------------------------
* | declare properties
*/
const { formatPrice } = usePriceFormat();
const { viewVendorTopics } = useUserPolicy();
let panZoomInstance;
const paymentSection = ref(null);
const scrollTopaymentSection = () => {
    tab.value = 'payment';
    setTimeout(() => {
        paymentSection.value.scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

function loadSvg(id) {
    setTimeout(() => {
        const zoneId = document.querySelector(`#${id}`);
        if (zoneId) {
            panZoomInstance = panzoom(zoneId);
            if(id != 'zones_hdx') {

                const { x, y } = getCenterCoordinates(id);
                if(window.innerWidth > 1024) {
                    panZoomInstance.smoothZoom(x, y, 2);
                }else {
                    panZoomInstance.smoothZoom(x, y, 5);
                }

            }
            if(window.innerWidth > 1024 && id == 'zones_hdx') {
                panZoomInstance.smoothZoom(1300, 300, 0.9);
            } else if(window.innerWidth <= 1024 && id == 'zones_hdx') {
                panZoomInstance.smoothZoom(100, 350, 1.7);
            }
        }
    },300);
}

const getCenterCoordinates = (id) => {
  const svgElement = document.querySelector(`#${id}`);
  const { width, height } = svgElement.getBoundingClientRect();
  if(window.innerWidth > 1024) {
        return { x: width / -7, y: height / 2.5 };
    }else {
        return { x: width / -23, y: height / 2.05 };
    }
};

const zoomIn = () => {
  if (panZoomInstance) {
    panZoomInstance.smoothZoom(0, 0, 1.2);
  }
};

const resetZoom = () => {
  if (panZoomInstance) {
    panZoomInstance.moveTo(0, 0);
    panZoomInstance.zoomAbs(0, 0, 1);
  }
};

const zoomOut = () => {
  if (panZoomInstance) {
    panZoomInstance.smoothZoom(0, 0, 0.8);
  }
};

/*
* Handle POS section
*/
const seatsSelected = ref([]);
/* const paymentFileds.total value.= ref(0); */

function priceFinal(seat, priceTypeName) {
    return seat.price_types.reduce((acc, priceType) => {
        if(priceType.name === priceTypeName){
            return acc + parseFloat(priceType.pivot.price);
        }

        return acc;
    }, 0);
}

const originalSeatsSelected = ref([]);

const addSeat = (seat) => {
    if(selectedPromotion.value){
        toast('Una vez selecionada una promoción ya no es posible agregar mas asientos a la compra.', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }
    if(selectedAgreementPromotion.value){
        toast('Una vez selecionada una promoción ya no es posible agregar mas asientos a la compra.', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }

    if(purchaseStatus.value == 'final' || purchaseStatus.value == 'retry') {
        purchaseStatus.value = 'retry';
        return;
    }
    const seatExist = seatsSelected.value.find((s) => s.seat_catalogue.code === seat.seat_catalogue.code);
    priceTypeId.value = seat.price_types[0].id;
    const priceFinalType = paymentTypesSelected.value.some(type => type.name == 'cortesia') ? 'cortesia' : 'regular';
   if(paymentTypesSelected.value.length == 0) {
        paymentTypesSelected.value.push(props.global_payment_types.find((item) => item.name === 'tarjeta'));
    }
    if (!seatExist) {
        seat.quantity = 1;
        seat.final_price = priceFinal(seat, priceFinalType);
        seat.holder_name = '';
        seat.holder_last_name = '';
        seat.holder_middle_name = '';
        seat.is_owner = 'No';
        seat.description = '';
        seat.holder_jersey_type = null;
        seat.holder_jersey_size = null;
        seat.holder_zip_code = '';
        seat.holder_phone = '';
        seat.holder_email = '';
        seat.is_promotion = false;
        seat.promotion_id = '';
        seat.is_gift = false;
        seat.user_id = viewVendorTopics(props.user_roles) ? null : props.user.id;
        seat.global_season_id = props.event.global_season_id;
        seat.serie_id = props.event.serie_id;
        seatsSelected.value.push(seat);
        originalSeatsSelected.value.push(seat);

        snackbar.value = true;
        const regularPrice = priceFinal(seat, priceFinalType);
        totalAmount.value = (parseFloat(totalAmount.value || 0) + parseFloat(regularPrice));
    } else {
        seatsSelected.value = seatsSelected.value.filter((s) => s.seat_catalogue.code !== seat.seat_catalogue.code);
        originalSeatsSelected.value = originalSeatsSelected.value.filter((s) => s.seat_catalogue.code !== seat.seat_catalogue.code);
        if(seatsSelected.value.length == 0) {
            snackbar.value = false;
        }
        const regularPrice = priceFinal(seat, priceFinalType);
        totalAmount.value = (parseFloat(totalAmount.value || 0) - parseFloat(regularPrice));
    }

    amountToPayCash.value = totalAmount.value;
    amountToPayCard.value = totalAmount.value;
    updateTotal();
}


const getHolderInfo = (field) => {
  const ownerSeat = seatsSelected.value.find(item => item.is_owner === "Si");
  return ownerSeat ? ownerSeat[field] : "No disponible";
};

/*
* handle global payment types
*/
const globalPaymentTypes = ref([]);
const purchaseOnline = ref(true);
const priceTypeId = ref(1);

const panel = ref([0,1]);
const paymentTypesSelected = ref([]); //

const filteredPaymentTypes = computed(() => {
    if (paymentTypesSelected.value.some(type => type.name === 'cortesia')) {
        const newPaymentTypesSelected = paymentTypesSelected.value.filter(type => type.name === 'cortesia');
        paymentTypesSelected.value = newPaymentTypesSelected;
        return paymentTypesSelected.value;
    }
    if (paymentTypesSelected.value.some(type => type.name === 'plazos')) {
        const newPaymentTypesSelected = paymentTypesSelected.value.filter(type => type.name === 'plazos');
        paymentTypesSelected.value = newPaymentTypesSelected;
        return paymentTypesSelected.value;
    }

    return paymentTypesSelected.value;
});

const paymentInInstallments = () => {
    if(installmentSale.value == false){
        paymentTypesSelected.value = props.global_payment_types.filter(item => item.name === 'plazos');
        installmentSale.value = true;
    } else {
        paymentTypesSelected.value = [];
        paymentTypesSelected.value.push(props.global_payment_types.find((item) => item.name === 'tarjeta'));
        installmentSale.value = false;
    }
}

watch(filteredPaymentTypes, updateTotal);

/*
* handle promotions
*/
const promotionTypes = ref([]);
const promotionTypesCo = ref([]);
const selectedPromotion = ref(null);
const selectedAgreementPromotion = ref(null);
const seatsSelectedCopy = ref([]);
const showPromotionToast = ref(false);
const finalPromotion = ref({id: null, quantity:null});

watch(promotionTypes, () => {
    promotionTypesCo.value = []
    promotionTypes.value.forEach(promotionType => {

        if (viewVendorTopics(props.user_roles) &&  (promotionType.availability_sale == 1 || promotionType.availability_sale == 3)) {
            promotionTypesCo.value.push(promotionType);
        }

        if(!viewVendorTopics(props.user_roles) &&  (promotionType.availability_sale == 2 || promotionType.availability_sale == 3)){
            promotionTypesCo.value.push(promotionType);
        }
    });


    if(!showPromotionToast.value){
        promotionTypesCo.value.forEach(promotionType => {
            if(promotionType.quantity > promotionType.generic_seats_allowed || promotionType.percent_allow > 0){
                showPromotionToast.value = true;
                toast('Tienes promociones que puedes aplicar!!', {
                    "theme": "auto",
                    "type": "deafult",
                    "dangerouslyHTMLString": true
                })
            }
        });
    }
});

watch(selectedPromotion, () => {

    finalPromotion.value = {};
    seatsSelected.value = JSON.parse(JSON.stringify(seatsSelectedCopy.value));
    finalPromotion.value.id = selectedPromotion.value.id;
    finalPromotion.value.quantity = 0;

    if(selectedPromotion.value.type == 'descuento_por_compra_multiple') {
        let seatsTopay = selectedPromotion.value.generic_seats_allowed;
        let seatsToGift = selectedPromotion.value.promotional_seats_allowed;
        let applicableIndex = 0;

        seatsSelected.value.forEach((seat) => {
            const promotion = seat.promotions.find((promo) => promo.name === selectedPromotion.value.name);

            if (promotion) {
                if(seat.final_price == selectedPromotion.value.final_price){

                    if(applicableIndex % (seatsTopay + seatsToGift) < seatsTopay){
                        seat.is_promotion = false;
                    } else {
                        finalPromotion.value.quantity++;
                        seat.is_promotion = true;
                        seat.promotion_id = selectedPromotion.value.id;
                        seat.is_gift = true;
                        seat.price_types.forEach(priceType => {

                            if(priceType.name == 'regular'){
                                priceType.pivot.price = parseFloat(0);

                            }else if(priceType.name == 'abonado'){
                                priceType.pivot.price = parseFloat(0);
                            }
                        })
                    }
                    applicableIndex++;
                }
            }
        });

    } else if(selectedPromotion.value.type == 'descuento_por_porcentaje_por_boleto'){
        seatsSelected.value.forEach((seat) => {
            const promotion = seat.promotions.find((promo) => promo.name === selectedPromotion.value.name);

            if (promotion) {

                seat.price_types.forEach(priceType => {
                    if(seat.final_price == selectedPromotion.value.final_price){
                        finalPromotion.value.quantity++;
                        seat.promotion_id = selectedPromotion.value.id;

                        if(priceType.name == 'regular'){
                            const discount = priceType.pivot.price * (selectedPromotion.value.percent_allow / 100);
                            priceType.pivot.price = priceType.pivot.price - discount;

                        }else if(priceType.name == 'abonado'){
                            const discount = priceType.pivot.price * (selectedPromotion.value.percent_allow / 100);
                            priceType.pivot.price = priceType.pivot.price - discount;
                        }
                    }
                })
            }
        });
    }

    updateTotal();

    toast('La promoción ha sido aplicada', {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
    })

});

watch(selectedAgreementPromotion, () => {
    finalPromotion.value = {};
    seatsSelected.value = JSON.parse(JSON.stringify(seatsSelectedCopy.value));
    finalPromotion.value.id = selectedAgreementPromotion.value.id;
    finalPromotion.value.quantity = 0;

    const promoType = selectedAgreementPromotion.value.promotion_type.name;


    if(selectedAgreementPromotion.value.promotion_type.name == 'descuento_por_compra_multiple') {
        let seatsTopay = selectedAgreementPromotion.value.generic_seats_allowed;
        let seatsToGift = selectedAgreementPromotion.value.promotional_seats_allowed;
        let applicableIndex = 0;

        seatsSelected.value.forEach((seat) => {

            if(applicableIndex % (seatsTopay + seatsToGift) < seatsTopay){
                seat.is_promotion = false;
            } else {
                finalPromotion.value.quantity++;
                seat.is_promotion = true;
                seat.promotion_id = selectedAgreementPromotion.value.id;
                seat.agreement_promotion_id = selectedAgreementPromotion.value.pivot.id;
                seat.is_gift = true;
                seat.price_types.forEach(priceType => {
                    if(priceType.name == 'regular'){
                        priceType.pivot.price = parseFloat(0);
                    }
                })
            }
            applicableIndex++;
        });
    } else if (promoType === 'descuento_por_porcentaje_por_boleto') {
            seatsSelected.value.forEach((seat) => {
                const promotion = selectedAgreementPromotion.value;
                if (promotion) {
                    seat.price_types.forEach((priceType) => {
                        seat.promotion_id = selectedAgreementPromotion.value.pivot.promotion_id;
                        seat.agreement_promotion_id = selectedAgreementPromotion.value.pivot.id;
                        if (priceType.name === 'regular') {
                            finalPromotion.value.quantity++;
                            const discount =
                                priceType.pivot.price *
                                (selectedAgreementPromotion.value.percent_allow / 100);
                            priceType.pivot.price = priceType.pivot.price - discount;
                        }
                    });
                }
            });
        }else if(selectedAgreementPromotion.value.promotion_type.name == 'descuento_por_porcentaje_por_compra'){
            seatsSelected.value.forEach((seat) => {
                seat.price_types.forEach(priceType => {
                    seat.promotion_id = selectedAgreementPromotion.value.id;
                    seat.agreement_promotion_id = selectedAgreementPromotion.value.pivot.id;
                    if(priceType.name == 'regular'){
                        finalPromotion.value.quantity++;
                        const discount = priceType.pivot.price * (selectedAgreementPromotion.value.percent_allow / 100);
                        priceType.pivot.price = priceType.pivot.price - discount;
                    }

                })
            });
        }

    updateTotal();

    toast('El convenio ha sido aplicado', {
        theme: 'auto',
        type: 'success',
        dangerouslyHTMLString: true,
    });
});

function updateTotal() {

    amountReceived.value = 0;
    amountReturned.value = 0;
    if (paymentTypesSelected.value.length >= 2) {
        amountReceivedCash.value = 0;
        amountToPayCash.value = 0;
        amountToPayCard.value = 0;
    }
    totalAmount.value = 0;
    // Usamos un set para asegurar que cada asiento se procese una sola vez.
    const processedSeats = new Set();

    filteredPaymentTypes.value.forEach(paymentType => {
        seatsSelected.value.forEach((seat) => {
            if (!processedSeats.has(seat.seat_catalogue.code)) {
                let price;
                if (paymentType.name === 'cortesia') {
                    price = priceFinal(seat, 'cortesia');
                } else if(purchaseType.value == 'abonado'){
                    price = priceFinal(seat, 'abonado');
                } else {
                    price = priceFinal(seat, 'regular');
                }
                seat.final_price = price;
                totalAmount.value = (parseFloat(totalAmount.value || 0) + parseFloat(price));
                processedSeats.add(seat.seat_catalogue.code);
            }
        });
    });

    if (purchaseType.value === 'serie') {
        totalAmount.value = totalAmount.value * 2;
    }

    if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta')) {
        amountToPayCash.value = 0;
        amountReceived.value = totalAmount.value;
        amountReceivedCash.value = 0;
    } else if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')){
        amountToPayCard.value = 0;
    }

    if(!selectedPromotion.value && !selectedAgreementPromotion.value){
        seatsSelectedCopy.value = JSON.parse(JSON.stringify(seatsSelected.value));
    }

    promotionTypes.value = [];

    seatsSelectedCopy.value.forEach(seat => {
        if(seat.promotions.length > 0) {
            seat.promotions.forEach(promotion => {
                const actualPromotionExist = promotionTypes.value.find(promo => promo.name === promotion.name && promo.final_price === seat.final_price);
                if(actualPromotionExist) {
                    promotionTypes.value.forEach(promotionType => {
                        if (promotionType.name === promotion.name && promotionType.final_price === seat.final_price) {
                            promotionType.quantity++;
                        }
                    });
                } else {
                    promotionTypes.value.push({
                        'id': promotion.id,
                        'name': promotion.name,
                        'type': promotion.promotion_type.name,
                        'quantity': 1,
                        'final_price': seat.final_price,
                        'description': promotion.description,
                        'generic_seats_allowed': promotion.generic_seats_allowed,
                        'maximun_promotions_allowed': promotion.maximun_promotions_allowed,
                        'promotional_seats_allowed': promotion.promotional_seats_allowed,
                        'percent_allow': promotion.percent_allow,
                        'availability_sale': promotion.availability_sale
                    });
                }
            });
        }
    });

    if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta')) {
        amountToPayCard.value = totalAmount.value;
    }

    /*
    * reason agreement section
    */
    if(paymentTypesSelected.value.some(type => type.name != 'cortesia')){
        reasonAgreementSelected.value = null;
        reasonAgreementDescription.value = null;
        agreementSection.value = {};
    }

}

const globalPayementTypeProps = (item) => {
  return {
    title: item.name,
    subtitle: item.description,
  };
};

const reasonAgreementsProps = (item) => {
    return {
        title: item.name,
        subtitle: item.description,
    }
}

const institutionsProps = (item) => {
    return {
        title: item.name,
        subtitle: item.description,
    }
}

const institutionAgreementsProps = (item) => {
    return {
        title: item.name,
        subtitle: item.description,
    }
}

const globalCardPayementTypeProps = (item) => {
  return {
    title: item.name,
    subtitle: item.description,
  };
};

const isSvgVisible = ref(true);
const selectedSection = ref('');
const viewSelectedSection = ref('Todas las Zonas');
const seatsASection = ref([]);
const seatsBSection = ref([]);
const seatsCSection = ref([]);
const seatsESection = ref([]);
const seatsFSection = ref([]);
const seatsHSection = ref([]);
const loadingSectionDialog = ref(false);
const seatAvailability = ref([]);

const handleSectionClick = (section) => {
    const actualSection = section.split('');

    const data = {
        zone: actualSection[actualSection.length -1],
        event_id: props.event.id
    }

    loadingSectionDialog.value = true;

    axios.post(route('event.get.seat-catalogues'), data)
        .then(success => {
            loadingSectionDialog.value = false;
            selectedSection.value = section;
            isSvgVisible.value = false;

            if(section == 'zonaC'){
                seatsCSection.value = success.data.data;
                loadSvg('zonaC');
                viewSelectedSection.value = 'Zona Principal';
                const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
                const stadiumHdxText = document.querySelector('#stadium-hdx-text');
                stadiumHdxImg.classList.remove('rotate-0');
                stadiumHdxImg.classList.add('rotate-90');
                stadiumHdxText.classList.remove('rotate-0');
                stadiumHdxText.classList.add('-rotate-90');
            }
            if(section == 'zonaA'){
                seatsASection.value = success.data.data;
                loadSvg('zonaA');
                viewSelectedSection.value = 'Zona A';
                const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
                stadiumHdxImg.classList.remove('rotate-0');
                stadiumHdxImg.classList.add('rotate-90');
            }
            if(section == 'zonaB'){
                seatsBSection.value = success.data.data;
                loadSvg('zonaB');
                viewSelectedSection.value = 'Zona B';
                const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
                stadiumHdxImg.classList.remove('rotate-0');
                stadiumHdxImg.classList.add('rotate-90');
            }
            if(section == 'zonaE'){
                seatsESection.value = success.data.data;
                loadSvg('zonaE');
                viewSelectedSection.value = 'Zona E';
                const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
                stadiumHdxImg.classList.remove('rotate-0');
                stadiumHdxImg.classList.add('rotate-90');
            }
            if(section == 'zonaF'){
                seatsFSection.value = success.data.data;
                loadSvg('zonaF');
                viewSelectedSection.value = 'Zona F';
                const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
                stadiumHdxImg.classList.remove('rotate-0');
                stadiumHdxImg.classList.add('rotate-90');
            }
            if(section == 'zonaH'){
                seatsHSection.value = success.data.data;
                loadSvg('zonaH');
                viewSelectedSection.value = 'Zona H';
                const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
                stadiumHdxImg.classList.remove('rotate-0');
                stadiumHdxImg.classList.add('rotate-90');
            }
        })
        .catch(error => {
            console.log(error)
        })

    return

};

const selectZones = () => {
    loadSvg('zones_hdx');
    showButtonPayment.value = false;
    isSvgVisible.value = true;
    selectedSection.value = '';
    totalAmount.value = 0;
    amountReceived.value = 0;
    amountReturned.value = 0;
    amountReceivedCash.value = 0;
    amountToPayCard.value = 0;
    amountToPayCash.value = 0;
    paymentTypesSelected.value = [];
    cardPaymentTypesSelected.value = 0;
    reasonAgreementSelected.value = null;
    institutionSelected.value = null;
    agreementsByInstitutionSelected.value = null;
    agreementSelected.value = null;
    reasonAgreementDescription.value = null;
    agreementSection.value = {};
    valid.value = true;
    purchaseStatus.value = 'process';
    viewSelectedSection.value = 'Todas las Zonas';
    purchaseType.value = props.event.enabled_for_season_tickets ? 'abonado' : 'partido';
    loadingg.value = false;
    loading.value = false;
    userToTransfer.value = null;
    saleDeptorSelected.value = null;
    installmentSale.value = false;
    firstNameSaleDeptor.value = '';
    lastNameSaleDeptor.value = '';
    phoneSaleDeptor.value = '';
    saleDebtorData.value = {};
    seatsSelected.value = [];
    const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
    stadiumHdxImg.classList.remove('rotate-90');
    stadiumHdxImg.classList.add('rotate-0');
    const stadiumHdxText = document.querySelector('#stadium-hdx-text');
    stadiumHdxText.classList.remove('-rotate-90');
    stadiumHdxText.classList.add('rotate-0');
    selectedPromotion.value = null;
    selectedAgreementPromotion.value = null;
    seatsSelectedCopy.value = [];
    showPromotionToast.value = false;
    paymentInstallmentSelected.value = null;
    tab.value = 'payment'
    setTimeout(() => tab.value = 'seats', 500);
    tab.value = 'seats';
    acceptTerms.value = viewVendorTopics(props.user_roles);
    originalSeatsSelected.value = [];
};

/*
* declare props
*/
const props = defineProps({
    isEventsShow: {
        type: Boolean,
        required: false,
    },
    event: {
        type: Object,
        required: true,
    },
    a_zone: {
        type: Array,
        required: true,
    },
    b_zone: {
        type: Array,
        required: true,
    },
    c_zone: {
        type: Array,
        required: true,
    },
    f_zone: {
        type: Array,
        required: true,
    },
    user: {
        type: Object,
        required: true,
    },
    user_roles: {
        type: Array,
        required: false,
    },
    global_payment_types: {
        type: Array,
        required: true,
    },
    global_card_payment_types: {
        type: Array,
        required: true,
    },
    purchase_types: {
        type: Array,
        required: true,
    },
    payment_installments: {
        type: Object,
        required: false
    },
    reason_agreements: {
        type: Array,
        required: false
    },
    institutions: {
        type: Array,
        required: false
    },
    sale_debtors: {
        type: Array,
        required: false
    },
});

const sale_debtors_list = [];
const userToTransfer = ref(null);
const saleDeptorSelected = ref(null);
const purchaseType = props.event.enabled_for_season_tickets ? ref('abonado') : ref('partido');

if(viewVendorTopics(props.user_roles)) {
    purchaseOnline.value = false;
}

props.sale_debtors.forEach(element => {
    sale_debtors_list.push(
        {
            name: `${element['first_name']} ${element['last_name']} (${element['phone_number']})`,
            value: element['id']
        }
    )
});


/*
* |--------------------------------------
* | declare OnMounted
*/
onMounted(() => {
    nextTick(() => {
        loadSvg('zones_hdx');
    });

    const sellerDialog = document.getElementById('seller-dialog');
    if(viewVendorTopics(props.user_roles)) {
        if(sellerUserId.value != props.user.id) {
            sellerDialog.click();
        }
    }
    getSeatAvailability();
    globalPaymentTypesOnlyCard.value = props.global_payment_types.filter(item => item.name === 'tarjeta');
    acceptTerms.value = viewVendorTopics(props.user_roles);
});

const getSeatAvailability = () => {
    seatAvailability.value = [];
    const data = {event_id: props.event.id};
    axios.get(route('events.availability'), { params: data })
        .then(response => {
            seatAvailability.value = response.data.data;
        })
        .catch(error => {
            console.log(error)
        })
}

/*
* |--------------------------------------
* | Reserve selected seats and complete purchase
*/

const loading = ref(false);
const form = ref(false);
const loadingg = ref(false);
const valid = ref(true);
const error = ref('');
const amountToPayCard = ref(0);
const cardPaymentTypesSelected = ref(0);
const reasonAgreementSelected = ref(null);
const reasonAgreementDescription = ref(null);
const agreementSection = ref({});
const institutionSelected = ref(null);
const agreementsByInstitutionSelected = ref(null);
const agreementSelected = ref(null);
const amountToPayCash = ref(0);
const amountReceivedCash = ref(0);
const purchaseStatus = ref('process');
const originalTotalAmount = ref(0);
const totalAttempts = ref(0);
const memberUserId = ref(1);

/*
* installment sale module
*/
const installmentSale = ref(false);
const firstNameSaleDeptor = ref('');
const lastNameSaleDeptor = ref('');
const phoneSaleDeptor = ref('');
const saleDebtorData = ref({});

watch(() => institutionSelected.value, () => {
    agreementsByInstitutionSelected.value = null;
    agreementSelected.value = null;
    selectedAgreementPromotion.value = null;
    if(institutionSelected.value){
        agreementsByInstitutionSelected.value = institutionSelected.value.agreements;
    }
});

watch(() => amountReceived.value, (newValue) => {
    if(!installmentSale.value){
        amountReturned.value = parseFloat(amountReceived.value) - parseFloat(totalAmount.value)
    }else{
        if(amountReceived.value == 0){
            amountReturned.value = 0;

        }else{
            if( paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')){
                amountReturned.value = parseFloat(amountReceived.value) - parseFloat(amountToPayCash.value);
            }else if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta')){
                amountReturned.value = parseFloat(amountReceived.value) - parseFloat(amountToPayCard.value);
            } else {
                amountReturned.value = parseFloat(totalAmount.value) - parseFloat(amountReceived.value);
            }
        }
    }
});

watch(() => amountToPayCard.value, (newValue) => {
     amountReceived.value = parseFloat(amountToPayCard.value) + parseFloat(amountReceivedCash.value);
});

watch(() => amountToPayCash.value, (newValue) => {
     if(installmentSale.value){
        if( paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')){
            amountReturned.value = parseFloat(amountReceived.value) - parseFloat(amountToPayCash.value);
        }
    } else {
        amountReturned.value = parseFloat(amountReceived.value) - parseFloat(totalAmount.value);
    }
});

watch(() => amountReceivedCash.value, (newValue) => {
     amountReceived.value = parseFloat(amountToPayCard.value) + parseFloat(amountReceivedCash.value);
});

watch(() => purchaseType.value, (newValue) => {

    if(newValue == 'abonado' && selectedPromotion.value) {
        toast('Una vez seleccionada una promoción no sera posible la compra de abonos', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return
    }
    purchaseStatus.value = 'final';
    if(totalAttempts.value == 0) {
        originalTotalAmount.value = totalAmount.value;
        totalAttempts.value = 1;
    }
    if(newValue == 'serie') {
        totalAmount.value = totalAmount.value * 2;
    } else if(newValue == 'partido') {
        totalAmount.value = originalTotalAmount.value;
    }
    if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta')) {
        amountToPayCard.value = totalAmount.value;
    }
    if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')) {
        amountToPayCash.value = totalAmount.value;
    }
});

watch(() => installmentSale.value, () => {
    if(!installmentSale.value){
        saleDeptorSelected.value = null;
        firstNameSaleDeptor.value = '';
        lastNameSaleDeptor.value = '';
        phoneSaleDeptor.value = '';
    }else{
        if(amountReceived.value == 0){
            amountReturned.value = 0;
        }else{
            if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')){
                amountReturned.value = parseFloat(amountReceived.value) - parseFloat(amountReceivedCash.value);
            }else {
                amountReturned.value = parseFloat(totalAmount.value) - parseFloat(amountReceived.value);
            }
        }
        saleDeptorSelected.value = 1;

        if(purchaseType.value == 'abonado'){
            const owner = seatsSelected.value.find(seat => seat.is_owner == 'Si');
            firstNameSaleDeptor.value = owner.holder_name;
            lastNameSaleDeptor.value = owner.holder_last_name;
            phoneSaleDeptor.value = owner.holder_phone;
        } else {
            amountToPayCard.value = 0;
            amountToPayCash.value = 0;
        }

        if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta')) {
            amountReturned.value = 0;
        }
        if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')) {
            if(amountReceivedCash.value){
                amountReceived.value = parseFloat(amountToPayCard.value) + parseFloat(amountReceivedCash.value);
                amountReturned.value = parseFloat(amountReceived.value) - parseFloat(amountToPayCash.value);
            }
        }
    }
});


const onSubmit = () => {

    if(installmentSale.value){

        if(saleDeptorSelected.value ){
            if(saleDeptorSelected.value == 1){
                if(!firstNameSaleDeptor.value || !lastNameSaleDeptor.value || !phoneSaleDeptor.value){
                    valid.value = false;
                    error.value = 'Debe de seleccionar un deudor para la venta a crédito o llenar los campos de nombre, apellido y teléfono';
                    return;
                }
            }
        } else{
            valid.value = false;
            error.value = 'Debe de seleccionar un deudor para la venta a crédito';
            return;
        }
        if(paymentTypesSelected.value.some(type => type.name === 'cortesia')){
            valid.value = false;
            error.value = 'No se puede realizar una venta a crédito con cortesía';
            return;
        }
        if(paymentTypesSelected.value.length > 1){
            valid.value = false;
            error.value = 'Por el momento no se puede realizar una venta a crédito con mas de un tipo de pago';
            return;
        }
        form.value = true;
    }



    if(!form.value) return

    if(paymentTypesSelected.value.length == 0) {
        valid.value = false;
        error.value = 'Debe seleccionar al menos un tipo de pago';
        return;
    }

    if(viewVendorTopics(props.user_roles)) {
        purchaseOnline.value = false;
        if(sellerUserId.value != props.user.id) {
            valid.value = false;
            error.value = 'El vendedor seleccionado no coincide con el usuario logueado, por favor abra una caja. ';
            return;
        }
    }

    if(purchaseType.value == 'abonado' && !seasonTicktesData.value){
        valid.value = false;
        error.value = 'Los datos de los abonado deben ser confirmados';
        toast('Los datos de los abonado deben ser confirmados', {
            "theme": "auto",
            "type": "info",
            "dangerouslyHTMLString": true
        })
        seasonTicketsDialogOpen();
        return;
    }

    if(paymentTypesSelected.value.some(type => type.name === 'efectivo' )){
        //validar que el monto recibido para efectivo sea igual o mayor al monto a pagar para efectivo
        if(parseFloat(amountReceivedCash.value) < parseFloat(amountToPayCash.value) && !installmentSale.value) {
            valid.value = false;
            error.value = 'El monto recibido en efectivo debe ser igual o mayor al monto a pagar en efectivo';
            return;
        }
    }

    if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta') && !installmentSale.value) {
        amountToPayCard.value = totalAmount.value;
    }

    if(paymentTypesSelected.value.some(type => type.name === 'tarjeta') && installmentSale.value){
        if(!cardPaymentTypesSelected.value){
            valid.value = false;
            error.value = 'Debe seleccionar un tipo de tarjeta para la venta a crédito';
            return;
        }
    }

    globalPaymentTypes.value = paymentTypesSelected.value.map((item) => {
        if(item.name === 'tarjeta') {
            return {
                id: item.id,
                global_card_payment_type_id: cardPaymentTypesSelected.value.id,
                amount: amountToPayCard.value,
                name: item.name,
            }
        }
        if(item.name === 'efectivo') {
            return {
                id: item.id,
                global_card_payment_type_id: null,
                amount: amountToPayCash.value,
                name: item.name,
            }
        }
        if(item.name === 'plazos') {
            return {
                id: item.id,
                global_card_payment_type_id: null,
                amount: 0,
                name: item.name,
            }
        }
        if(item.name === 'cortesia') {
            if(reasonAgreementSelected.value){
                if(reasonAgreementSelected.value.name != 'otro'){
                    reasonAgreementDescription.value = reasonAgreementSelected.value.name;
                }
                return {
                    id: item.id,
                    global_card_payment_type_id: null,
                    amount: 0,
                    reason_agreement_id:  reasonAgreementSelected.value.id,
                    reason_agreement: reasonAgreementDescription.value,
                    name: item.name,

                }
            }else{
                return {
                    id: item.id,
                    global_card_payment_type_id: null,
                    amount: 0,
                    name: item.name,
                }
            }
        }
    });
    // validar que al recorrer globalPaymentTypes.amount sea igual al totalamount
    let totalFinal = 0;
    globalPaymentTypes.value.forEach((item) => {
        totalFinal += parseFloat(item.amount);
    });

    if(totalFinal != totalAmount.value && !installmentSale.value) {
        valid.value = false;
        error.value = 'El monto total no coincide con el monto a pagar de los tipos de pago seleccionados';
        return;
    }

    if(purchaseStatus.value == 'retry') {
        valid.value = false;
        error.value = 'Estas en el proceso final de compra, si se require agregar otro asiento cancele la seleccion actual y reintente.';
        return;
    }

    if(purchaseType.value == 'abonado'){
        const atLeastOneHolder = seatsSelected.value.filter(seat => seat.is_owner == 'Si').length;

        if(atLeastOneHolder != 1){
            valid.value = false;
            error.value = 'Debe de haber un titular de compra en abonados';
            return;
        }
    }

    if(installmentSale.value && purchaseType.value == 'abonado') {
        const amountToPay = amountReceived.value - amountReturned.value;
        const seatsTotal = seatsSelected.value.length;
        if((seatsTotal * 500) > amountToPay) {
            toast('El monto a pagar no puede ser menor a 500 por asiento', {
                "theme": "auto",
                "type": "error",
                "dangerouslyHTMLString": true
            })
            valid.value = false;
            error.value = 'El monto a pagar no puede ser menor a 500 por asiento';
            return;
        }
    }

    const onSubmitConfirmDialog = document.getElementById('on-submit-confirm');
    onSubmitConfirmDialog.click();

}

// Crear referencias reactivas para las zonas
const aZone = ref([...props.a_zone]);
const bZone = ref([...props.b_zone]);
const cZone = ref([...props.c_zone]);

// Watcher para actualizar las referencias reactivas cuando los props cambian
watch(() => props.a_zone, (newVal) => {
    aZone.value = [...newVal];
});
watch(() => props.b_zone, (newVal) => {
    bZone.value = [...newVal];
});
watch(() => props.c_zone, (newVal) => {
    cZone.value = [...newVal];
});

// Función para actualizar los estados de los asientos
const updateZones = (seatsSelectedData) => {

    seatsSelectedData.seats.forEach(seat => {
        const zone = seat.seat_catalogue.zone;
        const seatCatalogueId = seat.seat_catalogue_id;

        if (zone === 'A') {
            const seatToUpdate = aZone.value.find(s => s.seat_catalogue_id === seatCatalogueId);
            if (seatToUpdate) {
                seatToUpdate.seat_catalogue_status.name = 'vendido';
            }
        } else if (zone === 'B') {
            const seatToUpdate = bZone.value.find(s => s.seat_catalogue_id === seatCatalogueId);
            if (seatToUpdate) {
                seatToUpdate.seat_catalogue_status.name = 'vendido';
            }
        } else if (zone === 'C') {
            const seatToUpdate = cZone.value.find(s => s.seat_catalogue_id === seatCatalogueId);
            if (seatToUpdate) {
                seatToUpdate.seat_catalogue_status.name = 'vendido';
            }
        }
    });

    // Actualizar las referencias reactivas
    aZone.value = [...aZone.value];
    bZone.value = [...bZone.value];
    cZone.value = [...cZone.value];
};

const showButtonPayment = ref(false);

const showPaymentDrawer = () => {
    drawerPaymentState.value = true;
};

const onSubmitConfirm = (isActive) => {

    if(!acceptTerms.value) {
        toast('Debe aceptar los términos y condiciones para continuar', {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
        return;
    }

    loadingg.value = true;
    loading.value = true;
    const isTransfer = userToTransfer.value ? true : false;
    saleDebtorData.value = {
        id: saleDeptorSelected.value,
        first_name: firstNameSaleDeptor.value,
        last_name: lastNameSaleDeptor.value,
        phone_number: phoneSaleDeptor.value,
        stadium_id: props.event.stadium_id,
    }

    seatsSelected.value.forEach(seat => {
        const originalSeat = originalSeatsSelected.value.find(
            s => s.seat_catalogue.code === seat.seat_catalogue.code
        );
        if (originalSeat) {
            if (purchaseType.value == 'abonado') {
                seat.original_price = parseFloat(
                    originalSeat.price_types.find(priceType => priceType.name === 'abonado').pivot.price
                );
            } else {
                seat.original_price = parseFloat(
                    originalSeat.price_types.find(priceType => priceType.name === 'regular').pivot.price
                );
            }
        }
    });

    const seatsSelectedData = {
        purchase_type: purchaseType.value,
        stadium_id: props.event.stadium_id,
        ticket_office_id: ticketOfficeId.value,
        event_id: props.event.id,
        cash_register_id: cashRegisterDataId.value,
        member_user_id: purchaseOnline.value ? props.user.id : (isTransfer ? userToTransfer.value : null),
        seller_user_id: sellerUserId.value,
        price_type_id: priceTypeId.value,
        seats: seatsSelected.value,
        amount_received: amountReceived.value,
        total_amount: totalAmount.value,
        total_returned: amountReturned.value,
        payment_in_installments: paymentInstallmentSelected.value,
        global_payment_types: globalPaymentTypes.value,
        is_online: purchaseOnline.value,
        serie_id: props.event.serie_id,
        is_transfer: isTransfer,
        user_to_transfer: userToTransfer.value,
        final_promotion: finalPromotion.value,
        sale_debtor: saleDebtorData.value,
    };

    /* console.log(seatsSelectedData);
    return */

axios.post(route('events.reserve-seats-to-buy'), seatsSelectedData)
    .then(response => {

        if (response.data.success && purchaseOnline.value) {
            showButtonPayment.value = true;
            drawerPaymentState.value = true;
        }
        toast(response.data.message, {
            "theme": "auto",
            "type": "success",
            "dangerouslyHTMLString": true
        })

        // Actualiza el estado de los asientos comprados
        updateZones(seatsSelectedData);


        if(response.data.pdf) {
            const pdfContent = atob(response.data.pdf);
            const pdfBlob = new Blob([new Uint8Array([...pdfContent].map(char => char.charCodeAt(0)))], { type: 'application/pdf' });

            if (response.data.subscriber) {
                const pdfUrl = window.URL.createObjectURL(pdfBlob);
                printInKioskMode(pdfUrl, purchaseType.value);
            } else {
                const pdfFile = new File([pdfBlob], 'arch.pdf', { type: 'application/pdf' });
                const formData = new FormData();
                formData.append('pdf', pdfFile);

                axios.post(route('print'), formData)
                    .then(response => {
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.error(error);
                        const pdfUrl = window.URL.createObjectURL(pdfBlob);
                        printInKioskMode(pdfUrl, purchaseType.value);
                    });

            }

            selectZones();
            setTimeout(() => {
                selectZones();
            }, 100);
        }

    })
    .catch(error => {
        console.log(error.response.data.message)
        toast(error.response.data.message, {
            "theme": "auto",
            "type": "error",
            "autoClose": 10000,
            "dangerouslyHTMLString": true
        })
    })
    .finally(() => {
        isActive.value = false;
        loading.value = false;
        loadingg.value = false;
        if(viewVendorTopics(props.user_roles)) {
            tab.value = 'seats';
        }
    });


}

const rules = {
    required: value => !!value || 'Campo requerido',
    isNumber: value => !isNaN(value) || 'Debe ser un número',
    isEmail: value => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(value) || 'Correo electrónico inválido';
    },
    minChar: value => value.length >= 3 || 'Debe tener un mínimo de 3 caracteres',
    phoneNumber: value => {
        const phoneNumber = value.replace(/\D/g, '');
        return phoneNumber.length === 10 || 'Número de teléfono inválido (10 dígitos)';
    },
    //validar si en el array de pagos selecionados solo existe un tipo de pago ya sea efectivo o tarjeta y validar que el monto sea igual al total
    isAmountToPay: value => {
        if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'tarjeta')) {
            return parseFloat(value) == parseFloat(totalAmount.value) || 'El monto debe ser igual al total';
        }
        if(paymentTypesSelected.value.length == 1 && paymentTypesSelected.value.some(type => type.name === 'efectivo')) {
            return parseFloat(value) == parseFloat(totalAmount.value) || 'El monto debe ser igual al total';
        }
        return true;
    }
};

function printInKioskMode(url, purchaseType) {
    const ventana = window.open(url, '_blank', 'fullscreen=yes,kiosk=yes');
    // ventana.onload = () => {
    //     ventana.print();
    //     if(purchaseType != 'abonado') {
    //         setTimeout(() => {
    //             ventana.close();
    //         }, 4000);
    //     }
    // };
}

/*
* Season tickets
*/
const paymentInstallmentSelected = ref(null);
const seasonTicketsDialog = ref(false);
const seasonTicktesData = ref(false);
const seasonTicketsForm = ref(false);

const updateHolder = (index) => {
    seatsSelected.value.forEach((seat, i) => {
        if(i !== index){
            seat.is_owner = 'No';
        }
    });
}

const seasonTicketsDialogOpen = () => {
    seasonTicketsDialog.value = true;
}

watch(purchaseType, () => {
    if(purchaseType.value == 'abonado' && selectedPromotion.value) {
        return
    }
    if(purchaseType.value == 'abonado'){
        seasonTicketsDialog.value = true;
    }
    amountToPayCash.value = 0;
    amountReceivedCash.value = 0;
    amountToPayCard.value = 0;
    updateTotal();

})

watch(seatsSelected, (newSeats) => {
    newSeats.forEach((seat, index) => {
        if(seat.is_owner === 'Si'){
            updateHolder(index);
        }
    });
}, { deep:true })

const seasonTicktesDataConfirm = () => {
    if(!seasonTicketsForm.value) return
    seasonTicketsDialog.value = false;
    seasonTicktesData.value = true;
    toast('Los datos de los abonos han sido guardados', {
        "theme": "auto",
        "type": "success",
        "dangerouslyHTMLString": true
    })
}

const cardPaymentTypeError = computed(() => {
    return rules.required(cardPaymentTypesSelected.value) !== true;
});

const globalPaymentTypesOnlyCard = ref([]);
watch(() => paymentInstallmentSelected.value, () => {
    if(paymentInstallmentSelected.value){
        paymentTypesSelected.value = globalPaymentTypesOnlyCard.value;
        installmentSale.value = false;
    }
})
</script>

<template>
    <Head title="Evento" />
    <MasterLayout>
        <AppNav/>
        <CashRegisterNav v-bind:user_roles="user_roles"/>
        <transition name="fade">
            <div
                v-if="showImageModal"
                class="fixed inset-0 !z-50 flex items-center justify-center bg-black/50 backdrop-blur-[7px] transition-all duration-500"
                @click.self="closeImageModal"
            >
                <div class="bg-neutral-200 shadow-2xl rounded-lg p-2 relative max-w-full w-[90vw] md:w-[60%] flex flex-col items-center transition-all duration-500">
                    <img class="w-full h-auto rounded-lg" :src="modalImageSrc" alt="Imagen ampliada" />
                </div>
            </div>
        </transition>
        <v-dialog max-width="500" max-height="300">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn id="seller-dialog" v-bind="activatorProps" variant="elevated" class="!hidden" rounded="xl" size="large" block><span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos</v-btn>
            </template>
            <template v-slot:default="{ isActive }">
                <v-card>
                <v-card-text class="flex items-center justify-center flex-col text-center mt-1">
                    <h1 class="text-xl">Se debe abrir una caja para usar esta seccion como taquilla.</h1>
                </v-card-text>
                    <Link
                        :href="route('ticket-offices.index')"
                        >
                        <div class="w-full flex items-center justify-center mb-5">
                            <PrimaryButton>
                                <div class="flex items-center justify-center gap-1">
                                    <p>Abrir caja</p>
                                </div>
                            </PrimaryButton>
                        </div>
                    </Link>
                </v-card>
            </template>
        </v-dialog>

        <transition name="slide">
            <div  v-if="seatsSelected.length > 0 && tab == 'seats'" class="hidden fixed lg:top-7 rounded-lg shadow-xl p-2 right-3 max-h-60 overflow-y-auto w-60 z-[60] lg:flex items-center justify-center bg-white/50 dark:!bg-neutral-800/50 backdrop-blur-xl dark:!text-white">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-500">
                    <thead>
                        <tr>
                        <th scope="col" class=" p-2 text-start whitespace-nowrap">
                            <span class="text-xs uppercase">
                                asiento
                            </span>
                        </th>

                        <th scope="col" class=" p-2 text-start whitespace-nowrap">
                            <span class="text-xs uppercase">
                            precio
                            </span>
                        </th>
                        <th scope="col" class=" p-2 text-start whitespace-nowrap">
                            <span class="text-xs uppercase">
                                Acción
                            </span>
                        </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="seat in seatsSelected" :key="seat.seat_catalogue.code">
                        <td class="size-px whitespace-nowrap  p-2">
                            <span class="text-sm">{{ seat.seat_catalogue.zone }}{{ seat.seat_catalogue.row }}{{ seat.seat_catalogue.seat }}</span>
                        </td>
                        <td class="size-px whitespace-nowrap  p-2">
                            <span class="text-sm">
                                <div v-for="priceType in seat.price_types" :key="priceType.id">
                                    <div>
                                        <span v-if="priceType.name === (purchaseType == 'abonado' ? 'abonado' : 'regular')">
                                        {{ formatPrice(priceType.pivot.price) }}
                                        </span>
                                    </div>
                                </div>
                            </span>
                        </td>
                        <td class="size-px whitespace-nowrap  p-2">
                            <span @click="addSeat(seat)" class="material-symbols-outlined text-xl text-red-500 cursor-pointer">delete</span>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </transition>
        <transition name="slide">
            <div v-if="seatsSelected.length > 0 && tab == 'seats'" @click="scrollTopaymentSection" class="fixed bottom-5 lg:bottom-16 right-3 z-[60]">
                <div class="flex items-center text-xs lg:text-base gap-2 justify-center bg-green-500 border-b-4 border-b-green-700 text-white cursor-pointer hover:scale-105 transition-transform duration-500 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl">
                    <span class="material-symbols-outlined z-20 text-xl lg:text-xl">arrow_forward</span>Procesar Compra
                </div>
            </div>
        </transition>
        <div v-if="tab == 'payment'" @click="tab = 'seats'" class="fixed bottom-5 lg:bottom-16 right-3 z-[60]">
            <div class="flex items-center border-b-4 border-b-yellow-700 text-xs lg:text-base gap-2 justify-center bg-yellow-500 text-white cursor-pointer hover:scale-105 transition-transform duration-500 px-4 lg:px-6 py-3 lg:py-4 rounded-2xl">
                <span class="material-symbols-outlined z-20 text-xl lg:text-xl">arrow_back</span>Seguir comprando
            </div>
        </div>

        <div>
            <PaymentDrawer
                v-bind:purchaseType="purchaseType"
                v-bind:stadiumId="event.stadium_id"
                v-bind:ticketOfficeId="ticketOfficeId"
                v-bind:event="event"
                v-bind:cashRegisterId="cashRegisterDataId"
                v-bind:memberUserId="user.id"
                v-bind:sellerUserId="sellerUserId"
                v-bind:priceTypeId="priceTypeId"
                v-bind:seats="seatsSelected"
                v-bind:amountReceived="amountReceived"
                v-bind:totalAmount="totalAmount"
                v-bind:amountReturned="amountReturned"
                v-bind:paymentInInstallments="paymentInstallmentSelected"
                v-bind:globalPaymentTypes="globalPaymentTypes"
                v-bind:isOnline="purchaseOnline"
                v-bind:serieId="event.serie_id"
                v-bind:finalPromotion="finalPromotion"
                v-bind:saleDebtorData="saleDebtorData"
            />
        </div>

        <div v-if="showPromotionToast" class="fixed bottom-36 right-3 z-[60]">
            <v-bottom-sheet>
                <template v-slot:activator="{ props }">
                    <div v-bind="props" class="relative">
                        <div class="flex items-center justify-center -rotate-45 cursor-pointer hover:scale-105 transition-transform duration-700">
                            <div class="bg-gradient-to-r from-purple-500 to-purple-400 w-12 h-12 rounded-full flex items-center justify-center">
                                <span class="material-symbols-outlined z-20 rotate-45 text-white text-xl lg:text-2xl">featured_seasonal_and_gifts</span>
                            </div>
                            <div class="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[20%] w-6 h-6 bg-purple-500 rotate-45 rounded-[4px]"></div>
                        </div>
                        <div class="absolute animate-bounce bottom-full right-0 transform w-[100px] text-center -translate-x-1/2 mb-1 px-2 flex items-center justify-center py-1 shadow-xl bg-gradient-to-r from-purple-500 to-yellow-500 text-white rounded-full">
                            <span class="text-[10px] block">Abrir promociones</span>
                            <div class="absolute bottom-[-5px] left-1/2 transform border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-purple-500"></div>
                        </div>
                    </div>
                </template>

                <v-card>
                    <v-col v-if="showPromotionToast" cols="12">
                        <h3 class="text-center font-bold text-lg mb-3 text-gray-700">Selecciona una promoción:</h3>
                        <v-radio-group v-model="selectedPromotion" inline>
                            <div v-for="(promotion, index) in promotionTypesCo" :key="index">
                                <div v-if="promotion.percent_allow > 0">
                                    <div class="border-4 border-yellow-500 rounded-xl bg-white p-2 m-3">
                                        <v-radio color="yellow" :key="index" :value="promotion">
                                            <template v-slot:label>
                                                <div>{{ promotion.description }} de {{ promotion.percent_allow }}% ({{ formatFirstLetterUppercase(promotion.type) }})<strong class="text-yellow-700">. Asientos de {{ formatPrice(promotion.final_price) }}</strong></div>
                                            </template>
                                        </v-radio>
                                    </div>
                                </div>
                                <div v-else-if="promotion.quantity > promotion.generic_seats_allowed">
                                    <div class="border-4 border-purple-500 rounded-xl bg-white p-2 m-3">
                                        <v-radio color="cyan" :key="index" :value="promotion">
                                            <template v-slot:label>
                                                <div>{{ promotion.description }}<strong class="text-purple-700">. Para asientos con precio de {{ formatPrice(promotion.final_price) }}</strong></div>
                                            </template>
                                        </v-radio>
                                    </div>
                                </div>
                            </div>
                        </v-radio-group>
                    </v-col>
                </v-card>
            </v-bottom-sheet>
        </div>

        <div
            class="flex items-center justify-center bg-cover relative min-h-screen lg:min-h-screen aspect-3/4 object-cover bg-center w-full p-4 lg:p-7 shadow-xl overflow-hidden transition-all duration-500"
            :style="`background-image: url(/storage/${event.global_image.file_path})`"
            >
            <div class="absolute top-7 lg:top-5 mx-auto w-full text-white z-20 px-4 lg:px-0">
                <GuestNav/>
            </div>
            <div class="max-w-7xl mx-auto z-10 flex flex-col flex-1 items-center justify-center text-white">
                <div class="flex-col gap-4 justify-end w-full mt-28">
                    <div data-aos="fade-left" data-aos-duration="1300" data-aos-once="true" class="flex lg:items-center flex-col justify-between gap-5 lg:gap-10">
                        <div class="text-center flex items-center justify-center flex-col">
                            <div class="flex items-center justify-center gap-4 mb-3">
                                 <Link :href="route('events.index')">
                                    <div class="size-10 inline-flex shadow-md rounded-full bg-tw-primary p-2 items-center justify-center">
                                        <span class="material-symbols-outlined text-white">arrow_back</span>
                                    </div>
                                </Link>
                                <v-rating
                                    readonly
                                    :length="5"
                                    :size="26"
                                    :model-value="5"
                                    class="!scale-110"
                                    active-color="yellow"
                                />
                            </div>
                            <div class="flex items-center gap-1">
                                <span class="material-symbols-outlined lg:text-2xl block">access_time</span>
                                <h3 class="lg:text-lg">{{ dateFormat(event.start_date) }}</h3>
                            </div>
                            <h2 class="inline-block font-bebas pr-1 mt-8 text-5xl lg:text-8xl font-bold max-w-4xl">
                                {{ event.name }}
                            </h2>
                            <div class="flex flex-col lg:flex-row lg:items-center justify-center gap-2 mt-3 lg:mt-2">
                                <div class="flex items-center gap-1">
                                    <span class="material-symbols-outlined lg:text-2xl hidden lg:block">calendar_today</span>
                                    <h3 class="lg:text-lg">{{ event.serie.global_season.name }} | {{ event.description }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-center gap-6">
                            <div class="border-2 cursor-pointer h-[120px] w-[90px] lg:h-[140px] lg:w-[150px] object-cover bg-center bg-cover relative overflow-hidden rounded" @click="openImageModal(`/storage/${event.global_image.file_path}`)"  :style="`background-image: url(/storage/${event.global_image.file_path})`">
                                <div class="absolute inset-0 bg-black/40 opacity-100 z-20 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" fill="none"/><line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" stroke-width="2"/><line x1="11" y1="8" x2="11" y2="14" stroke="currentColor" stroke-width="2"/><line x1="8" y1="11" x2="14" y2="11" stroke="currentColor" stroke-width="2"/></svg>
                                </div>
                            </div>
                            <iframe class="rounded h-[120px] w-[90px] lg:h-[140px] lg:w-[150px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.1000362447776!2d-96.12713863341021!3d19.16389135194487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c3413bee13e223%3A0x4fe5b42b583ae037!2sEstadio%20Luis%20Pirata%20Fuente!5e0!3m2!1ses-419!2smx!4v1752452039471!5m2!1ses-419!2smx" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div class="flex items-center justify-center flex-col gap-2 mt-5">
                            <p>Scroll para ver más</p>
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="z-0 absolute backdrop-blur-md bottom-0 left-0 right-0 h-full !bg-[linear-gradient(180deg,rgba(0,0,0,0)_-30%,#000_150%)] block"></div>
        </div>

        <div ref="paymentSection"></div>

        <div class="w-full overflow-hidden mb-16">
            <main  class="min-h-screen max-w-7xl mx-auto pt-20 relative">
                <div class="absolute -right-40 lg:-right-96 -top-52 lg:-top-52 h-[480px] w-[300px] lg:h-[680px] lg:w-[500px] rounded-full blur-[120px] lg:blur-[220px] bg-tw-primary">
                </div>
                <v-tabs
                    color="cyan"
                    fixed-tabs
                    v-model="tab"
                >
                    <v-tab value="seats" class="!text-2xl !font-bold !font-bebas">Selección de asientos</v-tab>
                    <v-tab value="payment" class="!text-2xl !font-bold !font-bebas">Procesar compra</v-tab>
                </v-tabs>
                <v-card-text class="!mt-10">
                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="seats">
                            <div class="w-full">
                                <div class="flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16">
                                    <div class="grid grid-cols-3 items-start justify-center gap-5 w-full lg:w-auto">
                                        <div class="flex items-center justify-center gap-1 flex-col">
                                            <div class="size-14 rounded-t-2xl rounded-b-md bg-neutral-400"></div>
                                            <p class="text-center text-sm">Disponible</p>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-col">
                                            <div class="size-14 rounded-t-2xl rounded-b-md bg-purple-500"></div>
                                            <p class="text-center text-sm">Vendido</p>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-col">
                                            <div class="size-14 rounded-t-2xl rounded-b-md bg-green-500"></div>
                                            <p class="text-center text-sm">Seleccionado</p>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-col">
                                            <div class="size-14 rounded-t-2xl rounded-b-md bg-pink-600"></div>
                                            <p class="text-center text-sm">Reservado</p>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-col">
                                            <div class="size-14 rounded-t-2xl rounded-b-md bg-gray-600"></div>
                                            <p class="text-center text-sm">Inhabilitado</p>
                                        </div>
                                        <div class="flex items-center justify-center gap-1 flex-col">
                                            <div class="size-14 rounded-t-2xl rounded-b-md bg-cyan-500"></div>
                                            <p class="text-center text-sm">En transito</p>
                                        </div>
                                    </div>
                                    <div v-if="seatAvailability.length > 0" class="w-full lg:w-auto grid grid-cols-3 gap-5 items-center justify-center">
                                        <div v-for="(availability, index) in seatAvailability" :key="index">
                                            <div class="p-3 border-2 dark:border-neutral-600 rounded-lg bg-white dark:!bg-neutral-800 text-center dark:!text-neutral-200">
                                                <p class="text-[10px] lg:text-xs font-bold">Zona {{ availability.zone }}</p>
                                                <p class="text-[10px] lg:text-xs">{{ availability.available_seats }} <br> asientos libres</p>
                                            </div>
                                        </div>
                                        <div v-if="viewVendorTopics(props.user_roles)" @click="getSeatAvailability()" class="p-3 border-2 rounded-lg bg-tw-primary/30 text-center">
                                            <p class="text-[10px] lg:text-xs font-bold">Refrescar</p>
                                        </div>
                                    </div>
                                    <div v-else class="w-full lg:w-auto grid grid-cols-3 gap-5 items-center justify-center">
                                        <div class="h-[72px] w-[100px] rounded-lg bg-gray-300 animate-pulse"></div>
                                        <div class="h-[72px] w-[100px] rounded-lg bg-gray-300 animate-pulse"></div>
                                        <div class="h-[72px] w-[100px] rounded-lg bg-gray-300 animate-pulse"></div>
                                        <div class="h-[72px] w-[100px] rounded-lg bg-gray-300 animate-pulse"></div>
                                        <div class="h-[72px] w-[100px] rounded-lg bg-gray-300 animate-pulse"></div>
                                        <div class="h-[72px] w-[100px] rounded-lg bg-gray-300 animate-pulse"></div>
                                    </div>
                                </div>
                                <div class="my-20">
                                    <div class="w-full relative">
                                        <div class="w-full">
                                            <div class="flex flex-col gap-3 justify-between mb-4 w-full">
                                                <div class="flex flex-col lg:flex-row items-center justify-between w-full gap-3 my-3">
                                                    <div class="flex items-center gap-3 flex-col md:flex-row">
                                                        <div class="flex items-center gap-3">
                                                            <SecondaryButton @click="zoomIn" heightbtn="!h-[50px] lg:!h-[60px]" paddingbtn="!px-9 lg:!px-12">
                                                                <span class="material-symbols-outlined text-2xl !mr-1">add</span>zoom
                                                            </SecondaryButton>
                                                            <SecondaryButton @click="zoomOut" heightbtn="!h-[50px] lg:!h-[60px]" paddingbtn="!px-9 lg:!px-12">
                                                                <span class="material-symbols-outlined text-2xl !mr-1">remove</span>zoom
                                                            </SecondaryButton>
                                                        </div>
                                                    </div>
                                                    <div class="items-center flex-col gap-1 hidden lg:flex relative">
                                                        <h3 class="font-bold font-bebas text-4xl lg:text-5xl">{{ viewSelectedSection}}</h3>
                                                    </div>
                                                    <div class="flex items-center gap-3">
                                                        <SecondaryButton @click="resetZoom" heightbtn="!h-[50px] lg:!h-[60px]" paddingbtn="!px-9 lg:!px-12">
                                                            <span class="material-symbols-outlined text-2xl !mr-1">my_location</span>Restablecer
                                                        </SecondaryButton>
                                                        <SecondaryButton @click="selectZones" heightbtn="!h-[50px] lg:!h-[60px]" paddingbtn="!px-9 lg:!px-12">
                                                            <span class="material-symbols-outlined text-2xl !mr-1">location_on</span>zonas
                                                        </SecondaryButton>
                                                    </div>
                                                </div>

                                                <div class="flex h-[400px] bg-white rounded-3xl cursor-grab lg:h-[500px] items-center justify-center overflow-hidden bordermt-5 gap-3 relative">
                                                    <div class="size-[100px] lg:size-36 border border-gray-300 dark:!border-neutral-300 absolute top-2 left-2 z-20 bg-white rounded-xl flex items-center justify-center">
                                                        <div id="stadium-hdx-img" class="w-14 h-20 lg:w-20 lg:h-28 rotate-0 transition-all duration-1000 bg-neutral-400 items-center justify-center flex text-white rounded-md">
                                                            <span id="stadium-hdx-text" class="block text-[9px] lg:!text-xs rotate-0">Escenario</span>
                                                        </div>
                                                    </div>
                                                    <div v-if="isSvgVisible">
                                                        <EstadioHdx  @handle-section-click="handleSectionClick"/>
                                                    </div>
                                                    <div v-if="selectedSection == 'zonaA'" class="">
                                                        <ZonaA v-bind:purchaseOnline="purchaseOnline" @add-seat="addSeat" v-bind:seats="seatsASection" v-bind:seatsSelected="seatsSelected" />
                                                    </div>
                                                    <div v-if="selectedSection == 'zonaB'" class="">
                                                        <ZonaB @add-seat="addSeat" v-bind:purchaseOnline="purchaseOnline" v-bind:seats="seatsBSection" v-bind:seatsSelected="seatsSelected" />
                                                    </div>
                                                    <div v-if="selectedSection == 'zonaC'" class="">
                                                        <ZonaC @add-seat="addSeat" v-bind:purchaseOnline="purchaseOnline" v-bind:seats="seatsCSection" v-bind:seatsSelected="seatsSelected" />
                                                    </div>
                                                    <div v-if="selectedSection == 'zonaE'" class="">
                                                        <ZonaE @add-seat="addSeat" v-bind:purchaseOnline="purchaseOnline" v-bind:seats="seatsESection" v-bind:seatsSelected="seatsSelected" />
                                                    </div>
                                                    <div v-if="selectedSection == 'zonaF'" class="">
                                                        <ZonaF @add-seat="addSeat" v-bind:purchaseOnline="purchaseOnline" v-bind:seats="seatsFSection" v-bind:seatsSelected="seatsSelected" />
                                                    </div>
                                                    <div v-if="selectedSection == 'zonaH'" class="">
                                                        <ZonaH @add-seat="addSeat" v-bind:purchaseOnline="purchaseOnline" v-bind:seats="seatsHSection" v-bind:seatsSelected="seatsSelected" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="loading-section-dialog">
                                            <v-dialog fullscreen v-model="loadingSectionDialog" transition="dialog-bottom-transition">
                                                <template v-slot:activator="{ props: activatorProps }">
                                                    <v-btn v-bind="activatorProps" variant="elevated" class="!hidden text-none !text-white !bg-gradient-to-r !from-purple-600 !to-pink-400" rounded="xl" size="large" block><span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos</v-btn>
                                                </template>
                                                <template v-slot:default="{ isActive }">
                                                    <div class="w-full h-full">
                                                        <div class="h-screen flex items-center justify-center w-full">
                                                            <div class="animate-spin drop-shadow-2xl border-8 border-white bg-transparent backdrop-blur-md md:w-40 md:h-40 h-32 w-32 aspect-square rounded-full">
                                                                <div class="flex items-center justify-center rounded-full h-full w-full">
                                                                    <span class="material-symbols-outlined !text-4xl text-white">confirmation_number</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <v-card>
                                                        <v-card-actions>
                                                                <v-btn @click="isActive.value = false"></v-btn>
                                                        </v-card-actions>
                                                    </v-card>
                                                </template>
                                            </v-dialog>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-tabs-window-item>

                        <v-tabs-window-item value="payment">
                            <div class="w-full max-w-4xl mx-auto">
                                <div class="w-full">
                                    <div class="w-full">
                                        <div class="lg:px-5 relative flex flex-col-reverse">
                                            <div v-if="seatsSelected.length == 0" class="flex flex-col items-center gap-10 justify-center">
                                                <h3 class="mt-10 font-bold">No hay asientos seleccionados</h3>
                                            </div>
                                            <div v-if="seatsSelected.length > 0" class="payment-secction">
                                                <div class="w-full ">
                                                    <v-expansion-panels v-model="panel" multiple>
                                                        <v-expansion-panel class="!px-3 lg:!px-10 !rounded-2xl !py-2 !border shadow-lg dark:!border-neutral-600">
                                                            <v-expansion-panel-title expand-icon="mdi-menu-down">
                                                                Asientos seleccionados
                                                            </v-expansion-panel-title>
                                                            <v-expansion-panel-text>
                                                                <div>
                                                                    <table class="min-w-full text-neutral-800 dark:!text-neutral-200 divide-y divide-gray-200 dark:!divide-neutral-600">
                                                                        <thead>
                                                                            <tr>
                                                                            <th scope="col" class=" p-2 text-start whitespace-nowrap">
                                                                                <span class="text-xs font-semibold uppercase tracking-wide">
                                                                                    zona
                                                                                </span>
                                                                            </th>

                                                                            <th scope="col" class=" p-2 text-start whitespace-nowrap">
                                                                                <span class="text-xs font-semibold uppercase tracking-wide">
                                                                                    Fila
                                                                                </span>
                                                                            </th>

                                                                            <th scope="col" class=" p-2 text-start whitespace-nowrap">
                                                                                <span class="text-xs font-semibold uppercase tracking-wide">
                                                                                    asiento
                                                                                </span>
                                                                            </th>

                                                                            <th scope="col" class=" p-2 text-start whitespace-nowrap">
                                                                                <span class="text-xs font-semibold uppercase tracking-wide">
                                                                                precio
                                                                                </span>
                                                                            </th>
                                                                            <th scope="col" class=" p-2 text-start whitespace-nowrap">
                                                                                <span class="text-xs font-semibold uppercase tracking-wide">
                                                                                    Acción
                                                                                </span>
                                                                            </th>
                                                                            </tr>
                                                                        </thead>

                                                                        <tbody>
                                                                            <tr v-for="seat in seatsSelected" :key="seat.seat_catalogue.code">
                                                                            <td class="size-px whitespace-nowrap p-2">
                                                                                <span class="text-sm">{{ seat.seat_catalogue.zone }}</span>
                                                                            </td>
                                                                            <td class="size-px whitespace-nowrap  p-2">
                                                                                <span class="text-sm">{{ seat.seat_catalogue.row }}</span>
                                                                            </td>
                                                                            <td class="size-px whitespace-nowrap  p-2">
                                                                                <span class="text-sm">{{ seat.seat_catalogue.seat }}</span>
                                                                            </td>
                                                                            <td class="size-px whitespace-nowrap  p-2">
                                                                                <span class="text-sm text-green-600 dark:text-green-400">
                                                                                    <div v-for="priceType in seat.price_types" :key="priceType.id">
                                                                                        <div>
                                                                                            <span v-if="priceType.name === (purchaseType == 'abonado' ? 'abonado' : 'regular')">
                                                                                            {{ formatPrice(priceType.pivot.price) }}
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                            </td>
                                                                            <td class="size-px whitespace-nowrap  p-2">
                                                                                <span @click="addSeat(seat)" class="material-symbols-outlined text-xl text-red-500 cursor-pointer">delete</span>
                                                                            </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </v-expansion-panel-text>
                                                        </v-expansion-panel>

                                                        <v-expansion-panel class="lg:!px-10 !rounded-2xl !py-2 !bg-transparent !mt-9">
                                                            <v-expansion-panel-title expand-icon="mdi-menu-down">
                                                                Proceso de compra
                                                            </v-expansion-panel-title>
                                                            <v-form v-model="form" @submit.prevent="onSubmit" lazy-validation>
                                                                <v-expansion-panel-text>
                                                                <div v-if="viewVendorTopics(user_roles) && purchaseType != 'abonado'">
                                                                <div>
                                                                        <v-switch inset  label="¿Se requiere venta a cuotas?" color="cyan" class="!inline-flex !mb-4" @click="paymentInInstallments"></v-switch>
                                                                    </div>
                                                                </div>

                                                                <v-select
                                                                    v-if="viewVendorTopics(user_roles) && !paymentInstallmentSelected"
                                                                    color="cyan"
                                                                    label="selecciona el tipo de pago"
                                                                    :item-props="globalPayementTypeProps"
                                                                    :items="global_payment_types.filter(type => type.name !== 'plazos')"
                                                                    chips
                                                                    multiple
                                                                    clearable
                                                                    variant="solo"
                                                                    v-model="paymentTypesSelected"
                                                                    :rules="[rules.required]"
                                                                ></v-select>
                                                                <v-select
                                                                    v-if="viewVendorTopics(user_roles) && paymentInstallmentSelected"
                                                                    color="cyan"
                                                                    label="selecciona el tipo de pago"
                                                                    :item-props="globalPayementTypeProps"
                                                                    :items="globalPaymentTypesOnlyCard"
                                                                    chips
                                                                    multiple
                                                                    variant="solo"
                                                                    clearable
                                                                    v-model="paymentTypesSelected"
                                                                    :rules="[rules.required]"
                                                                ></v-select>

                                                                <div v-if="paymentTypesSelected.some(type => type.name === 'tarjeta')">
                                                                    <h4 class="text-xs px-4 py-1 rounded-full font-bold text-center mb-2">
                                                                        Complemento para pago con tarjeta
                                                                    </h4>
                                                                    <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
                                                                        <v-select
                                                                            color="cyan"
                                                                            variant="solo"
                                                                            clearable
                                                                            class="!w-full"
                                                                            label="Selecciona el tipo de tarjeta"
                                                                            :item-props="globalCardPayementTypeProps"
                                                                            :items="global_card_payment_types"
                                                                            v-model="cardPaymentTypesSelected"
                                                                            :rules="[rules.required]"
                                                                            :error="cardPaymentTypeError"
                                                                            :error-messages="cardPaymentTypeError ? ['Este campo es obligatorio'] : []"
                                                                        ></v-select>
                                                                        <div v-if="!installmentSale && viewVendorTopics(user_roles)">
                                                                            <v-text-field
                                                                                label="Monto a pagar con tarjeta"
                                                                                class="!w-full"
                                                                                variant="solo"
                                                                                color="cyan"
                                                                                clearable
                                                                                v-model="amountToPayCard"
                                                                                :rules="[rules.required, rules.isNumber, rules.isAmountToPay]"
                                                                            ></v-text-field>
                                                                        </div>
                                                                        <div v-else-if="installmentSale && viewVendorTopics(user_roles)">
                                                                            <v-text-field
                                                                                label="Monto a pagar con tarjeta"
                                                                                class="!w-full"
                                                                                variant="solo"
                                                                                color="cyan"
                                                                                clearable
                                                                                v-model="amountToPayCard"
                                                                                :rules="[rules.required, rules.isNumber]"
                                                                            ></v-text-field>
                                                                        </div>
                                                                        <v-text-field
                                                                            v-else
                                                                            label="Monto a pagar con tarjeta"
                                                                            class="!w-full"
                                                                            color="cyan"
                                                                            variant="solo"
                                                                            readonly
                                                                            v-model="amountToPayCard"
                                                                            :rules="[rules.required, rules.isNumber, rules.isAmountToPay]"
                                                                        ></v-text-field>
                                                                    </div>
                                                                </div>

                                                                <div v-if="paymentTypesSelected.some(type => type.name === 'efectivo')">
                                                                    <h4 class="text-xs px-4 py-1 rounded-full  font-bold text-green-600 text-center mb-2">
                                                                        Complemento para pago con efectivo
                                                                    </h4>

                                                                    <v-text-field
                                                                        label="Monto recibido para efectivo"
                                                                        color="cyan"
                                                                        clearable
                                                                        variant="solo"
                                                                        hint="Monto recibido por el cliente"
                                                                        v-model="amountReceivedCash"
                                                                        :rules="[rules.required, rules.isNumber]"
                                                                    ></v-text-field>

                                                                    <div v-if="!installmentSale && viewVendorTopics(user_roles)">
                                                                        <v-text-field
                                                                            label="Monto a pagar para efectivo"
                                                                            color="cyan"
                                                                            clearable
                                                                            variant="solo"
                                                                            hint="Monto a pagar por el cliente"
                                                                            v-model="amountToPayCash"
                                                                            :rules="[rules.required, rules.isNumber, rules.isAmountToPay]"
                                                                            ></v-text-field>
                                                                    </div>
                                                                    <div v-else-if="installmentSale && viewVendorTopics(user_roles)">
                                                                        <v-text-field
                                                                            label="Monto a pagar para efectivo"
                                                                            color="cyan"
                                                                            clearable
                                                                            variant="solo"
                                                                            hint="Monto a pagar por el cliente"
                                                                            v-model="amountToPayCash"
                                                                            :rules="[rules.required, rules.isNumber]"
                                                                            ></v-text-field>
                                                                    </div>
                                                                </div>

                                                                <div v-if="paymentTypesSelected.some(type => type.name === 'cortesia')">
                                                                    <h4 class="text-xs px-4 py-1 rounded-full  font-bold text-purple-600 text-center mb-2">
                                                                        Complemento para pago en cortesía
                                                                    </h4>
                                                                    <v-select
                                                                        v-if="viewVendorTopics(user_roles)"
                                                                        color="cyan"
                                                                        label="selecciona el complemento a cortesía"
                                                                        hint="Rason de la cortesía"
                                                                        :item-props="reasonAgreementsProps"
                                                                        :items="reason_agreements"
                                                                        v-model="reasonAgreementSelected"
                                                                        variant="solo"
                                                                        chips
                                                                        :rules="[rules.required]"
                                                                    ></v-select>
                                                                    <div v-if="reasonAgreementSelected && reasonAgreementSelected.name === 'otro'">
                                                                        <v-textarea
                                                                            class="w-full"
                                                                            append-inner-icon="mdi-file-document"
                                                                            label="Rason especial de la cortesía"
                                                                            row-height="10"
                                                                            color="cyan"
                                                                            variant="solo"
                                                                            clearable
                                                                            rows="3"
                                                                            auto-grow
                                                                            v-model="reasonAgreementDescription"
                                                                            :rules="[rules.required, rules.minChar]"
                                                                    ></v-textarea>
                                                                    </div>
                                                                </div>
                                                                <div v-if="viewVendorTopics(user_roles)">
                                                                    <h4 class="text-xs px-4 py-1 rounded-full font-bold text-green-600 text-center mb-2">
                                                                        Complemento para convenios
                                                                    </h4>
                                                                    <v-select
                                                                        color="cyan"
                                                                        label="selecciona una institución"
                                                                        :item-props="institutionsProps"
                                                                        :items="institutions"
                                                                        v-model="institutionSelected"
                                                                        variant="solo"
                                                                        clearable
                                                                        chips
                                                                    ></v-select>
                                                                    <div v-if="institutionSelected">
                                                                        <v-select
                                                                            v-if="viewVendorTopics(user_roles)"
                                                                            color="cyan"
                                                                            label="selecciona un convenio"
                                                                            :item-props="institutionAgreementsProps"
                                                                            :items="agreementsByInstitutionSelected"
                                                                            chips
                                                                            v-model="agreementSelected"
                                                                            clearable
                                                                            variant="solo"
                                                                            :rules="[rules.required]"
                                                                        ></v-select>
                                                                    </div>
                                                                    <div v-if="agreementSelected">
                                                                        <v-radio-group v-model="selectedAgreementPromotion">
                                                                            <div v-for="(promotion, index) in agreementSelected.promotions" :key="index">
                                                                                <div v-if="promotion.generic_seats_allowed ">
                                                                                    <div class="border-4 border-yellow-500 rounded-xl bg-white p-2 m-3">
                                                                                        <v-radio color="yellow" :key="index" :value="promotion">
                                                                                            <template v-slot:label>
                                                                                                <div>{{ promotion.name }}<strong class="text-yellow-700">. Promocion por asientos</strong></div>
                                                                                            </template>
                                                                                        </v-radio>
                                                                                    </div>
                                                                                </div>
                                                                                <div v-if="promotion.percent_allow > 0 && promotion.promotion_type.name == 'descuento_por_porcentaje_por_compra'">
                                                                                    <div class="border-4 border-blue-500 rounded-xl bg-white p-2 m-3">
                                                                                        <v-radio color="blue" :key="index" :value="promotion">
                                                                                            <template v-slot:label>
                                                                                                <div>{{ promotion.name }}<strong class="text-blue-700">. Descuento por porcentaje por compra total</strong></div>
                                                                                            </template>
                                                                                        </v-radio>
                                                                                    </div>
                                                                                </div>
                                                                                <div v-if="promotion.percent_allow > 0 && promotion.promotion_type.name == 'descuento_por_porcentaje_por_boleto'">
                                                                                    <div class="border-4 border-purple-500 rounded-xl bg-white p-2 m-3">
                                                                                        <v-radio color="cyan" :key="index" :value="promotion">
                                                                                            <template v-slot:label>
                                                                                                <div>{{ promotion.name }}<strong class="text-purple-700">. Descuento por porcentaje por boleto</strong></div>
                                                                                            </template>
                                                                                        </v-radio>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </v-radio-group>
                                                                    </div>

                                                                </div>

                                                                <p v-if="!valid" class="py-4 px-4 rounded-lg bg-red-100 dark:bg-red-100/10 border-l-[6px] border-l-red-500 text-red-600 dark:text-white text-xs my-4">{{ error }}</p>

                                                                <div class="mt-5">
                                                                    <div v-if="!viewVendorTopics(user_roles)" class="flex items-center justify-between ">
                                                                        <v-radio-group inline label="Tipo de compra a realizar" v-model="purchaseType">
                                                                            <v-radio
                                                                                v-for="(option, index) in purchase_types"
                                                                                :disabled="(!!(event.enabled_for_season_tickets && option == 'partido') || option == 'serie')"
                                                                                :key="index"
                                                                                :color="'purple'"
                                                                                :label="option"
                                                                                :value="option"
                                                                            ></v-radio>
                                                                        </v-radio-group>
                                                                        <v-btn v-if="purchaseType == 'abonado'" @click="seasonTicketsDialogOpen" class="!mt-2 !px-8 !h-[50px] !rounded-xl" color="cyan" variant="tonal">Tomar datos</v-btn>
                                                                    </div>
                                                                    <div v-if="viewVendorTopics(user_roles)" class="flex items-center justify-between">
                                                                        <v-radio-group inline label="Tipo de compra a realizar" v-model="purchaseType">
                                                                            <v-radio
                                                                                :color="'purple'"
                                                                                :label="purchaseType"
                                                                                :value="purchaseType"
                                                                            ></v-radio>
                                                                        </v-radio-group>
                                                                        <v-btn v-if="purchaseType == 'abonado'" @click="seasonTicketsDialogOpen" class="!mt-2 !px-8 !h-[50px] !rounded-xl" color="cyan" variant="tonal">Tomar datos</v-btn>
                                                                    </div>
                                                                    <div v-if="viewVendorTopics(user_roles)">
                                                                        <div v-if="seatsSelected.filter(seat => seat.is_owner == 'Si').length > 0">
                                                                            <v-switch inset v-if="!paymentInstallmentSelected" label="¿Se requiere venta a plazos?" color="cyan" value="1" v-model="installmentSale"></v-switch>
                                                                        </div>

                                                                        <div v-if="installmentSale">
                                                                            <h4 class="text-xs px-4 py-1 rounded-full  font-bold text-purple-600 text-center mb-2">
                                                                                Complemento para venta a plazos
                                                                            </h4>

                                                                            <!-- <v-autocomplete
                                                                                v-model="saleDeptorSelected"
                                                                                clearable
                                                                                color="cyan"
                                                                                chips
                                                                                label="Buscar usuario para asignar la compra"
                                                                                hint="El usuario que se seleccione sera el responsable de la compra"
                                                                                persistent-hint=""
                                                                                :items="sale_debtors_list"
                                                                                variant="solo-filled"
                                                                                item-title="name"
                                                                                item-value="value"
                                                                                :rules="[rules.required]"
                                                                            ></v-autocomplete> -->
                                                                            <div v-if="saleDeptorSelected && saleDeptorSelected === 1">

                                                                                <v-text-field
                                                                                    class="w-full"
                                                                                    append-inner-icon="mdi-account"
                                                                                    label="Nombre"
                                                                                    color="cyan"
                                                                                    v-model="firstNameSaleDeptor"
                                                                                    hint="Nombre de para el abonado"
                                                                                    :rules="[rules.required]"
                                                                                    variant="solo"
                                                                                ></v-text-field>
                                                                                <v-text-field
                                                                                    class="w-full"
                                                                                    append-inner-icon="mdi-account"
                                                                                    label="Apellido paterno"
                                                                                    color="cyan"
                                                                                    v-model="lastNameSaleDeptor"
                                                                                    hint="Apellido paterno de para el abonado"
                                                                                    :rules="[rules.required]"
                                                                                    variant="solo"
                                                                                ></v-text-field>
                                                                                <v-text-field
                                                                                    class="w-full"
                                                                                    append-inner-icon="mdi-phone"
                                                                                    label="Numero de teléfono"
                                                                                    color="cyan"
                                                                                    v-model="phoneSaleDeptor"
                                                                                    hint="Numero de teléfono para el pago a plazos"
                                                                                    :rules="[rules.required, rules.isNumber, rules.phoneNumber]"
                                                                                    variant="solo"
                                                                                ></v-text-field>

                                                                            </div>
                                                                        </div>

                                                                    </div>

                                                                    <div v-if="purchaseStatus == 'retry'">
                                                                        <p class="py-4 px-4 rounded-lg bg-red-100 dark:bg-red-100/10 border-l-[6px] border-l-red-500 text-red-600 dark:text-white text-xs my-4">Estás en el proceso final de compra. Si se requiere agregar otro asiento, cancele la selección actual y vuelva a reintente.</p>
                                                                    </div>
                                                                    <div v-if="purchaseType == 'partido'">
                                                                        <p class="py-4 px-4 rounded-lg bg-green-100 dark:bg-green-100/10 border-l-[6px] border-l-green-500 text-green-600 dark:text-white text-xs my-4">Los boletos adquiridos serán válidos solo para un partido.</p>
                                                                    </div>
                                                                    <div v-else-if="purchaseType == 'serie'">
                                                                        <p class="py-4 px-4 rounded-lg bg-purple-100 border-l-[6px] border-l-purple-500 text-purple-600 text-xs my-4">Los boletos adquiridos serán válidos solo para dos partidos del mismo evento.</p>
                                                                    </div>
                                                                    <div v-else-if="purchaseType == 'abonado'">
                                                                        <p class="py-4 px-4 rounded-lg bg-yellow-100 dark:bg-yellow-100/10 border-l-[6px] border-l-yellow-500 text-yellow-600 dark:text-white text-xs my-4">Los boletos adquiridos serán validos solo para la temporada a la que pertenece este evento.</p>
                                                                    </div>

                                                                    <p class="opacity-50 text-right mb-3">Subtotal (tipos de precios selecionados): {{ formatPrice(totalAmount) }}</p>
                                                                    <p class="font-bold text-3xl lg:text-4xl text-right mb-3 font-bebas">Total: {{ formatPrice(totalAmount) }}</p>
                                                                    <div class="flex items-center flex-col justify-between gap-7 mt-5">
                                                                        <v-btn
                                                                            v-if="showButtonPayment"
                                                                            @click="showPaymentDrawer"
                                                                            size="large"
                                                                            class="text-none !text-white !bg-gradient-to-r !w-full !rounded-2xl !h-[60px] !from-tw-primary !to-blue-500 !border-b-4 !border-b-tw-primary-dark"
                                                                        >
                                                                            <span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos
                                                                        </v-btn>
                                                                        <v-btn
                                                                            v-else-if="!installmentSale && viewVendorTopics(user_roles)"
                                                                            :disabled="!form"
                                                                            :loading="loadingg"
                                                                            type="submit"
                                                                            size="large"
                                                                            class="text-none !text-white !bg-gradient-to-r !w-full !rounded-2xl !h-[60px] !from-tw-primary !to-blue-500 !border-b-tw-primary-dark"
                                                                        >
                                                                            <span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos
                                                                        </v-btn>
                                                                        <v-btn
                                                                            v-else-if="installmentSale && viewVendorTopics(user_roles)"
                                                                            :loading="loadingg"
                                                                            type="submit"
                                                                            size="large"
                                                                            class="text-none !text-white !bg-gradient-to-r !w-full !rounded-2xl !h-[60px] !from-tw-primary !to-blue-500 !border-b-tw-primary-dark"
                                                                        >
                                                                            <span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos
                                                                        </v-btn>
                                                                        <v-btn
                                                                            v-else
                                                                            :loading="loadingg"
                                                                            :disabled="!form"
                                                                            type="submit"
                                                                            size="large"
                                                                            class="text-none !text-white !bg-gradient-to-r !w-full !rounded-2xl !h-[60px] !from-tw-primary !to-blue-500 !border-b-tw-primary-dark"
                                                                        >
                                                                            <span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos
                                                                        </v-btn>
                                                                        <v-btn
                                                                            @click="selectZones"
                                                                            size="large"
                                                                            class="text-none !text-white !bg-gradient-to-b !w-full !rounded-2xl !h-[60px] !from-red-600 !to-red-400 !border-b-red-700"
                                                                        >
                                                                            <span class="material-symbols-outlined text-xl !w-1/2">delete</span>Cancelar seleccion
                                                                        </v-btn>
                                                                    </div>

                                                                    <v-dialog fullscreen v-model="seasonTicketsDialog" transition="dialog-bottom-transition">
                                                                        <template v-slot:activator="{ props: activatorProps }">
                                                                            <v-btn v-bind="activatorProps" variant="elevated" class="!hidden text-none !text-white !bg-gradient-to-r !from-purple-600 !to-pink-400" rounded="xl" size="large" block><span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos</v-btn>
                                                                        </template>
                                                                        <template v-slot:default="{ isActive }">
                                                                            <v-card>
                                                                                <v-toolbar class="!bg-tw-primary !to-slate-950">
                                                                                    <v-btn
                                                                                    class="!text-white"
                                                                                    icon="mdi-close"
                                                                                    @click="seasonTicketsDialog = false"
                                                                                    ></v-btn>
                                                                                    <v-spacer></v-spacer>

                                                                                    <v-toolbar-items>
                                                                                    <v-btn
                                                                                        color="white"
                                                                                        text="Aceptar"
                                                                                        variant="tonal"
                                                                                        @click="seasonTicketsDialog = false"
                                                                                    ></v-btn>
                                                                                    </v-toolbar-items>
                                                                                </v-toolbar>
                                                                                <v-form v-model="seasonTicketsForm" @submit.prevent="seasonTicktesDataConfirm" lazy-validation>
                                                                                    <v-card-text>
                                                                                        <div class="w-full max-w-[90%] mx-auto">
                                                                                            <p class="font-bold font-bebas text-sm lg:text-4xl text-center mt-5">Registra y confirma los abonos</p>

                                                                                            <div v-if="seatsSelected.length > 0 && purchaseType == 'abonado'">
                                                                                                    <div class="" v-for="(seat, index) in seatsSelected" :key="seat.seat_catalogue.code">
                                                                                                        <div>
                                                                                                            <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-600 mt-10">
                                                                                                                <thead class="text-center">
                                                                                                                    <tr>
                                                                                                                        <th scope="col" class=" p-2 text-center whitespace-nowrap">
                                                                                                                            <span class="text-xs font-semibold uppercase tracking-wide ">
                                                                                                                                zona
                                                                                                                            </span>
                                                                                                                        </th>

                                                                                                                        <th scope="col" class=" p-2 text-center whitespace-nowrap">
                                                                                                                            <span class="text-xs font-semibold uppercase tracking-wide ">
                                                                                                                                Fila
                                                                                                                            </span>
                                                                                                                        </th>

                                                                                                                        <th scope="col" class=" p-2 text-center whitespace-nowrap">
                                                                                                                            <span class="text-xs font-semibold uppercase tracking-wide ">
                                                                                                                                asiento
                                                                                                                            </span>
                                                                                                                        </th>

                                                                                                                        <th scope="col" class=" p-2 text-center whitespace-nowrap">
                                                                                                                            <span class="text-xs font-semibold uppercase tracking-wide ">
                                                                                                                            precio
                                                                                                                            </span>
                                                                                                                        </th>
                                                                                                                    </tr>
                                                                                                                </thead>
                                                                                                                <tbody class="divide-y divide-gray-200">
                                                                                                                    <tr>
                                                                                                                        <td class="size-px whitespace-nowrap p-2 text-center">
                                                                                                                            <span class="text-sm ">{{ seat.seat_catalogue.zone }}</span>
                                                                                                                        </td>
                                                                                                                        <td class="size-px whitespace-nowrap p-2 text-center">
                                                                                                                            <span class="text-sm ">{{ seat.seat_catalogue.row }}</span>
                                                                                                                        </td>
                                                                                                                        <td class="size-px whitespace-nowrap p-2 text-center">
                                                                                                                            <span class="text-sm ">{{ seat.seat_catalogue.seat }}</span>
                                                                                                                        </td>
                                                                                                                        <td class="size-px whitespace-nowrap p-2 text-center">
                                                                                                                            <span class="text-sm text-green-600 dark:text-green-400">
                                                                                                                                <div v-for="priceType in seat.price_types" :key="priceType.id">
                                                                                                                                    <div v-if="priceType.name === 'abonado'">
                                                                                                                                            {{ formatPrice(priceType.pivot.price) }}
                                                                                                                                    </div>
                                                                                                                                </div>
                                                                                                                            </span>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>

                                                                                                            <div class="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
                                                                                                                <v-text-field
                                                                                                                    class="w-full"
                                                                                                                    append-inner-icon="mdi-account"
                                                                                                                    label="Nombre"
                                                                                                                    color="cyan"
                                                                                                                    clearable
                                                                                                                    hint="Nombre de para el abonado"
                                                                                                                    :rules="[rules.required]"
                                                                                                                    v-model="seatsSelected[index].holder_name"
                                                                                                                    variant="solo"
                                                                                                                ></v-text-field>
                                                                                                                <v-text-field
                                                                                                                    class="w-full"
                                                                                                                    append-inner-icon="mdi-account"
                                                                                                                    label="Apellido paterno"
                                                                                                                    color="cyan"
                                                                                                                    clearable
                                                                                                                    hint="Apellido paterno de para el abonado"
                                                                                                                    :rules="[rules.required]"
                                                                                                                    v-model="seatsSelected[index].holder_last_name"
                                                                                                                    variant="solo"
                                                                                                                ></v-text-field>
                                                                                                            </div>
                                                                                                            <div class="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
                                                                                                                <v-text-field
                                                                                                                    class="w-full"
                                                                                                                    append-inner-icon="mdi-account"
                                                                                                                    label="Apellido materno"
                                                                                                                    color="cyan"
                                                                                                                    clearable
                                                                                                                    hint="Apellido materno de para el abonado"
                                                                                                                    :rules="[rules.required]"
                                                                                                                    variant="solo"
                                                                                                                    v-model="seatsSelected[index].holder_middle_name"
                                                                                                                ></v-text-field>
                                                                                                                <v-select
                                                                                                                    class="w-full"
                                                                                                                    append-inner-icon="mdi-file-document-check-outline"
                                                                                                                    color="cyan"
                                                                                                                    label="¿Es titular?"
                                                                                                                    hint="Para cada compra se necesita un titular"
                                                                                                                    persistent-hint=""
                                                                                                                    clearable
                                                                                                                    :items="['No', 'Si']"
                                                                                                                    :rules="[rules.required]"
                                                                                                                    v-model="seatsSelected[index].is_owner"
                                                                                                                    variant="solo"
                                                                                                                ></v-select>
                                                                                                            </div>
                                                                                                            <div class="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
                                                                                                                <v-select
                                                                                                                    class="w-full"
                                                                                                                    append-inner-icon="mdi-file-document-check-outline"
                                                                                                                    color="cyan"
                                                                                                                    label="Tipo de jersey"
                                                                                                                    hint="Tipo de jersey del abonado"
                                                                                                                    clearable
                                                                                                                    :items="['Femenino', 'Masculino', 'Unisex']"
                                                                                                                    :rules="[rules.required]"
                                                                                                                    v-model="seatsSelected[index].holder_jersey_type"
                                                                                                                    variant="solo"
                                                                                                                ></v-select>
                                                                                                                <v-select
                                                                                                                    class="w-full"
                                                                                                                    append-inner-icon="mdi-file-document-check-outline"
                                                                                                                    color="cyan"
                                                                                                                    label="Talla de jersey"
                                                                                                                    hint="Talla de jersey del abonado"
                                                                                                                    clearable
                                                                                                                    :items="['S', 'M', 'L', 'XL', 'XXL']"
                                                                                                                    :rules="[rules.required]"
                                                                                                                    v-model="seatsSelected[index].holder_jersey_size"
                                                                                                                    variant="solo"
                                                                                                                ></v-select>
                                                                                                            </div>
                                                                                                            <v-textarea
                                                                                                                class="w-full"
                                                                                                                append-inner-icon="mdi-file-document"
                                                                                                                label="Descripción adicional"
                                                                                                                row-height="30"
                                                                                                                color="cyan"
                                                                                                                clearable
                                                                                                                rows="3"
                                                                                                                auto-grow
                                                                                                                v-model="seatsSelected[index].description"
                                                                                                                variant="solo"
                                                                                                            ></v-textarea>
                                                                                                            <div v-if="seatsSelected[index].is_owner == 'Si'">
                                                                                                                <div class="flex flex-col lg:flex-row items-center justify-between lg:gap-10">
                                                                                                                    <v-text-field
                                                                                                                        class="w-full"
                                                                                                                        append-inner-icon="mdi-qrcode"
                                                                                                                        label="Código postal"
                                                                                                                        color="cyan"
                                                                                                                        clearable
                                                                                                                        hint="Ingresa el codigo postal del titular"
                                                                                                                        :rules="[rules.required, rules.isNumber]"
                                                                                                                        v-model="seatsSelected[index].holder_zip_code"
                                                                                                                        variant="solo"
                                                                                                                        ></v-text-field>
                                                                                                                    <v-text-field
                                                                                                                        class="w-full"
                                                                                                                        append-inner-icon="mdi-phone"
                                                                                                                        label="Numero de teléfono"
                                                                                                                        color="cyan"
                                                                                                                        clearable
                                                                                                                        hint="Ingresa el numero de teléfono del titular"
                                                                                                                        :rules="[rules.required, rules.isNumber]"
                                                                                                                        v-model="seatsSelected[index].holder_phone"
                                                                                                                        variant="solo"
                                                                                                                    ></v-text-field>
                                                                                                                </div>
                                                                                                                <div class="flex items-start justify-between gap-5">
                                                                                                                    <v-select
                                                                                                                        v-if="viewVendorTopics(user_roles)"
                                                                                                                        append-inner-icon="mdi-cash"
                                                                                                                        color="cyan"
                                                                                                                        label="¿Pago a meses?"
                                                                                                                        hint="Meses a intereses"
                                                                                                                        clearable
                                                                                                                        variant="solo"
                                                                                                                        :items="payment_installments"
                                                                                                                        v-model="paymentInstallmentSelected"
                                                                                                                    ></v-select>
                                                                                                                    <v-text-field
                                                                                                                        append-inner-icon="mdi-email"
                                                                                                                        label="Correo electrónico del titular"
                                                                                                                        color="cyan"
                                                                                                                        autocomplete="email"
                                                                                                                        clearable
                                                                                                                        hint="Ingresa el correo electrónico del titular"
                                                                                                                        :rules="[rules.required, rules.isEmail]"
                                                                                                                        v-model="seatsSelected[index].holder_email"
                                                                                                                        variant="solo"
                                                                                                                    ></v-text-field>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </v-card-text>

                                                                                    <v-card-actions class="w-full max-w-[90%] mx-auto mb-16">
                                                                                        <v-spacer></v-spacer>
                                                                                        <v-btn color="red" size="large" variant="tonal" class="text-none !px-8 !h-[70px] !rounded-2xl !mr-2" text="Cancelar" @click="isActive.value = false"></v-btn>
                                                                                        <div v-if="seatsSelected.filter(seat => seat.is_owner == 'Si').length != 1">
                                                                                            <v-btn disabled type="submit" size="large" variant="elevated" class="text-none !bg-green-500 !text-white !px-8 !h-[70px] !rounded-2xl" text="Confirmar datos"></v-btn>
                                                                                        </div>
                                                                                        <div v-else>
                                                                                            <v-btn :disabled="!seasonTicketsForm" type="submit" size="large" variant="elevated" class="text-none !bg-green-500 !text-white !px-8 !h-[70px] !rounded-2xl" text="Confirmar datos"></v-btn>
                                                                                        </div>
                                                                                    </v-card-actions>
                                                                            </v-form>
                                                                            </v-card>
                                                                        </template>
                                                                    </v-dialog>
                                                                    <v-dialog max-width="700">
                                                                        <template v-slot:activator="{ props: activatorProps }">
                                                                            <v-btn id="on-submit-confirm" v-bind="activatorProps" variant="elevated" class="!hidden text-none !text-white !bg-gradient-to-r !from-purple-600 !to-pink-400" rounded="xl" size="large" block><span class="material-symbols-outlined text-xl !w-1/2">shopping_cart</span>Adquirir boletos</v-btn>
                                                                        </template>
                                                                        <template v-slot:default="{ isActive }">
                                                                            <v-card class="!relative">
                                                                                <div class="p-7 relative overflow-y-auto">
                                                                                    <h2 class="font-bebas font-bold text-3xl">Resumen de compra</h2>
                                                                                    <h2 class="font-bebas font-bold text-2xl mt-5">Total: {{ formatPrice(totalAmount) }}</h2>
                                                                                    <div class="flex flex-col lg:flex-row gap-3">
                                                                                        <v-switch inset color="cyan" label="Acepto terminos y condiciones" v-model="acceptTerms"></v-switch>
                                                                                    </div>
                                                                                    <!-- Tabla de asientos seleccionados -->
                                                                                    <v-data-table :items="seatsSelected" class="" hide-default-footer items-per-page="-1">
                                                                                        <template v-slot:headers>
                                                                                        <tr>
                                                                                            <th>Asiento</th>
                                                                                            <th>Tipo</th>
                                                                                            <th>Precio</th>
                                                                                            <th v-if="seatsSelected.some(item => item.promotion_id)">Promoción</th>
                                                                                            <th v-if="purchaseType == 'abonado'">Abonado</th>
                                                                                            <th v-if="purchaseType == 'abonado'">Titular</th>
                                                                                            <th v-if="purchaseType == 'abonado'">Género</th>
                                                                                            <th v-if="purchaseType == 'abonado'">Talla</th>
                                                                                        </tr>
                                                                                        </template>
                                                                                        <template v-slot:item="{ item }">
                                                                                        <tr>
                                                                                            <td>{{ item.seat_catalogue.code }}</td>
                                                                                            <td>{{ item.seat_catalogue.seat_type.name }}</td>
                                                                                            <td>{{ formatPrice(item.final_price) }}</td>
                                                                                            <td v-if="item.promotion_id">{{ item.promotion_id ? "Aplicada": '' }}</td>
                                                                                            <td v-if="purchaseType == 'abonado'">{{ `${item.holder_name} ${item.holder_last_name} ${item.holder_middle_name}` }}</td>
                                                                                            <td v-if="purchaseType == 'abonado'">{{ item.is_owner }}</td>
                                                                                            <td v-if="purchaseType == 'abonado'">{{ item.holder_jersey_type }}</td>
                                                                                            <td v-if="purchaseType == 'abonado'">{{ item.holder_jersey_size }}</td>
                                                                                        </tr>
                                                                                        </template>
                                                                                    </v-data-table>
                                                                                    <!-- Información del titular antes de la tabla -->
                                                                                    <div v-if="seatsSelected.some(seat => seat.is_owner === 'Si')" class="mt-4">
                                                                                        <h2 class="font-bebas font-bold text-2xl text-right lg:text-left">Titular</h2>
                                                                                        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mt-2 text-right">
                                                                                            <div>Código Postal: <span>{{ getHolderInfo('holder_zip_code') }}</span></div>
                                                                                            <div>Teléfono: <span>{{ getHolderInfo('holder_phone') }}</span></div>
                                                                                            <div>Email: <span>{{ getHolderInfo('holder_email') }}</span></div>
                                                                                        </div>
                                                                                    </div>

                                                                                    <div class="flex flex-col items-end gap-4 mt-5 opacity-60 text-right pb-20">
                                                                                        <div>Metodos de Pago: <span>{{ paymentTypesSelected.map(payment => formatFirstLetterUppercase(payment.name)).join(', ') }}</span></div>
                                                                                        <div>Tipo de Compra: <span>{{ installmentSale ? "Pago a plazos" : "Pago al contado" }}</span></div>
                                                                                        <div v-if="seatsSelected.some(item => item.promotion_id)">Promoción: <span>{{ selectedPromotion ? `${selectedPromotion.name} (${formatFirstLetterUppercase(selectedPromotion.type)})` :'' }}</span></div>
                                                                                        <div v-if="installmentSale">Pago Inicial: <span>{{ formatPrice((parseFloat(amountToPayCard) || 0) + (parseFloat(amountToPayCash) || 0)) }}</span></div>
                                                                                        <div v-if="installmentSale">Total restante : <span>{{ formatPrice( parseFloat(totalAmount) - ((parseFloat(amountToPayCard) || 0) + (parseFloat(amountToPayCash) || 0))  ) }}</span></div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="flex items-center justify-end md:gap-3 absolute bottom-5 pt-5 right-5 backdrop-blur-xl">
                                                                                        <v-btn color="red" variant="tonal" class="text-none !px-4 lg:!px-8 mr-2 !h-[60px] lg:!h-[70px] !rounded-2xl !border-b-4 !border-b-red-700/50" text="Cancelar" @click="isActive.value = false"></v-btn>
                                                                                        <v-btn :loading="loading" variant="elevated" class="text-none !px-4 lg:!px-8 !h-[60px] lg:!h-[70px] !rounded-2xl !border-b-4 !border-b-green-700 !bg-green-500 !text-white" text="Reservar y comprar" @click="onSubmitConfirm(isActive)"></v-btn>
                                                                                    </div>
                                                                            </v-card>
                                                                        </template>
                                                                    </v-dialog>
                                                                </div>
                                                            </v-expansion-panel-text>
                                                            </v-form>
                                                        </v-expansion-panel>
                                                    </v-expansion-panels>

                                                    <div class="my-5">
                                                        <div v-if="viewVendorTopics(user_roles) && tab == 'payment'" class="text-center">
                                                            <v-snackbar
                                                                v-model="snackbar"
                                                                variant="elevated"
                                                                color="white"
                                                                multi-line
                                                                timeout="-1"
                                                                location="top"
                                                                class="!w-full !m-0 !rounded-none"
                                                                min-width="100%"
                                                                min-height="90px"
                                                                rounded="0"
                                                            >
                                                            <div class="flex items-center justify-center gap-5 max-w-5xl w-full h-full mx-auto">
                                                                <v-text-field
                                                                    label="Monto total"
                                                                    variant="solo"
                                                                    color="cyan"
                                                                    clearable
                                                                    hint="Monto total a pagar"
                                                                    persistent-hint=""
                                                                    rounded="lg"
                                                                    v-model.number="totalAmount"
                                                                    :error-messages="paymentFileds.total.errorMessage.value"
                                                                    readonly
                                                                ></v-text-field>
                                                                <v-text-field
                                                                    label="Monto recibido"
                                                                    variant="solo"
                                                                    color="cyan"
                                                                    clearable
                                                                    hint="Monto recibido por el cliente"
                                                                    persistent-hint=""
                                                                    rounded="lg"
                                                                    v-model="amountReceived"
                                                                    :error-messages="paymentFileds.amount_received.errorMessage.value"
                                                                    readonly
                                                                ></v-text-field>
                                                                <v-text-field
                                                                    label="Cambio"
                                                                    variant="solo"
                                                                    color="cyan"
                                                                    clearable
                                                                    hint="Cambio a devolver al cliente"
                                                                    persistent-hint=""
                                                                    rounded="lg"
                                                                    v-model.number="amountReturned"
                                                                    :error-messages="paymentFileds.amount_returned.errorMessage.value"
                                                                    readonly
                                                                ></v-text-field>
                                                            </div>
                                                            </v-snackbar>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </main>
        </div>

        <Footer />
    </MasterLayout>
</template>

<style scoped>
.v-parallax {
    z-index: -10;
}

.animate-spin {
    animation: spin 2s linear infinite;
}
.animate-ping {
    animation:  ping 3s linear infinite;
}
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce {
  animation: bounce 1.5s infinite;
}
@media (min-width: 1024px) {
    .animate-bounce {
    animation: bounce 1.5s infinite;
    }
}

.v-dialog--fullscreen > .v-overlay__content > .v-card, .v-dialog--fullscreen > .v-overlay__content > .v-sheet, .v-dialog--fullscreen > .v-overlay__content > form > .v-card, .v-dialog--fullscreen > .v-overlay__content > form > .v-sheet {
    min-height: 100%;
    min-width: 100%;
    border-radius: 0px !important;
}
</style>
