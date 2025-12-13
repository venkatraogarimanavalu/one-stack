/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        "text-primary": "var(--text-color)",
        "text-secondary": "var(--text-secondary)",
        error: "var(--error-color)",
        success: "var(--success-color)",
        warning: "var(--warning-color)",
        info: "var(--info-color)",
      },
      backgroundColor: {
        DEFAULT: "var(--background-color)",
        surface: "var(--surface-color)",
      },
      textColor: {
        DEFAULT: "var(--text-color)",
        secondary: "var(--text-secondary)",
      },
      borderColor: {
        DEFAULT: "var(--border-color)",
      },
      boxShadow: {
        sm: "var(--shadow)",
        DEFAULT: "var(--shadow)",
      },
    },
  },
  plugins: [],
  safelist: [],
}
