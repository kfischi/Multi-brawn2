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
        'accent-pink': '#FF5EA1',
        'accent-cyan': '#00E0FF',
        'text-dark': '#1a0b2e',
        'text-grey': '#64748b',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        heebo: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
