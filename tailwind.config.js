/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "accent": "var(--color-accent)",
        "main-1": "var(--color-main-1)",
        "main-2": "var(--color-main-2)",
        "main-3": "var(--color-main-3)",
        "main-4": "var(--color-main-4)",
        "main-5": "var(--color-main-5)",
        "main-6": "var(--color-main-6)",
        "main-7": "var(--color-main-7)",
        "main-8": "var(--color-main-8)",
        "main-9": "var(--color-main-9)",
      },
      colors: {
        "accent": "var(--color-accent)",
        "main-1": "var(--color-main-1)",
        "main-2": "var(--color-main-2)",
        "main-3": "var(--color-main-3)",
        "main-4": "var(--color-main-4)",
        "main-5": "var(--color-main-5)",
        "main-6": "var(--color-main-6)",
        "main-7": "var(--color-main-7)",
        "main-8": "var(--color-main-8)",
        "main-9": "var(--color-main-9)",
      },
    },
  },
  plugins: [],
};
