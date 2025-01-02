/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive': {
          600: '#8B8B6B',
        },
      },
    },
  },
  plugins: [],
}

