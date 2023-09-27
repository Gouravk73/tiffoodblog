/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        sm:"375px",
      },
      fontFamily: {
        'source-sans-pro': ['Source Sans 3', 'sans'],
        'open-sans': ['Open Sans', 'sans'],
        'poppins': ['Poppins', 'sans'],
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

