module.exports = {
  content: [
    "./landingcomponent/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'xl' : '0px 0px 5px linear-gradient( to right, #ffffff , #fffacc)'
      } 
    },
  },
  plugins: [],
}