const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    theme: [
        "./src/theme.js",
        "./src/sass/theme.sass"
    ],
  },
  output: {
    filename: "js/[name].js?[hash]",
    path: path.resolve(__dirname, "blender-sphinx-theme/static")
  },
  externals: {
    jquery: "jQuery"
  },
  module: {
    rules: [
      // {
      //   test: require.resolve("./src/theme.js"),
      //   use: "imports-loader?this=>window"
      // },
      {
        test: /\.sass$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                includePaths: ["blender-web-assets/styles/"],
              },
            },
          },
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css?[hash]",
      chunkFilename: "css/[name].css?[hash]"
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "blender-web-assets/font",
          to: path.resolve(__dirname,'blender-sphinx-theme/static/font') 
        },
      ],
    }),
  ]
};