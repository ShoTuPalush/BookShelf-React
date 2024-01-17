/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '375px',

      md: '768px',

      lg: '1440px',
    },
    extend: {
      height: {
        472: '472px',
        485: '485px',
        316: '316px',
        256: '256px',
      },
      width: {
        337: '337px',
        335: '335px',
        218: '218px',
        180: '180px',
      },
    },
  },
  plugins: [],
};
