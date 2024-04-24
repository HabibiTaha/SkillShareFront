/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
      extend: {
          colors: {
              'brand-green': '#4CAF50',
          },
          spacing: {
              '72': '18rem',
              '84': '21rem',
              '96': '24rem',
          },
      },
  },
  variants: {},
  plugins: [],
