const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const dotenv = require("dotenv");

const devMode = process.env.NODE_ENV !== "production";

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const plugins = [
  new HtmlWebpackPlugin({
    template: "./public/index.html",
  }),
  new DefinePlugin(envKeys),
];

if (!devMode) {
  plugins.push(new MiniCssExtractPlugin());
}

module.exports = {
  // TODO: check conflicts with env (row 7)
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
        exclude: /\.module\.css$/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    historyApiFallback: true,
    overlay: true,
    open: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
      },
    },
  },
  plugins,
};
