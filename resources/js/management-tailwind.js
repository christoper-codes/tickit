/*
* |--------------------------------------------------------------------------|
* | Primaries and secondaries colors of companies | Colors
* |--------------------------------------------------------------------------|
*/

export function primariesAndSecondariesColorsHDX() {
    return {
        'primary-950': '#3b0764',
        'primary-900': '#581c87',
        'primary-800': '#6b21a8',
        'primary-700': '#7e22ce',
        'primary-600': '#9333ea',
        'primary-500': '#a855f7',
        'primary-400': '#c084fc',
        'primary-300': '#d8b4fe',
        'primary-200': '#e9d5ff',
        'primary-100': '#f3e8ff',
        'primary-50': '#faf5ff',
        'secondary-950': '#422006',
        'secondary-900': '#713f12',
        'secondary-800': '#854d0e',
        'secondary-700': '#a16207',
        'secondary-600': '#ca8a04',
        'secondary-500': '#eab308',
        'secondary-400': '#facc15',
        'secondary-300': '#fde047',
        'secondary-200': '#fef08a',
        'secondary-100': '#fef9c3',
        'secondary-50': '#fefce8',
    };
}

export function primariesAndSecondariesColorsBUAP() {
    return {
        'primary-950': '#450a0a',
        'primary-900': '#7f1d1d',
        'primary-800': '#991b1b',
        'primary-700': '#b91c1c',
        'primary-600': '#dc2626',
        'primary-500': '#ef4444',
        'primary-400': '#f87171',
        'primary-300': '#fca5a5',
        'primary-200': '#fecaca',
        'primary-100': '#fee2e2',
        'primary-50': '#fef2f2',
        'secondary-950': '#082f49',
        'secondary-900': '#0c4a6e',
        'secondary-800': '#075985',
        'secondary-700': '#0369a1',
        'secondary-600': '#0284c7',
        'secondary-500': '#0ea5e9',
        'secondary-400': '#38bdf8',
        'secondary-300': '#7dd3fc',
        'secondary-200': '#bae6fd',
        'secondary-100': '#e0f2fe',
        'secondary-50': '#f0f9ff',
    };
}

/*
* |--------------------------------------------------------------------------|
* | Management primary colors of club |
* |--------------------------------------------------------------------------|
*/
export function loadColors(colors) {
    for (const color in colors) {
        document.documentElement.style.setProperty(`--${color}`, colors[color]);
    }
}

/*
* |--------------------------------------------------------------------------|
* | Handle club setting in dom | DOM
* |--------------------------------------------------------------------------|
*/
export function handleClubSettings(loading = false, loadingScreen, screenReady, colors, club){

    if(loading){
        loadingScreen.classList.add('invisible', 'opacity-0', 'hidden');
        screenReady.classList.remove('invisible', 'opacity-0');
    }

    if(colors) loadColors(colors);
    localStorage.setItem('club', club);

}

