/** @type {import('tailwindcss').Config} */

import {plugin} from 'tailwindcss/plugin'
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        /* Hide scrollbar for Chrome, Safari and Opera */
  '.no-scrollbar::-webkit-scrollbar': {
    'display': 'none',
},
/* Hide scrollbar for IE, Edge and Firefox */
'.no-scrollbar':{
    '-ms-overflow-style': 'none', /* IE and Edge */
    'scrollbar-width': 'none'  /* Firefox */
      }
    })
    }
  ],
};
