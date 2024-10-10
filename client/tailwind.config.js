/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        park: "url('/centralpark.webp')",
        parksat: "url('/centralparksat.png')",
        zoo: "url('/centralzoo.webp')",
        zoo2: "url('/centralzoo2.png')",
        a_lower: "url('/assets/a_lower.png')",
        a_upper: "url('/assets/a_upper.png')",
        n_lower: "url('/assets/n_lower.png')",
        n_upper: "url('/assets/n_upper.png')",
        i_lower: "url('/assets/i_lower.png')",
        i_upper: "url('/assets/i_upper.png')",
        m_lower: "url('/assets/m_lower.png')",
        m_upper: "url('/assets/m_upper.png')",
        p_lower: "url('/assets/p_lower.png')",
        p_upper: "url('/assets/p_upper.png')",
      },
      keyframes: {
        "custom-bounce": {
          "0%, 100%": { transform: "translateY(-2px)" },
          "50%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "custom-bounce": "custom-bounce 1s infinite",
      },
      fontFamily: {
        "source-code": ['"Source Code Pro"', "monospace"],
      },
    },
  },
  plugins: [],
};
