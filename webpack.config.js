const path = require("path");

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
  filename: "bundle.css",
});

module.exports = {
  entry: "./src/App.js", // основной файл приложения
  output: {
    path: __dirname + "/dist", // путь к каталогу выходных файлов
    filename: "bundle.js", // название создаваемого файла
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/, // какие файлы обрабатывать
        exclude: /node_modules/, // какие файлы пропускать
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/,
        use: extractCSS.extract({
          use: ["css-loader"],
        }),
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]",
          publicPath: "img",
          outputPath: "img",
          useRelativePath: true,
          esModule: false,
        },
      },
    ],
  },
  plugins: [extractCSS],
};
