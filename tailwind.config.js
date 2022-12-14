/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brand-white": "#eaf2ef",
        "brand-purple": "#7b40e7",
        "brand-dark-blue": "#0f1525",
        "brand-light-black": "#26292b",
        "brand-black-blue": "#020912",
        "brand-light-gray": "#9EA4A9"
      },
      keyframes: {
        animLogoTechs: {
          'from': { transform: 'translateY(0px)' },
          'to': { transform: 'translateX(240%)' },
        }
      },
      animation: {
        logoTechs: 'animLogoTechs 50s linear infinite',
        logoTechs2: 'animLogoTechs 100s linear infinite',
        logoTechs3: 'animLogoTechs 150s linear infinite',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1070px',
      // => @media (min-width: 1070px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
}
