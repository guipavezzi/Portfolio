const { addDynamicIconSelectors, addIconSelectors } = require ('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        blue200: '#0466C8',
        colorSideBar: '#F8F9FA',
        colorSideBarHover: '#DEE2E6',
        colorBody: '#DEE2E6'
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
    addIconSelectors(['devicon', 'skill-icons'])
  ],
}

