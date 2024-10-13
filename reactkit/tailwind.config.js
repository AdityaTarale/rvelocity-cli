// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6200ee",
        secondary: "#03dac6",
        background: "#f5f5f5",
        text: "#333333",
        // Add more custom colors as needed
      },
      fontFamily: {
        sans: ["Segoe UI", "Tahoma", "Geneva", "Verdana", "sans-serif"],
        // Add custom fonts if needed
      },
      spacing: {
        128: "32rem",
        // Add more custom spacing if needed
      },
      // Extend other properties like borderRadius, boxShadow, etc.
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here if needed
  ],
};
