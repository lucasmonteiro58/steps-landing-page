/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E5258E',
        secondary: '#1e1e1e'
      },
      fontFamily: {
        sans: ['Gotham', 'sans-serif']
      }
    }
  },
  plugins: []
}
