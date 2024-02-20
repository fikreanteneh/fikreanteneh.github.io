/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        base: "var(--color-base)",
        primary: "var(--color-primary)",
      },
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  plugins: [],
};
