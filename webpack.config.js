const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your application
  output: {
    filename: "main.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  mode: "production", // Set the mode to development or production
};
