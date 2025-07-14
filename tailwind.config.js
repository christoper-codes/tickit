import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans],
                metal: ['Metal Mania', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'tw-primary': '#14b8a6',
                'secondary': '#ecfeff',
                'tw-primary-dark': '#0f766e',
            },
        },
    },

    plugins: [forms],
};
