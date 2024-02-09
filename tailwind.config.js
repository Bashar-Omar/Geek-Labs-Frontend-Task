/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        dim: {
          bodyColor: "#181818",
          grayBg: "#212121",
          gradientMain: "#667EEA",
          gradientSec: "#904BA2",
          btnColor: "#554DB7",
          textBtnColor: "#9089DC",
          textAcc: "#887EFF",
          textAccHover: "#615abb",
          textAccSec: "#565656",
          textGray: "#484848",
        },
      },
    },
  },
  plugins: [],
};
