// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
    clean: true, // Cleans the output directory before emit
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Resolves these extensions
    alias: {
      // Define aliases for cleaner imports
      "@components": path.resolve(__dirname, "src", "components"),
      "@hooks": path.resolve(__dirname, "src", "hooks"),
      "@utils": path.resolve(__dirname, "src", "utils"),
      // Add more aliases as needed
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Matches .ts and .tsx files
        use: "babel-loader", // Uses Babel loader to transpile
        exclude: /node_modules/, // Excludes node_modules
      },
      {
        test: /\.css$/i, // Matches .css files
        use: ["style-loader", "css-loader", "postcss-loader"], // Uses these loaders
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Matches image files
        type: "asset/resource", // Handles asset resources
      },
      // Add more loaders as needed
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"), // Template HTML
      favicon: path.resolve(__dirname, "public", "favicon.ico"), // Favicon
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false, // Waits for type checking to finish
      typescript: {
        configFile: path.resolve(__dirname, "tsconfig.json"), // Path to tsconfig.json
      },
    }),
    // Add more plugins as needed
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"), // Serves static files
    },
    historyApiFallback: true, // Enables client-side routing
    port: 3000, // Development server port
    open: true, // Opens the browser after server has been started
    hot: true, // Enables Hot Module Replacement
  },
  mode: "development", // Switch to 'production' for production builds
};
