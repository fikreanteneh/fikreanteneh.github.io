/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        main: "var(--color-main)",
        primary: "var(--color-primary)",
        hover: "var(--color-hover)",
        background: "var(--color-background)",
        reverse: "var(--color-reverse)",
      },
      colors: {
        primary: "var(--color-primary)",
        hover: "var(--color-hover)",
        main: "var(--color-main)",
        background: "var(--color-background)",
        reverse: "var(--color-reverse)",
      },
    },
  },
  plugins: [],
};
