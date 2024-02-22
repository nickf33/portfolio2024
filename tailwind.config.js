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
      backgroundImage: {
        "gradient-green": "linear-gradient(to bottom right, #01EFEF, #09D89D)",
        "gradient-blue": "linear-gradient(to bottom right, #74DEFF, #4CC9F0)",
        "gradient-red": "linear-gradient(to bottom right, #FC1632, #F72585)",
      },
    },
    maxWidth: {
      custom: "1024px",
    },
    animation: {
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
    },
    keyframes: {
      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
    },
    plugins: [],
  },
};
