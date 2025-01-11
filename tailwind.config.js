/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['"Great Vibes"', 'cursive'],
        gugi: ['Gugi', 'cursive'],
        'noto-serif': ['"Noto Serif KR"', 'serif'],
        'nanum-human': ['Nanum Human', 'serif'],
        'nanum-myeongjo': ['Nunum Myeongjo', 'serif'],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE/Edge */
          'scrollbar-width': 'none',   /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',            /* Chrome/Safari */
        },
      });
    },
  ],
}

