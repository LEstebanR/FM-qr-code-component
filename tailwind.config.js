/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGray: "hsl(212, 45%, 89%)",
        grayishBlue: "hsl(220, 15%, 55%)",
        darkBlue: "hsl(218, 44%, 22%)",
      },
      maxWidth: {
        card: "320px",
      },
      maxHeight: {
        card: "497px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontSize: {
        description: "15px",
        title: "22px",
      },
    },
  },
  plugins: [],
};
