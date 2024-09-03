/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens:{
          'vsm':'420px',
          'lmd':'600px',
          'slg':'900px',
          'lg':'1270px'
          
        },
      },
    },
    plugins: [],
  }