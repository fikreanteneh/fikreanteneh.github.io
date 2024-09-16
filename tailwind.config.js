/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        main: "var(--color-main)",
        "main-medium": "var(--color-main-medium)",
        primary: "var(--color-primary)",
        hover: "var(--color-hover)",
        background: "var(--color-background)",
        reverse: "var(--color-reverse)",
      },
      colors: {
        primary: "var(--color-primary)",
        hover: "var(--color-hover)",
        main: "var(--color-main)",
        "main-medium": "var(--color-main-medium)",
        background: "var(--color-background)",
        reverse: "var(--color-reverse)",
      },
    },
  },
  plugins: [],
};
