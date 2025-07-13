<script setup>
import { nextTick, onMounted, ref, onBeforeMount, watch, computed } from 'vue';
import EstadioHdx from '@/Components/SectionsHdx/EstadioHdx.vue';
import ZonaA from '@/Components/SectionsHdx/ZonaA.vue';
import ZonaC from '@/Components/SectionsHdx/ZonaC.vue';
import ZonaB from '@/Components/SectionsHdx/ZonaB.vue';
import ZonaE from '@/Components/SectionsHdx/ZonaE.vue';
import ZonaF from '@/Components/SectionsHdx/ZonaF.vue';
import ZonaH from '@/Components/SectionsHdx/ZonaH.vue';
import panzoom from 'panzoom';
import ErrorSession from '@/Components/ErrorSession.vue';
import Loader from '@/Components/Loader.vue';
import SuccessSession from '@/Components/SuccessSession.vue';
import useDateFormat from '@/composables/dateFormat';
import useStringFormat from '@/composables/stringFormat';
import useObjectsFormat from '@/composables/objectsFormat';
import { toast } from 'vue3-toastify'

const { cloneObject, detectChangesInArraysOrObjects } = useObjectsFormat();

const { dateFormat } = useDateFormat();
const { formatFirstLetterUppercase } = useStringFormat();

const props = defineProps({
    event: {
        type: Object,
        required: true,
    }
});

const dataEvent = ref({
    event: null,
    c_zone: null,
    c_rows: null,
    a_zone: null,
    a_rows: null,
    b_zone: null,
    b_rows: null,
    e_zone: null,
    e_rows: null,
    f_zone: null,
    f_rows: null,
    h_zone: null,
    h_rows: null,
});

function loadSvg(id) {

    setTimeout(() => {
        const zoneId = document.querySelector(`#${id}`);
        if (zoneId) {
            panZoomInstance = panzoom(zoneId);
            if (id != 'zones_hdx') {
                const { x, y } = getCenterCoordinates(id);
                if (window.innerWidth > 1024) {
                    panZoomInstance.smoothZoom(x, y, 2.3);
                } else {
                    panZoomInstance.smoothZoom(x, y, 5);
                }
            }
            if (window.innerWidth > 1024 && id == 'zones_hdx') {
                panZoomInstance.smoothZoom(400, 360, 0.6);
            }
        } else {
            alert('Zona no encontrada');
        }
    }, 300);
}

const getCenterCoordinates = (id) => {
    const svgElement = document.querySelector(`#${id}`);
    const { width, height } = svgElement.getBoundingClientRect();
    if (window.innerWidth > 1024) {
        return { x: width / -7, y: height / 2.5 };
    } else {
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

const panel = ref([0, 1]);

const isSvgVisible = ref(true);
const selectedSection = ref('');
const viewSelectedSection = ref('Zonas HDX');

const handleSectionClick = (section) => {

    selectedSection.value = section;
    isSvgVisible.value = false;

    const stadiumHdxImgID = '#stadium-hdx-img';

    const zones = {
        zonaC: {
            loadSvg: 'zonaC',
            viewSelectedSection: 'Zona C',
            rows: dataEvent.value.c_rows,
            classListRemove: 'rotate-0',
            classListAdd: 'rotate-90',
        },
        zonaA: {
            loadSvg: 'zonaA',
            viewSelectedSection: 'Zona A',
            rows: dataEvent.value.a_rows,
            classListRemove: 'rotate-0',
            classListAdd: 'rotate-90',
        },
        zonaB: {
            loadSvg: 'zonaB',
            viewSelectedSection: 'Zona B',
            rows: dataEvent.value.b_rows,
            classListRemove: 'rotate-0',
            classListAdd: 'rotate-90',
        },
        zonaE: {
            loadSvg: 'zonaE',
            viewSelectedSection: 'Zona E',
            rows: dataEvent.value.e_rows,
            classListRemove: 'rotate-0',
            classListAdd: 'rotate-90',
        },
        zonaF: {
            loadSvg: 'zonaF',
            viewSelectedSection: 'Zona F',
            rows: dataEvent.value.f_rows,
            classListRemove: 'rotate-0',
            classListAdd: 'rotate-90',
        },
        zonaH: {
            loadSvg: 'zonaH',
            viewSelectedSection: 'Zona H',
            rows: dataEvent.value.h_rows,
            classListRemove: 'rotate-0',
            classListAdd: 'rotate-90',
        },
    }

    loadSvg(zones[section].loadSvg);
    viewSelectedSection.value = zones[section].viewSelectedSection;
    rows.value = zones[section].rows;
    const stadiumHdxImg = document.querySelector(stadiumHdxImgID);
    stadiumHdxImg.classList.remove(zones[section].classListRemove);
    stadiumHdxImg.classList.add(zones[section].classListAdd);
};

const selectZones = () => {
    loadSvg('zones_hdx');
    isSvgVisible.value = true;
    selectedSection.value = '';
    rows.value = [];
    viewSelectedSection.value = 'Zonas HDX';
    const stadiumHdxImg = document.querySelector('#stadium-hdx-img');
    stadiumHdxImg.classList.remove('rotate-90');
    stadiumHdxImg.classList.add('rotate-0');
};

const loadSeat = ref(false);

const loadEvent = () => {

    loadSeat.value = true;

    const getUniqueRows = (seats) => [...new Set(seats.map(seat => seat.seat_catalogue.row))];

    axios.get(route('event.management.showManagement', props.event.id)).then((response) => {

        dataEvent.value.event = response.data.event;
        dataEvent.value.c_zone = response.data.c_zone;
        dataEvent.value.c_rows = getUniqueRows(response.data.c_zone);
        dataEvent.value.a_zone = response.data.a_zone;
        dataEvent.value.a_rows = getUniqueRows(response.data.a_zone);
        dataEvent.value.b_zone = response.data.b_zone;
        dataEvent.value.b_rows = getUniqueRows(response.data.b_zone);
        dataEvent.value.e_zone = response.data.e_zone;
        dataEvent.value.e_rows = getUniqueRows(response.data.e_zone);
        dataEvent.value.f_zone = response.data.f_zone;
        dataEvent.value.f_rows = getUniqueRows(response.data.f_zone);
        dataEvent.value.h_zone = response.data.h_zone;
        dataEvent.value.h_rows = getUniqueRows(response.data.h_zone);
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
        loadSeat.value = false;
    });
}

onMounted(() => {
    nextTick(() => {
        loadSvg('zones_hdx');
    });
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeMount(() => {
    loadEvent();
    loadPriceTypes();
    loadPricesCatalog();
});

const windowScreenWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
    windowScreenWidth.value = window.innerWidth;
};

const rows = ref([]);
const availableRows = ((index) => {

    const rowsOfSelect = rowOfViewSelectedSeat(index);
    const rowsAllOfSelect = rowsOfViewSelectedSeat();

    const rowsSelect = rowsAllOfSelect.filter(element => !rowsOfSelect.includes(element));
    const rowsForSelect = rows.value.filter(element => !rowsSelect.includes(element));

    return rowsForSelect;
});

const addSeat = (seat) => {

    if (!searchForAlreadySelectedSeat(seat)) {

        if (rowSelected.value !== null) {

            seat.price_types_update = createPriceType(rowSelected.value.pricesTypes);

            rowSelected.value.seatsForRows.push(seat);

            if (numberOfRowSeats.value == 1) {
                numberOfRowSeats.value = 0;
                rowSelected.value = null;
            }else{
                numberOfRowSeats.value = (--numberOfRowSeats.value);
            }
        }else{

            seat.price_types_update = createPriceType();

            viewSelectedSeat.value.individualSeats.push(seat);
        }

        seatsSelected.value.push(seat)

    } else {

        seatsSelected.value = seatsSelected.value.filter((s) => s.seat_catalogue.code !== seat.seat_catalogue.code);

        deleteAlreadySelectedSeat(seat);

    }
}

const createPriceType = (priceTypeValue = []) => {

    const priceType = [];

    if (priceTypeValue.length) {
        priceTypeValue.forEach(price => {
            priceType.push(
                {
                    "id": price.id,
                    "price": price.price
                }
            );
        });

    }else{
        pricesType.value.forEach(price => {
            priceType.push(
                {
                    "id": price.id,
                    "price": null
                }
            );
        });
    }

    return priceType;
}

const pricesType = ref([]);
const loadPriceTypes = () => {
    axios.get(route('get.all.price.types')).then((response) => {
        pricesType.value = response.data;

        addZone();
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
    });
}

const pricesCatalog = ref([]);
const loadPricesCatalog = () => {
    axios.post(route('get.all.for.stadium'), { stadium_id: props.event.serie.global_season.stadium_id}).then((response) => {
        pricesCatalog.value = response.data;
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
    });
}

const timeout = ref(null);
function firstOrCreatePrice(event){

    clearTimeout(timeout.value);
    timeout.value = setTimeout(() => {
        const exists = pricesCatalog.value.some((item) => item.price === event);

        if (!exists && event) {
            axios.post(route('first.or.create.for.stadium'), {
                price: event,
                stadium_id: props.event.serie.global_season.stadium_id
            })
            .then((response) => {
                const newPriceExists = pricesCatalog.value.some((item) => item.price === response.data.price);
                if (!newPriceExists) {
                    pricesCatalog.value.push(response.data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            .finally(() => {
            });
        }
    }, 1000);
};

const seatsSelected = ref([]);

function addRowsForSelect(){
    return {
        rows: ref([]),
        pricesTypes: ref(createPriceType()),
        seatsForRows:ref([])
    };
}

const viewSelectedSeat = ref({
    event_id:props.event.id,
    rows:ref([]),
    individualSeats:ref([])
});

function rowOfViewSelectedSeat(index){
    return viewSelectedSeat.value.rows[index].rows;
}

function rowsOfViewSelectedSeat(){
    return viewSelectedSeat.value.rows.flatMap((row)=> row.rows );
}

function addWatchForSelect(row) {
    watch(row.rows, (newRows, oldRows) => {

            let rows = [];

            if (newRows.length > oldRows.length) {

                rows = newRows.filter(item => !oldRows.includes(item));

            } else if (oldRows.length > newRows.length) {

                rows = oldRows.filter(item => !newRows.includes(item));
            }

            listOfSeatsToSelect(selectedSection.value, row, rows);
    });
}

const watchForPriceTypeofSelect = (row) => {

    let oldCopy = cloneObject(row.pricesTypes.value);

    watch(row.pricesTypes.value, (newRows, oldRows) => {

        const changes = detectChangesInArraysOrObjects(oldCopy, newRows);

        if(Array.isArray(changes) && changes.length){
            row.seatsForRows.value = row.seatsForRows.value.map((seat, index) => {
                seat.price_types_update.forEach((price, index)=>{
                    if (price.id == changes[0].newValue.id ) {
                        price.price = changes[0].newValue.price;
                    }
                });
                return seat;
            });
        }
        oldCopy = cloneObject(newRows);
    },{ deep: true });
}

const seatsAutoClic = ref([]);
const autoClicInSeats = (seats) =>{
    seatsAutoClic.value = seats;
}

const rowSelected = ref(null);
const numberOfRowSeats = ref(null);

const listOfSeatsToSelect = (selectedSection, row, rows) => {

    let seats = [];

    if (selectedSection === 'zonaC') {

        seats = dataEvent.value.c_zone.filter((seat) => rows.includes(seat.seat_catalogue.row));

    } else if (selectedSection === 'zonaA') {

        seats = dataEvent.value.a_zone.filter((seat) => rows.includes(seat.seat_catalogue.row));

    } else if (selectedSection === 'zonaB') {

        seats = dataEvent.value.b_zone.filter((seat) => rows.includes(seat.seat_catalogue.row));

    } else if (selectedSection === 'zonaE') {

        seats = dataEvent.value.e_zone.filter((seat) => rows.includes(seat.seat_catalogue.row));

    } else if (selectedSection === 'zonaF') {

        seats = dataEvent.value.f_zone.filter((seat) => rows.includes(seat.seat_catalogue.row));

    } else if (selectedSection === 'zonaH') {

        seats = dataEvent.value.h_zone.filter((seat) => rows.includes(seat.seat_catalogue.row));
    }

    rowSelected.value = row;
    numberOfRowSeats.value = seats.length;
    autoClicInSeats(seats);
}

const searchForAlreadySelectedSeat  = (seat) => {

    const isFoundViewSelectedSeat = viewSelectedSeat.value.individualSeats.find((s) => s.seat_catalogue.code === seat.seat_catalogue.code);

    if (isFoundViewSelectedSeat) {
        return true;
    }

    const isFoundSeatsForRows = viewSelectedSeat.value.rows.flatMap((row) => row.seatsForRows).find((s) => s.seat_catalogue.code === seat.seat_catalogue.code);

    if (isFoundSeatsForRows) {
        return true;
    }

    return false;
}

const deleteAlreadySelectedSeat  = (seat) => {

    const indexViewSelectedSeat = viewSelectedSeat.value.individualSeats.findIndex((s) => s.seat_catalogue.code === seat.seat_catalogue.code);

    if (indexViewSelectedSeat !== -1) {

        viewSelectedSeat.value.individualSeats.splice(indexViewSelectedSeat, 1);
    }

    if (indexViewSelectedSeat == -1) {

        viewSelectedSeat.value.rows.forEach((row) => {

            const indexSeatsForRows = row.seatsForRows.findIndex((s) => s.seat_catalogue.code === seat.seat_catalogue.code);

            if (indexSeatsForRows !== -1) {
                row.seatsForRows.splice(indexSeatsForRows, 1);
            }
        });
    }
}

const removeSeat = (seat) => {
    autoClicInSeats([seat]);
}

function removeZone(row, index) {

    const arraySeats = cloneObject(row.seatsForRows);

    autoClicInSeats(arraySeats);

    const checkInterval = setInterval(() => {
        if (Array.isArray(arraySeats)) {

            clearInterval(checkInterval);

            viewSelectedSeat.value.rows.splice(index, 1);
        }
    }, 100);
}

function addZone() {

    const addRowsForSelectTemp = addRowsForSelect();

    watchForPriceTypeofSelect(addRowsForSelectTemp)

    addWatchForSelect(addRowsForSelectTemp);

    viewSelectedSeat.value.rows.push(addRowsForSelectTemp);
}

const loadUpdateSeatPrice = ref(false);

const savePricesForSeat = () => {

    loadUpdateSeatPrice.value = true;

    axios.post(route('update.seat.price'), {
        seats: seatsSelected.value
    }).then((response) => {
        updateSeats(response.data);
        toast('Precios actualizados con exito!', {
            "theme": "auto",
            "type": "success",
            "dangerouslyHTMLString": true
        })
    })
    .catch((error) => {
        console.error('Error:', error);
        toast(`${error.response.data.message}`, {
            "theme": "auto",
            "type": "error",
            "dangerouslyHTMLString": true
        })
    })
    .finally(() => {
        loadUpdateSeatPrice.value = false;
    });
};

const updateSeats = (zones) => {

    const updateZone = (currentZone, receivedZone) => {

        const seatsModified = [];

        const newData = currentZone.map((seat) => {

            let seatTemp = receivedZone.find((receivedSeat) => receivedSeat.seat_catalogue.code === seat.seat_catalogue.code);

            if (seatTemp) {
                seat.price_types = seatTemp.price_types;
                seat.isUpdate = true;
                seatsModified.push(seat);
            }

            return seat;
        });

        return {
            newData: newData,
            seatsModified: seatsModified
        }
    };

    ["c_zone","a_zone", "b_zone", "e_zone", "f_zone", "h_zone"].forEach((zone) => {
        if (zones[zone].length) {
            const data = updateZone(dataEvent.value[zone], zones[zone]);

            dataEvent.value[zone] = data.newData;
            data.seatsModified.forEach((seat) => addSeat(seat));
        };
    });

    resetSelectedSeats();
};

const resetSelectedSeats = () => {
    viewSelectedSeat.value.rows = [];
    addZone();
}

</script>

<template>

    <Loader :activate="loadSeat" />

    <SuccessSession />
    <ErrorSession />

    <section class="max-w-full h-full bg-white">
        <div class="flex w-full h-full min-h-screen flex-col sm:flex-row">
            <div class="flex justify-start items-start 2xl:w-[70%] lg:w-[70%] md:w-full">
                <div class="grid gap-10 md:gap-8 lg:gap-5 w-full p-4">
                    <div class="h-[2vh] flex justify-start items-center">
                        <p class="font-bold text-xl">Mapa de asignación de Precios</p>
                    </div>
                    <div class="h-[10vh] flex justify-start items-center">
                        <div
                            class="grid grid-cols-2 lg:grid-cols-6 items-center w-full gap-2 mt-7">
                            <div class="flex items-center flex-col gap-2">
                                <div
                                    class="h-7 lg:h-9 w-full bg-yellow-500 flex items-center justify-center rounded-md">
                                    <span class="material-symbols-outlined text-sm text-white">done_outline</span>
                                </div>
                                <p class="text-xs lg:text-base">Disponible</p>
                            </div>
                            <div class="flex items-center flex-col gap-2">
                                <div
                                    class="h-7 lg:h-9 w-full bg-purple-500 flex items-center justify-center rounded-md">
                                    <span class="material-symbols-outlined text-sm text-white">star</span>
                                </div>
                                <p class="text-xs lg:text-base">Precio Asignado</p>
                            </div>
                            <div class="flex items-center flex-col gap-2">
                                <div
                                    class="h-7 lg:h-9 w-full bg-green-500 flex items-center justify-center rounded-md">
                                    <span class="material-symbols-outlined text-sm text-white">web_traffic</span>
                                </div>
                                <p class="text-xs lg:text-base">Seleccionado</p>
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex flex-col lg:flex-row items-center justify-between w-full gap-3 my-3">
                        <div class="flex items-center gap-3 flex-col md:flex-row">
                            <div class="flex items-center gap-3">
                                <v-btn @click="zoomIn" color="purple" variant="tonal" class="text-none" rounded="xl"
                                    size="large"><span
                                        class="material-symbols-outlined text-2xl">add</span>zoom</v-btn>
                                <v-btn @click="zoomOut" color="purple" variant="tonal" class="text-none" rounded="xl"
                                    size="large"><span
                                        class="material-symbols-outlined text-2xl">remove</span>zoom</v-btn>
                            </div>
                        </div>
                        <div class="items-center gap-2 hidden lg:flex relative">
                            <div class="font-bold text-3xl text-center">
                                {{ viewSelectedSection }}
                            </div>
                            <v-dialog max-width="800">
                                <template v-slot:activator="{ props: activatorProps }">
                                    <div v-bind="activatorProps" class="!absolute -top-4 -right-6 ">
                                        <span
                                            class="material-symbols-outlined text-2xl text-purple-600 animate-bounce cursor-pointer">photo_library</span>
                                    </div>
                                </template>
                                <template v-slot:default="{ isActive }">
                                    <v-card :title="'Imagen de referencia para la ' + viewSelectedSection">
                                        <v-card-text>
                                            <img class="w-full h-auto rounded-xl"
                                                src="../../../../../../public/img/zonashdx/zona-a-img.jpg"
                                                alt="zona hdx">
                                        </v-card-text>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="purple" rounded="xl" variant="tonal"
                                                class="text-none !px-6" text="Cerrar"
                                                @click="isActive.value = false"></v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </template>
                            </v-dialog>
                        </div>
                        <div class="flex items-center gap-3">
                            <v-btn @click="resetZoom" color="purple" variant="tonal" class="text-none" rounded="xl"
                                size="large"><span
                                    class="material-symbols-outlined text-2xl">my_location</span>reset</v-btn>

                            <v-btn @click="selectZones" color="purple" variant="tonal" class="text-none" rounded="xl"
                                size="large"><span
                                    class="material-symbols-outlined text-2xl">location_on</span>zonas</v-btn>
                        </div>
                    </div>
                    <div
                        class="h-[60vh] flex justify-center items-start cursor-grab overflow-hidden relative">
                        <div
                            class="size-[100px] lg:size-36 border border-gray-300 absolute top-0 left-0 z-20 bg-white rounded-lg flex items-center justify-center">
                            <img id="stadium-hdx-img"
                                class="size-20 lg:size-32 rotate-0 transition-all duration-1000"
                                src="../../../../../../public/img/stadium-hdx-img.svg" alt="Webiste image">
                        </div>
                        <div v-if="isSvgVisible">
                            <EstadioHdx @handle-section-click="handleSectionClick" />
                        </div>
                        <div v-if="selectedSection == 'zonaC'" class="">
                            <ZonaC @add-seat="addSeat" v-bind:action="'price'" v-bind:seats="dataEvent.c_zone"
                                v-bind:seatsSelected="seatsSelected" v-bind:seatsAutoClic="seatsAutoClic"/>
                        </div>
                        <div v-if="selectedSection == 'zonaA'" class="">
                            <ZonaA @add-seat="addSeat" v-bind:action="'price'" v-bind:seats="dataEvent.a_zone"
                                v-bind:seatsSelected="seatsSelected" v-bind:seatsAutoClic="seatsAutoClic"/>
                        </div>
                        <div v-if="selectedSection == 'zonaB'" class="">
                            <ZonaB @add-seat="addSeat" v-bind:action="'price'" v-bind:seats="dataEvent.b_zone"
                                v-bind:seatsSelected="seatsSelected" v-bind:seatsAutoClic="seatsAutoClic"/>
                        </div>
                        <div v-if="selectedSection == 'zonaE'" class="">
                            <ZonaE @add-seat="addSeat" v-bind:action="'price'" v-bind:seats="dataEvent.e_zone"
                                v-bind:seatsSelected="seatsSelected" v-bind:seatsAutoClic="seatsAutoClic"/>
                        </div>
                        <div v-if="selectedSection == 'zonaF'" class="">
                            <ZonaF @add-seat="addSeat" v-bind:action="'price'" v-bind:seats="dataEvent.f_zone"
                                v-bind:seatsSelected="seatsSelected" v-bind:seatsAutoClic="seatsAutoClic"/>
                        </div>
                        <div v-if="selectedSection == 'zonaH'" class="">
                            <ZonaH @add-seat="addSeat" v-bind:action="'price'" v-bind:seats="dataEvent.h_zone"
                                v-bind:seatsSelected="seatsSelected" v-bind:seatsAutoClic="seatsAutoClic"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-start items-start shadow-lg 2xl:w-[30%] lg:w-[30%] md:w-full">
                <div class="grid gap-1 w-full py-10 px-3">
                    <div class="">
                        <div class="py-2">
                            <h2 class="text-2xl font-bold lg:block">{{
                                formatFirstLetterUppercase(event.name) }}
                            </h2>
                        </div>
                        <div
                            class="flex flex-col lg:flex-row items-start lg:items-center gap-2 py-6">
                            <div
                                class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
                                <span class="material-symbols-outlined text-xl">location_on</span>
                                {{ formatFirstLetterUppercase(event.serie.global_season.stadium.club_name) }}
                            </div>
                            <p
                                class="inline-flex items-center gap-1.5 py-1 px-3 sm:py-2 sm:px-4 rounded-full text-xs text-gray-800 bg-gray-100 hover:bg-gray-200">
                                📅 | {{ dateFormat(event.start_date) }}
                            </p>
                        </div>
                    </div>
                    <div class="h-full flex justify-start items-start">
                        <div class="grid gap-2 w-full p-1">
                            <div
                                class="relative overflow-hidden min-h-28 bg-gray-800 text-center rounded-xl lg:rounded-tr-none">
                                <div class="mt-10 text-white text-xl">
                                    Asientos seleccionados
                                </div>

                                <figure class="absolute inset-x-0 bottom-0 -mb-px">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 1920 100.1">
                                        <path fill="currentColor" class="fill-white"
                                            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z">
                                        </path>
                                    </svg>
                                </figure>
                            </div>
                            <div class="relative z-10 -mt-12">
                                <span
                                    class="mx-auto flex justify-center items-center size-[62px] rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm">
                                    <svg class="shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="16"
                                        height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z">
                                        </path>
                                        <path
                                            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z">
                                        </path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center flex-col gap-7 my-4">
                        <div class="text-center">
                            <v-btn @click="savePricesForSeat" :loading="loadUpdateSeatPrice"> Guardar Precios</v-btn>
                        </div>
                    </div>

                    <div v-if="!isSvgVisible" class="flex justify-end">
                        <v-btn class="" @click="addZone()">
                            <span class="material-symbols-outlined text-lg">add_row_below</span>
                        </v-btn>
                    </div>
                    <div v-if="!isSvgVisible">
                        <v-expansion-panels>
                            <v-expansion-panel
                                :title="'Asientos individuales seleccionados #'+viewSelectedSeat.individualSeats.length">
                                <v-expansion-panel-text>

                                    <div class="grid auto-cols-max grid-cols-4 gap-4">
                                        <div class="p-2 text-center whitespace-nowrap">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                Z.
                                            </span>
                                        </div>
                                        <div class="p-2 text-center whitespace-nowrap">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                F.
                                            </span>
                                        </div>
                                        <div class="p-2 text-center whitespace-nowrap">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                A.
                                            </span>
                                        </div>
                                        <div class="p-2 text-center whitespace-nowrap">
                                            <span
                                                class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                Acc.
                                            </span>
                                        </div>
                                    </div>

                                    <v-virtual-scroll :items="viewSelectedSeat.individualSeats" height="300"
                                        item-height="50">
                                        <template v-slot:default="{ item }">
                                            <div class="grid auto-cols-max grid-cols-4 gap-4">
                                                <div class="p-2 text-center whitespace-nowrap">
                                                    <span
                                                        class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        {{ item.seat_catalogue.zone }}
                                                    </span>
                                                </div>
                                                <div class="p-2 text-center whitespace-nowrap">
                                                    <span
                                                        class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        {{ item.seat_catalogue.row }}
                                                    </span>
                                                </div>
                                                <div class="p-2 text-center whitespace-nowrap">
                                                    <span
                                                        class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                        {{item.seat_catalogue.seat }}
                                                    </span>
                                                </div>
                                                <div class="p-2 text-center whitespace-nowrap">
                                                    <span
                                                        class="text-xs font-semibold uppercase tracking-wide text-red-600">
                                                        <button @click="removeSeat(item)">
                                                            <span class="material-symbols-outlined text-lg">delete</span>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>

                                            <div class="flex justify-start">
                                                <div v-for="(price, index) in item.price_types_update" :key="index"
                                                    class="flex w-full">
                                                    <div class="flex w-full">
                                                        <div class="flex flex-col w-full">
                                                            <v-select v-model="price.id" :items="pricesType"
                                                                item-value="id" density="compact"
                                                                :item-title="(item) => formatFirstLetterUppercase(item.name)"
                                                                label="Typo de Precio" class="mx-1" :readonly="true"
                                                                menu-icon="">
                                                            </v-select>
                                                            <v-autocomplete v-model="price.price" :items="pricesCatalog"
                                                                item-value="price" density="compact" item-title="price"
                                                                label="Precio" class="mx-1"
                                                                @update:search="firstOrCreatePrice($event)">
                                                            </v-autocomplete>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </v-virtual-scroll>
                                </v-expansion-panel-text>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </div>

                    <div v-if="!isSvgVisible" class="grid">

                        <div v-for="(row, index) in viewSelectedSeat.rows" :key="index" :class="index !== 0 ? 'border-y-4 pt-6 border-black' : ''">

                            <div class="flex justify-center">
                                <v-select v-model="row.rows" item-value="id" :items="availableRows(index)"
                                    density="compact" :item-title="(item) => formatFirstLetterUppercase(item)"
                                    label="Selecciona las filas" chips multiple class="mx-1"></v-select>
                                <v-btn @click="removeZone(row, index)" class="mx-2 my-1" color="red">
                                    <span class="material-symbols-outlined text-lg">delete</span>
                                </v-btn>
                            </div>
                            <div class="flex justify-start">
                                <div v-for="(price, index) in row.pricesTypes" :key="price.name"
                                    class="flex w-full">
                                    <div class="flex w-full">
                                        <div class="flex flex-col w-full">
                                            <v-select v-model="price.id" :items="pricesType" item-value="id"
                                                density="compact"
                                                :item-title="(item) => formatFirstLetterUppercase(item.name)"
                                                label="Typo de Precio" class="mx-1" :readonly="true" menu-icon="">
                                            </v-select>
                                            <v-autocomplete v-model="price.price" :items="pricesCatalog"
                                                item-value="price" density="compact" item-title="price" label="Precio"
                                                class="mx-1" @update:search="firstOrCreatePrice($event)">
                                            </v-autocomplete>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <v-expansion-panels>
                                <v-expansion-panel :title="'Asientos seleccionados #'+row.seatsForRows.length">
                                    <v-expansion-panel-text>

                                        <div class="grid auto-cols-max grid-cols-4 gap-4">
                                            <div class="p-2 text-center whitespace-nowrap">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                    Z.
                                                </span>
                                            </div>
                                            <div class="p-2 text-center whitespace-nowrap">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                    F.
                                                </span>
                                            </div>
                                            <div class="p-2 text-center whitespace-nowrap">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                    A.
                                                </span>
                                            </div>
                                            <div class="p-2 text-center whitespace-nowrap">
                                                <span
                                                    class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                    Acc.
                                                </span>
                                            </div>
                                        </div>

                                        <v-virtual-scroll :items="row.seatsForRows" height="300" item-height="50">
                                            <template v-slot:default="{ item }">
                                                <div class="grid auto-cols-max grid-cols-4 gap-4">
                                                    <div class="p-2 text-center whitespace-nowrap">
                                                        <span
                                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                            {{ item.seat_catalogue.zone }}
                                                        </span>
                                                    </div>
                                                    <div class="p-2 text-center whitespace-nowrap">
                                                        <span
                                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                            {{ item.seat_catalogue.row }}
                                                        </span>
                                                    </div>
                                                    <div class="p-2 text-center whitespace-nowrap">
                                                        <span
                                                            class="text-xs font-semibold uppercase tracking-wide text-gray-800">
                                                            {{ item.seat_catalogue.seat }}
                                                        </span>
                                                    </div>
                                                    <div class="p-2 text-center whitespace-nowrap">
                                                        <span
                                                            class="text-xs font-semibold uppercase tracking-wide text-red-600">
                                                            <button @click="removeSeat(item)">
                                                                <span class="material-symbols-outlined text-lg">delete</span>
                                                            </button>
                                                        </span>
                                                    </div>
                                                </div>

                                                <!-- <div class="flex justify-start">
                                                    <div v-for="(price, index) in item.price_types_update" :key="index"
                                                        class="flex w-full">
                                                        <div class="flex w-full">
                                                            <div class="flex flex-col w-full">
                                                                <v-select v-model="price.id" :items="pricesType"
                                                                    item-value="id" density="compact"
                                                                    :item-title="(item) => formatFirstLetterUppercase(item.name)"
                                                                    label="Typo de Precio" class="mx-1"
                                                                    :readonly="true" menu-icon="">
                                                                </v-select>
                                                                <v-autocomplete v-model="price.price"
                                                                    :items="pricesCatalog" item-value="price"
                                                                    density="compact" item-title="price" label="Precio"
                                                                    class="mx-1"
                                                                    @update:search="firstOrCreatePrice($event)">
                                                                </v-autocomplete>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> -->
                                            </template>
                                        </v-virtual-scroll>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style scoped></style>
