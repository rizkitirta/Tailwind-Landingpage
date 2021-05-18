// tailwind.config.js
module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
