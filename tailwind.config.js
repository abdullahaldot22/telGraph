import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                open: ['Open Sans', ...defaultTheme.fontFamily.serif],
                anton: ['Anton', ...defaultTheme.fontFamily.sans],
                oswald : ['Oswald', ...defaultTheme.fontFamily.sans],
            },
            width: {
                wlg : '80px',
            },
            maxWidth: {
                mlg: '90%',
            },
            colors: {
                dark: '#261C2C',
                shadow: '#10151821',
                cli: '#f2f2f2',
                clii: '#a6a6a6',
                cliii: '#737373',
                cliv: '#595959',
                clv: '#262626',
                clvi: '#0d0d0d',
            },
        },
    },

    plugins: [forms],
};
