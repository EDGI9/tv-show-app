/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#8A2BE2', // Electric Violet
        background: '#0D0D0D', // Jet Black
        accent: '#E0E0E0', // Light Gray
        secondary: '#222222', // Off-Black
        highlight: '#FF5733', // Orange-Red
      },
      backgroundImage: {
        'bubbles': "url('/src/assets/bubbles.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

