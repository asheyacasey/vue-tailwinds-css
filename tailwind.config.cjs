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
        'sky-blue':'#56E5EE'
        
      },
      fontFamily: {
        'Inter' : [ 'Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
