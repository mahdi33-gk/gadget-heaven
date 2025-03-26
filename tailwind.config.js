/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(149, 56, 226)",
        textCl: "rgba(9, 8, 15, 0.6)", 
        mainBg: "rgb(30, 30, 30)", 
        mainBorder: "rgba(9, 8, 15, 0.1)", 
        anotherBg: "rgba(9, 8, 15, 0.05)", 
      },
      fontFamily:{
        sora: ['Sora']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

