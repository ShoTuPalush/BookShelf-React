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
      maxHeight: {
        850: '850px',
        74: '74px',
      },
      height: {
        850: '850px',
        472: '472px',
        485: '485px',
        408: '408px',
        316: '316px',
        281: '281px',
        256: '256px',
        74: '74px',
      },
      width: {
        579: '579px',
        350: '350px',
        337: '337px',
        335: '335px',
        287: '287px',
        218: '218px',
        192: '192px',
        180: '180px',
        100: '100px',
      },
    },
  },
  plugins: [],
};
