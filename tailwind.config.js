/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{html,js}"],
  theme: {
    colors: {
      'peach': '#ffd3ac',
      'black': '#020617',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
}

