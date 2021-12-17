const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    index: "./index.ts"
  },
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Demo",
      hash: true,
      filename: "index.html",
      template: "../index.html.ejs"
    })
  ],
};