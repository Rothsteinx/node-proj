// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // For app directory
    './pages/**/*.{js,ts,jsx,tsx}', // For pages directory (if you're using it)
    './components/**/*.{js,ts,jsx,tsx}', // For components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
