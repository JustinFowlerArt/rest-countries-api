module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'dark-blue': 'hsl(209, 23%, 22%)',
            'darker-blue': 'hsl(207, 26%, 17%)',
            'darkest-blue': 'hsl(200, 15%, 8%)',
            'dark-gray': 'hsl(0, 0%, 52%)',
            'light-gray': 'hsl(0, 0%, 98%)'
        }
    },
  },
  plugins: [],
}