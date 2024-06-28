const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your application
  output: {
    filename: "main.js", // Output file name
    path: path.resolve(__dirname, "dist/js"), // Output directory
  },
  mode: "development", // Set the mode to development or production
};
