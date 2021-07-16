module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        'blanco': "#FFF",
        'bonne-mere': "#F2CE14",
        'OM': "#97DDF6",
        'le-sang': "#F87171",
        'sombre': "#1D1C1E",
        'allu': "#D1D5DB",
      },
      padding: {
        sectionX: '95px',
        sectionY: '40px',
        'sectionX-m': '20px',
      },
      height: {
        'section': '80vh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
