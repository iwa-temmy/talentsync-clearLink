/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-700": "#175CD3",
        "gray-100": "#F2F4F7",
        "gray-300": "#D0D5DD",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-700": "#344054",
        "gray-800": "#1D2939",
        "gray-900": "#1D2939",
        "warning-400": "#FDB022",

        white: "#ffffff",
      },
      screens: {
        // small mobile phone
        xs: "320px",
        // large mobile phone
        sm: "640px",
        // tablets
        md: "768px",
        // laptops
        lg: "1024px",
        xl: "1280px",
        // mid laptop
        "2xl": "1536px",
        // large screens
        "3xl": "2560px",
        "4xl": "5000px",
      },
    },
  },
  plugins: [],
};
