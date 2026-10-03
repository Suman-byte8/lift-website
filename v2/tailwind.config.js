/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        ivory: { DEFAULT: "#FAF8F4", 100: "#F5F1EA", 200: "#ECE5D9" },
        sage: { 50: "#EEF1ED", 100: "#E2E8E1", 300: "#AEB9AD", 500: "#7F8E7E", 700: "#566355" },
        mist: { 50: "#F1F3F4", 100: "#E6EAEC", 300: "#C5CED3", 500: "#8A979E" },
        champagne: { 100: "#F3EBDD", 200: "#E9DCC6", 300: "#D8C5A5", 500: "#B89B6A", 600: "#9C7F50", 700: "#7A6340" },
        taupe: { 100: "#E7E1D9", 300: "#C2B8AB", 500: "#8E8477" },
        ink: { DEFAULT: "#20211F", 700: "#343532", 500: "#5B5D58", 300: "#8B8D87" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.28em" },
      boxShadow: {
        soft: "0 1px 2px rgba(32,33,31,0.04), 0 12px 40px -12px rgba(32,33,31,0.12)",
        lift: "0 2px 4px rgba(32,33,31,0.04), 0 30px 60px -20px rgba(32,33,31,0.22)",
        glass: "inset 0 1px 0 rgba(255,255,255,0.6), 0 20px 50px -20px rgba(32,33,31,0.25)",
      },
      transitionTimingFunction: { luxe: "cubic-bezier(0.22, 1, 0.36, 1)" },
      keyframes: {
        drift: { "0%,100%": { transform: "translate3d(0,0,0) scale(1)" }, "50%": { transform: "translate3d(4%,-3%,0) scale(1.08)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
        rise: { "0%": { transform: "translateY(0)", opacity: "0" }, "15%": { opacity: "0.7" }, "100%": { transform: "translateY(-120px)", opacity: "0" } },
      },
      animation: {
        drift: "drift 22s ease-in-out infinite",
        float: "float 9s ease-in-out infinite",
        rise: "rise 12s linear infinite",
      },
    },
  },
  plugins: [],
};
