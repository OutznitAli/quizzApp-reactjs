/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {backgroundImage: {
      'food-pattern': "url('/src/assests/food.jpeg')",
      
    },

    backgroundSize: {
      'size-200': '200% 200%',
  },

  backgroundPosition: {
    'pos-0': '0% 0%',
    'pos-100': '100% 100%',
},
fontFamily: {
  'Fredoka': ['"Fredoka One"', 'cursive'],
  'Dangrek':['"Dangrek"','cursive']
},



variants: {
  extend: {
    backgroundColor: ['checked'],
    borderColor: ['checked'],
  }
},


screens: {
  'sm': '480px',
  'tablet': '300px',
  // => @media (min-width: 640px) { ... }

  'laptop': '1024px',
  // => @media (min-width: 1024px) { ... }

  'desktop': '1280px',
  // => @media (min-width: 1280px) { ... }
},

  
  },
  },
  plugins: [],
}
