/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      colors: {
        accent: '#00FF87',
        'accent-blue': '#60EFFF',
        dark: '#080B0F',
        card: '#0E1117',
        border: '#1A1F2E',
      },
      backgroundImage: {
        'grad': 'linear-gradient(135deg, #00FF87, #60EFFF)',
        'grad-r': 'linear-gradient(90deg, #00FF87, #60EFFF)',
      },
    },
  },
  plugins: [],
}
