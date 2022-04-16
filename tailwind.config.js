module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryClr: "#00d09c",
        borderClr: "#ecedef",
        subTextClr: "#7c7e8c",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "3px 6px 24px rgba(0, 0, 0, 0.1)",
        input: "0 1px 5px 0 rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
