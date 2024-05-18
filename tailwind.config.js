import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        fontFamily: {
            poppins: "Poppins, sans-serif",
        },
        extend: {
            colors: {
                alerange: "#FB6908",
                "gray-1": "#B4B4B4",
                "gray-2": "#E2E0E0",
                "form-bg": "#212121",
            },
            screens: {
                laptopLg: "1160px",
                laptopXl: "1360px",
            },

            keyframes: {
                scrollUp: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "50%": { transform: "translate(0px, -50rem)" },
                },
                scrollDown: {
                    "0%, 100%": { transform: "translate(0px, -50rem)" },
                    "50%": { transform: "translate(0px, 0px)" },
                },
            },

            animation: {
                scrollUp: 'scrollUp 25s linear infinite',
                scrollDown: 'scrollDown 25s linear infinite',
            },
        },
    },

    plugins: [forms],
};
