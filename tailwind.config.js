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
          primary: '#2563eb',
          'base-100': '#111827',
        },
      }
    ],
  },
  plugins: [require("daisyui")],
}
