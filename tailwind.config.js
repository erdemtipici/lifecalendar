/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 52 column grid
        '52': 'repeat(52, minmax(0, 1fr))'      
      },
      gridTemplateRows: {
        // 100row grid
        '100': 'repeat(100, minmax(0, 1fr))'
      }

    },
  },
  plugins: [],
}

