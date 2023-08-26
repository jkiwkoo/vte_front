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
        'vte-gray': '#505050',
        'vte-gray-2': '#808080',
        'vte-violet': '#18082C',
        'vte-light-blue': '#8EA3DA',
        'vte-blue': '#432E9A',
        'vte-blue-2': '#3A248F',
        'vte-blue-3': '#321E82',
        'vte-blue-4': '#210F69',
        'vte-blue-4': '#210F69',
      }
    },
    fontFamily: {
      gmarket: ['var(--font-gmarket)'],
      gmarketBold: ['var(--font-gmarketBold)'],
      apple: ['var(--font-apple)'],
      notoSans: ['var(--font-notoSans)'],
      notoSansBold: ['var(--font-notoSansBold)']
    }
  },
  plugins: [],
}
