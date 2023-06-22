/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1B9C85',
        secondary: '#4C4C6D',
        tertiary: '#E8F6EF',
        quaternary: '#FFE194',
        back: '#1F1D36',
        tex: '#F1F6F9'
      },
      fontFamily: {
        fredoka: ['Fredoka'],
        bangers: ['Bangers'],
        boogaloo: ['Boogaloo'],
        chewy: ['Chewy', 'cursive'],
        lato: ['Lato', 'sans-serif'],
        guy: ['Luckiest Guy', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}

