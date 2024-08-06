/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      "mobile" : {"min" : "320px"},
  
      "tablet" : {"min" : "750px"},
  
      "pc" : {"min" : "1200px"},
    },
    extend: {},
  },
  plugins: [],
}

