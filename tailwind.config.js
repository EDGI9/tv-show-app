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
        // '3d': "url('./src/assets/3d.jpg')", //FIX issue with local files
         '3d': "url('https://as1.ftcdn.net/v2/jpg/03/31/07/40/1000_F_331074021_oTznaiFOcB8XuY6GH2RQUG02FuQ39v4n.jpg')",

      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

