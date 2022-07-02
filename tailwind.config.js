module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        montasimDev: {
          primary: '#64ffda',
          accent: '#ccd6f6',
          'base-100': '#0a192f',
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
