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
      fontFamily: {
        // Define Roboto as a custom font family
        roboto: ['Roboto', 'sans-serif'],
        custom: ['Product Sans Regular'],
      },
      colors: {
        dullWhite: '#f6f8fc',
        dullBlue: '#f2f6fc',
        mildBlue: '#c2e7ff',
        mildViolet: '#d3e3fd',
        mildPurple: '#eaf1fb',
        lightBlue: '#d3e3fd',
    },
    },
  },
  plugins: [],
};
