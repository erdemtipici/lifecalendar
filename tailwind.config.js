/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // 52 column grid
        '52': 'repeat(52, minmax(auto, 1fr))',
        '53': 'repeat(53, minmax(auto, 1fr))',      
        '101': 'repeat(101, minmax(auto, 1fr))'   
      },
      gridTemplateRows: {
        // 100row grid
        '100': 'repeat(100, minmax(auto, 1fr))',
        '101': 'repeat(101, minmax(auto, 1fr))',
        '53': 'repeat(53, minmax(auto, 1fr))'
      }

    },
  },
  plugins: [],
}

