/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "programmers-main": "#0f1317",
      },
    },
    fontFamily: {
      "noto-sans-kr": ["Noto Sans KR", "sans-serif"],
    },
  },

  plugins: [],
};
