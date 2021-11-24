module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        30: "7.5rem",
        "290px": "290px",
        "396px": "396px",
        "500px": "500px",
        "640px": "640px",
        "980px": "980px",
      },
      fontSize: { subtitle: "1.7rem" },
      colors: {
        "main-gray": "#f0f2f5",
        "main-blue": "#166fe5",
        "main-blue-hover": "#1877f2",
        "main-green": "#36a420",
        "main-green-hover": "#42872a",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
