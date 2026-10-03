/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}', './data/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'Arial', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'serif']
      },
      colors: {
        ink: '#262823',
        muted: '#6B6D66',
        ivory: '#FAF8F4',
        sand: '#F2EEE6',
        sage: '#E7EBE4',
        champagne: '#B69B70',
        line: '#DDD9D0'
      },
      boxShadow: {
        soft: '0 20px 55px rgba(45, 43, 37, 0.09)',
        card: '0 8px 28px rgba(45, 43, 37, 0.06)'
      },
      letterSpacing: {
        editorial: '0.18em'
      }
    }
  },
  plugins: []
};
