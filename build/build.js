// 全局配置
process.env.NODE_ENV = 'production'

var webpack = require('webpack')
var gutil = require('gulp-util')
var webpackConfig = require('./webpack.config.js')

var config = Object.create(webpackConfig);

config.plugins.unshift(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}))

webpack(config, function (err, stats) {
    if (err) throw new gutil.PluginError("webpack", err)
    gutil.log("[webpack]", stats.toString({
        colors: true
    }))
})
