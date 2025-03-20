/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CFCEFF', // фиолетовый
        secondary: '#FFED9F', // желтый
        chart_1: '#3FC0F5', // синий

        background: '#F5F4F9', // серый
        foreground: '#000000', // черный

        muted: "#F1F1F1",
        muted_foreground: '#969696', // серый

        border: "#C9C9C9",


        card: '#ffffff', // белый
        card_foreground: '#000000', // черный

        sidebar: '#000000', // черный
        sidebar_foreground: '#ffffff', // белый
      },
    },
  },
  plugins: [],
}

