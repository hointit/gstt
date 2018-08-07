var webpack = require('webpack')
const path = require("path")
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var port = process.env.PORT || 6969

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, 'public'),
  hot: true,
  inline: true,
  historyApiFallback: true,
  open: true
}).listen(port, function (err, result) {
  if (err) {
    console.log(err)
  }
  console.log('server started')
})
