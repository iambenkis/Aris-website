/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    fontFamily: {
      link: ['Nohemi', 'Trebuchet MS', 'sans-serif'],
      pop: ['Poppins', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        inner: 'inset 0 0 20px rgba(0, 0, 0, 0.8)',
        // Add more custom shadow styles as needed
      },
    },
  },
  plugins: [],
}

const withMT = require('@material-tailwind/react/utils/withMT')

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})
