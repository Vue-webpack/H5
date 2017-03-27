var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var gutil = require('gulp-util')
var webpackConfig = require('./webpack.config.js')


var config = Object.create(webpackConfig)

// 修改配置
config.entry.main.unshift("webpack-dev-server/client?http://localhost:8000/", "webpack/hot/dev-server")
config.devtool = 'eval-source-map'
config.plugins.unshift(new webpack.HotModuleReplacementPlugin())

new WebpackDevServer(webpack(config), {
    contentBase: 'dev',
    stats: { colors: true },
    hot: true,

    proxy: {
      '/easyplay': {
          target: 'http://wwwtest.myjinzhu.com',
          secure: false,
      }
    },
    historyApiFallback: true

}).listen(8000);
