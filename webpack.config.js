const path = require("path")
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')
const VENDOR_LIBS = [
    'bootstrap',
    'gsap',
    'jquery',
    'owl.carousel',
    'react',
    'react-dom',
    'scrollmagic'
]

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '192.168.1.120',
    compress: true,
    port: process.env.PORT || 6969
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
      {
        test: /\.(png|jpg|jpe|gif|svg|wav|mp3|ico)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eof|ttf)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'fonts/'
        }
      },
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
  ],
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  }
}

module.exports = config
