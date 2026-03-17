/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#6d5b4f',
        'brand-dark': '#5a4a40',
        'brand-light': '#f4f1ee',
        'sidebar-bg': '#6d5b4f', // Added for the sidebar background
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
      },
      keyframes: {
        scroll: {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
