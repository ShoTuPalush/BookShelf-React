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
        408: '408px',
        316: '316px',
        281: '281px',
        256: '256px',
      },
      width: {
        579: '579px',
        337: '337px',
        335: '335px',
        287: '287px',
        218: '218px',
        192: '192px',
        180: '180px',
      },
    },
  },
  plugins: [],
};
