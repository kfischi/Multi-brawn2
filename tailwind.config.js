/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: '#00E0FF',
          blue: '#2D7FFF',
          purple: '#A06BFF',
        },
        accent: {
          pink: '#FF5EA1',
          cyan: '#00E0FF',
        },
        text: {
          dark: '#1a0b2e',
          light: '#FAFAFA',
          grey: '#444444',
        },
      },
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #00E0FF, #2D7FFF, #A06BFF)',
      },
    },
  },
  plugins: [],
}
