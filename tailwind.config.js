/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'golden': '#BB9628',
        'warm': '#F5F5F5',
        'eerie': '#020617',
      },
      boxShadow: {
        'top': '0 -2px 2px -1px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
