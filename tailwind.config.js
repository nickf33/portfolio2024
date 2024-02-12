/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bebas: "Bebas Neue",
      mont: "Montserrat",
    },
    screens: {
      desktop: { min: "1280px" },
      // anything over 1280px
      laptop: { max: "1080px" },
      // anything under 1024px
      lgTablet: { max: "900px" },
      // specific use case - form elements
      tablet: { max: "767px" },
      //anyting under 767px
      lgMobile: { max: "528px" },
      // For larger mobile Phones
      mobile: { max: "465px" },
      // Anything under 465px
    },
    extend: {
      fontSize: {
        "2xs": "0.6rem",
      },
      colors: {
        blue: {
          dark: "#0f172a",
          light: "#01efdf",
        },
        green: {
          dark: "#01556C",
          light: "#09d89d",
        },
        red: {
          dark: "#3865fb",
          light: "#f403ec",
        },
        purple: {
          dark: "#FFDA29",
          light: "#f7b3b7",
        },
        white: {
          darker: "#878684",
          dark: "#f0e8d5",
          light: "#ffffff",
        },
      },
    },
    maxWidth: {
      custom: "1024px",
    },
    plugins: [],
  },
};
