/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6600CC",

          secondary: "#e0c34e",

          accent: "#2dc6ad",

          neutral: "#292932",

          "base-100": "#FCFCFD",

          info: "#5BC1E6",

          success: "#21DEB5",

          warning: "#F2B25A",

          error: "#ED5A83",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
