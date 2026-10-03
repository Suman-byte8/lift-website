/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        champagne: {
          50: "#FDFBF7",
          100: "#F7F2EA",
          200: "#EFE5D5",
          300: "#E2D2BA",
          400: "#CDB692",
          500: "#B89B6C",
          600: "#9B7F52",
          700: "#7B623E",
          800: "#5C482D",
          900: "#3D2F1D",
        },
        alabaster: "#FAF8F5",
        travertine: "#F3EFEA",
        mineral: "#1C1F22",
        bronze: "#8C6D46",
        sage: "#98A096",
      },
    },
  },
  plugins: [],
};
