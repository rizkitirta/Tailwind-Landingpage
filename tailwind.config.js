// tailwind.config.js
module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors:{
      'orange':'#FF7143',
      'darkblue':'#5454D4',
      'black': '#19191B',
      'gray' : '#696871',
      'red' : '#696871',
      'white': '#FFFFFF',
      'transparent': 'transparent',
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
