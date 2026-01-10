/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Now you can use className="font-playfair"
        playfair: ['var(--font-playfair)'], 
        sans: ['var(--font-inter)'], // Optional: makes Inter default for everything else
      },
    },
  },
  plugins: [],
};
