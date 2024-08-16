/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary:'#dd614a',
        tertiary: '#c5c392',
        accent: '#226f54',
        secondary: '#73a580',
        highlight: '#f48668',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

