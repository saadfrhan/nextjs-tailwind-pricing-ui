/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        "49.5": "198px",
        "15": "60px"
      },
      width: {
        "5.5": "22px"
      },
      margin: {
        "1.5": "6px"
      },
      maxWidth: {
        "994": "994px"
      },
      backgroundColor: {
        "purple.600": "#6B46C1"
      }
    },
  },
  plugins: [],
}