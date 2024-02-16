/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        colorNutmeg: 'hsl(14, 45%, 36%)',
        colorRaspberry: 'hsl(332, 51%, 32%)',
        colorWhite: 'hsl(0, 0%, 100%)',
        colorRoseWhite: 'hsl(330, 100%, 98%)',
        colorEggshell: 'hsl(30, 54%, 90%)',
        colorLightGrey: 'hsl(30, 18%, 87%)',
        colorWengeBrown: 'hsl(30, 10%, 34%)',
        colorDarkChar: 'hsl(24, 5%, 18%)',
      },
      fontFamily: {
        fontOutfit: ['Outfit', 'sans-serif'],
        fontYoungSerif: ['Young Serif', 'sans-serif'],
      },
      screens: {
        mobilesm: '325px',
        lgtablet: '725px',
      },
    },
  },
  plugins: [],
};
