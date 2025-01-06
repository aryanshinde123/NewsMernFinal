module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Merriweather', 'serif'],
        body: ['Roboto', 'sans-serif'], 
      },
      
      colors: {
        nav: "#404044",
        background: "#f8f9fa",
        text: "#212529",
        hover: '#a32020'
      },
    },
  },
  plugins: [],
};
