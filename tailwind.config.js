/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./App.js",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: {
          100: '#E0E0E0', // Lightest shade of black (almost white/grey)
          200: '#C2C2C2',
          300: '#A3A3A3',
          400: '#858585',
          500: '#666666', // Mid shade of black
          600: '#4D4D4D',
          700: '#333333',
          800: '#1A1A1A',
          900: '#000000', // Pure black
        },
        white: '#ffffff',
        secondary: '#2980B9',
        accent: '#505050',
      },
      // Font family - Encode Sans
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // 'Inter' as the primary font with fallback to sans-serif
      },

      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
        'screen-70': '70vh',
        'screen-60': '60vh',
        'screen-50': '50vh',
        'screen-40': '40vh',
        'screen-30': '30vh',
        'screen-20': '20vh',
        'screen-10': '10vh',
      }
    },
  },
  plugins: [],
};
