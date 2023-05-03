/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#F89223",

          secondary: "#78b84a",

          accent: "#F89223",

          neutral: "#9B9D9F",

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
