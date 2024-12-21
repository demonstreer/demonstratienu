/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/partials/**/*.html", 
    "./layouts/**/*.html", 
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Reddit Sans', 'sans-serif'],
        'mono': ['Reddit Mono', 'monospace'],
        'display': ['Permanent Marker', 'cursive'],
      }
    },
  },
  plugins: [],
}

