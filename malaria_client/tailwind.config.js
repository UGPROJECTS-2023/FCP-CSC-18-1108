/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0065F3",
        grey: "#ccc",
        light: "#F5F8FA",
        dark: "#64748b",
        secondary: "#0F2965",
        prilight: "#F6F8FF",
        pending: "#2FC55B",
        conflict: "#FC3C3C"
      },
      fontFamily: {
        head: ["almanera-bold", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
