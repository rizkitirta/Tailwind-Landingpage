// tailwind.config.js
module.exports = {
  purge: ["./public/**/*.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors:{
      'orange':'#FF7143',
      'dark-orange':'#9F3919',
      'darkblue':'#5454D4',
      'black': '#19191B',
      'gray' : '#696871',
      'red' : '#696871',
      'white': '#FFFFFF',
      'white-light': '#F7F7FB',
      'white-lighter' : '#F8F8F8',
      'transparent': 'transparent',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '3.75rem',
      '7xl': '5rem',
     },
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
