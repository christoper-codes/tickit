<script setup>
import { drawerClubState } from '@/composables/drawersStates';
import { ref } from 'vue';

const clubSelected = ref(true);

</script>

<template>
  <div>
    <div class="fixed bottom-1/2 right-3 z-[60]" @click="drawerClubState = !drawerClubState">
        <div class="flex items-center justify-center -rotate-45 cursor-pointer hover:scale-110 transition-transform duration-700">
            <div class="relative">
            <div class="bg-gradient-to-r from-purple-500 to-purple-400 w-12 h-12 rounded-full flex items-center justify-center">
                <svg class="animate-spin shrink-0 size-6 block text-white z-20" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
                </svg>
            </div>
            <div class="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[20%] w-6 h-6 bg-purple-500 rotate-45 rounded-[4px]"></div>
            </div>
        </div>
    </div>

    <v-layout >
      <v-navigation-drawer v-model="drawerClubState" temporary>
        <div>
            <div class="flex justify-between items-center py-3 px-4 border-b bg-gradient-to-r from-slate-950 to-purple-900">
                <h3 id="hs-offcanvas-example-label" class="text-white">
                Clubs disponibles
                </h3>
            </div>
            <div class="p-4 flex flex-col gap-3">
                <div for="victoria" class="flex  p-3 w-full bg-white border border-gray-200 rounded-lg text-sm cursor-pointer focus:border-primary-500 focus:ring-primary-500 hover:scale-105 transition-transform duration-500">

                <v-switch
                    v-model="clubSelected"
                    @click="clubSelected = !clubSelected"
                    color="purple"
                    label="victoria"
                    hide-details
                    ></v-switch>
                </div>
            </div>
            </div>
      </v-navigation-drawer>
    </v-layout>
  </div>
</template>

<style scoped>
.v-navigation-drawer__scrim{
    backdrop-filter: blur(4px) !important;
}
.animate-spin {
    animation: spin 2s linear infinite;
}
.v-navigation-drawer--temporary.v-navigation-drawer--active {
    width: 75% !important;
}

@media (min-width: 768px) {
    .v-navigation-drawer--temporary.v-navigation-drawer--active{
        width: 25% !important;
    }
}
</style>
