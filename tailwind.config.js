/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}

