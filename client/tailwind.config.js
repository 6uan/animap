/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        park: "url('/public/centralpark.webp')",
        parksat: "url('/public/centralparksat.png')",
        zoo: "url('/public/centralzoo.webp')",
        zoo2: "url('/public/centralzoo2.png')",
      },
    },
  },
  plugins: [],
};
