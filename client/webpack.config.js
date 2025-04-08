const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"), // Output to 'build' for Cloudflare
    filename: "bundle.js",
    publicPath: "/", // Important for SPA routing on Cloudflare Pages
    clean: true,
    assetModuleFilename: "assets/images/[name][ext]",
  },
  mode: "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 4000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        // ✅ Updated to include .webp
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
  devtool: "source-map",
};
