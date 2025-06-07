// tailwind.config.js
/* eslint-env node */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4361ee",
        "primary-dark": "#3a56d4",
        secondary: "#3f37c9",
        accent: "#4895ef",
        success: "#4cc9f0",
        dark: "#1e1b4b",
        light: "#f0f9ff",
        text: "#1e293b",
        "text-light": "#64748b",
        background: "#f8fafc",
        card: "#ffffff",
        border: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
