const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // JavaScript 执行入口文件
  entry: "./main",
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: "bundle.js",
    // 把输出文件都放到 dist 目录下
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: "css-loader" }],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
      },
    ],
    
  },
  plugins: [new MiniCssExtractPlugin()],
  devServer: {
    open: false,
  },
  devtool: "source-map", // 输出 Source Map 方便在浏览器里调试 TypeScript 代码
};
