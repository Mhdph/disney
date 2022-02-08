module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/original.jpg')",
        home: "url('/images/background.png')",
      },
    },
    fontFamily: {
      body: ["Montserrat", "sans-sarif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
