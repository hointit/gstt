const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const VENDOR_LIBS = [

]

const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    host: '192.168.1.120',
    compress: true,
    port: 6969
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      },
      {
        use: ExtractTextPlugin.extract({
          use: ["css-loader", "sass-loader" ],
          fallback: "style-loader"
        }),
        test: /\.(css|scss)$/
      },
      // {
      //   test: /\.(png|jpg|jpe|gif|svg|woff|woff2|eof|ttf|wav|mp3|ico)$/,
      //   loader: 'file-loader'
      // },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        use: 'url-loader',
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebPackPlugin({
      template: "./index.html",
      filename: "./index.html"
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
      'window.$': 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}

module.exports = config
