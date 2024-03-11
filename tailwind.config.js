/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    backgroundImage: theme => ({
      'green-gradient': 'linear-gradient(to right, #6ee7b7, #3b82f6)',
      'blue-gradient': 'linear-gradient(to right, #33B5E5, #009BC9)',
      'purple-gradient': 'linear-gradient(to right, #B833E5, #9C009C)',
    }),
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '700px', // Adjust the max-width for large screens
        xl: '900px', // Adjust the max-width for extra large screens
      },
    },
  },
  plugins: [],
}

