/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#7d6c5b",
        beige: {
          light: "#d6ccc2",
          regular: "#c2a991",
        },
      },
    },
  },
  plugins: [],
};
