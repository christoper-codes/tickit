<script setup>

</script>

<template>
    <section class="h-[250px]">
        <div class="rounded-none h-[300px] relative bg-white">
            <img class="w-[1300px] h-auto absolute right-0 top-0 lg:mt-[-80px]" src="../../../public/img/hero.svg" alt="Webiste image">
            <div class="d-flex flex-column fill-height justify-center align-center text-white relative px-4 lg:px-0">
                <div class="max-w-7xl mx-auto flex flex-col w-full gap-10">
                    <div class="flex items-end gap-0 lg:gap-3">
                        <h2 class="font-bold text-3xl lg:text-5xl text-gray-600 max-w-2xl">
                            <slot name="title" />
                            <span>
                                <svg class="shrink-0 ms-2 size-10 text-gray-500 inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg>
                            </span>
                        </h2>
                    </div>
                    <div class="flex items-center">
                        <ol class="flex items-center whitespace-nowrap">
                            <li class="inline-flex items-center py-1.5 px-2">
                                <a class="flex items-center text-sm text-gray-600 hover:text-purple-600" href="/">
                                    Comienzo
                                </a>
                                <svg class="shrink-0 ms-2 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </li>
                            <li class="inline-flex items-center text-sm">
                                <div class="[--placement:top-left] relative inline-flex">
                                <div class="flex items-center gap-2 bg-gray-200 py-2 px-4 rounded-full cursor-pointer text-gray-600">
                                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="1"></circle>
                                    <circle cx="12" cy="5" r="1"></circle>
                                    <circle cx="12" cy="19" r="1"></circle>
                                    </svg>
                                    <p>Pagina actual</p>
                                </div>
                                <div class="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-1 space-y-0.5" role="menu">
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    Projects
                                    </a>
                                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" href="#">
                                    Preline
                                    </a>
                                </div>
                                </div>
                                <svg class="shrink-0 ms-2 size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </li>
                            <li class="inline-flex items-center py-1.5 px-2">
                                <a class="flex items-center text-sm text-gray-600 hover:text-purple-600" href="/">
                                    Dashboard
                                </a>
                                <svg class="shrink-0 ms-2 size-4 text-gray-500 hidden lg:block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                                </svg>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style  scoped>

</style>
