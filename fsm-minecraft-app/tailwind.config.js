module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "minecraft-shader": "url('/src/images/bg.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
