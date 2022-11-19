/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {
      fontFamily: {
        "archivo": ['Archivo', "sans-serif"],
      },
      colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "grey": "var(--grey-color)",
        "black": "var(--black-color)",
      },
    },
  },
  plugins: [],
}
