/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/assets/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'default': '#F1F1F3',
        'vte-gray': '#505050'
      }
    },
    fontFamily: {
      gmarket: ['var(--font-gmarket)'],
      gmarketBold: ['var(--font-gmarketBold)'],
      apple: ['var(--font-apple)']
    }
  },
  plugins: [],
}

