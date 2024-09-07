/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["business"],
  },
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        "barlow-semi-condensed": ["Barlow Semi Condensed", "sans-serif"],
        "barlow-condensed": ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(0,0,0,.2) 0%, rgba(0,0,0,.4)) ,url('./public/web-bg.jpg')",
      },
      maxWidth: {
        "screen-1080": "1980px",
      },
      maxHeight: {
        "screen-1080": "1080px",
      },
    },
  },
  plugins: [require("daisyui")],
};
