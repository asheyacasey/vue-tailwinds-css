/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#2E304F',
        'light-blue' : '#334D9B',
        'dark-blue':'#426CEF',
        'sky-blue':'#56E5EE',
        'darker-blue' : '#527AF5',
        'gray':'#7886A3'
        
      },
      fontFamily: {
        'Inter' : [ 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
