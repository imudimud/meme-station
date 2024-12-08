/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1E90FF',
        'primary-purple': '#8A2BE2',
        'secondary-black': '#0A0A0A',
        'secondary-green': '#00FF7F',
        'accent-silver': '#C0C0C0',
        'accent-pink': '#FF69B4',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};