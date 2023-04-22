/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width:{
        '53':'13.1rem'
      },
      backgroundColor:{
        'slide':'#304156'
      },
      transitionDuration:{
        '3':'3ms'
      }
    },
  },
  plugins: [],
}

