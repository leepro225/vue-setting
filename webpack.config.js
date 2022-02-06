const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    clean: true,
    path: path.resolve(__dirname, "dist"),
    filename: "index_build.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|otf)(\?v=[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[hash].[ext]",
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      ".wasm",
      ".mjs",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".json",
      ".vue",
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: "./public/index.html",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "static" }],
    // }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    host: "localhost",
  },
};
