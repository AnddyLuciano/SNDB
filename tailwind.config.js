/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,tsx,ts,js,jsx}", "./package/**/*.{html,tsx,ts,js,jsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#2a68ff",
                secondary: "#e1e4e8",
                body: "#6f6f6f",
            },
            boxShadow: {
                base: "#f7f8f9",
            },
        },
    },
    plugins: [],
};
