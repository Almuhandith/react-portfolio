/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-sans': ['Comic Sans MS', 'cursive'],
        'malgun-gothic': ['Malgun Gothic', 'sans-serif'],
        'trebuchet-ms': ['Trebuchet MS', 'sans-serif'],
      },
      colors: {
        dark: '#1f2937',
        primary: '#2C3E50',
        secondary: '#9966CC',
        accent: '#FFFFFF',
      },
    },
  },
  plugins: [],
}