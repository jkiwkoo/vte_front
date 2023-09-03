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
        'vte-gray-3': '#A5A5A5',
        'vte-gray-4': '#676767',
        'vte-gray-5': '#3E3E3E',
        'vte-gray-6': '#606060',
        'vte-violet': '#18082C',
        'vte-light-blue': '#8EA3DA',
        'vte-blue': '#432E9A',
        'vte-blue-2': '#3A248F',
        'vte-blue-3': '#321E82',
        'vte-blue-4': '#210F69',
        'vte-blue-4': '#210F69',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-down2': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '50%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          '50%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-down2': 'fade-in-down2 1s ease-out',
        'fade-in-left': 'fade-in-left 0.5s ease-out',
        'fade-in': 'fade-in 1s ease-out',
      },
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
