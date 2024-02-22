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
        'eerie': '#111827',
      },
    },
  },
  plugins: [],
}
