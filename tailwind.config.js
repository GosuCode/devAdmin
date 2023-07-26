import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700') "
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700') ",
        purple: "0 0 5px theme('colors.purple.200'), 0 0 10px theme('colors.purple.700') ",
        emerald: "0 0 15px theme('colors.emerald.200'), 0 0 20px theme('colors.emerald.700') ",
        green: "0 0 5px theme('colors.emerald.200'), 0 0 8px theme('colors.emerald.700') ",
      }
    },
  },
  //to use the below shadow color plugin - neon-anyColor
  plugins: [
    plugin(({theme, addUtilities}) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object'){
          const color1 = colors[color]["500"];
          const color2 = colors[color]["700"];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`
          };
        }
      }
      addUtilities(neonUtilities)
    })
  ],
}
