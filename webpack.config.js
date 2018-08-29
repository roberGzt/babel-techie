const path = require("path");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  mode: 'development'
};
