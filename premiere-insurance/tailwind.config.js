/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '650': '650px',
        '580': '580px',
        '450': '450px',
        '333': '333px',
        '400': '400px',
        '200': '200px',
        '120': '120px',
        '80': '80px',
      },
      height: {
        '650': '650px',
        '580': '580px',
        '450': '450px',
        '400': '400px',
        '200': '200px',
        '120': '120px',
        '80': '80px',
      },
      fontSize: {
        '67': '90px',
        '50': '50px',
        '40': '40px',
        '30': '30px',
        '25': '25px',
        '20': '20px',
        '15': '15px',
        '13': '13px',
        '10': '10px',
        '5': '5px',
      },
      maxWidth: {
        '650': '650px',
        '580': '580px',
        '450': '450px',
        '400': '400px',
        '333': '333px',
        '200': '200px',
        '80': '80px',
      },
      height: {
        '650': '650px'
      }
    },
  },
  plugins: [],
};
