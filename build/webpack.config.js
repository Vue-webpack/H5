var path = require('path')
var webpack = require("webpack")
var HtmlWebpackPlugin = require("html-webpack-plugin")

var debug = process.env.NODE_ENV !== 'production';


// 模块导入
module.exports = {

    // 入口文件地址，不需要写完，会自动查找
    entry: {
        main: [
            './src/main'
        ]
    },

    output: {
        path: path.resolve(debug?'dev':'dist'),
        filename: debug? '[name].js':'/js/[hash:8].[name].js',
        chunkFilename: debug? '[chunkhash].js':'/js/[chunkhash:8].chunk.js',

        // 公共文件生成的地址
        publicPath: debug ? '' : ''
    },

    module: {
        loaders: [

            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },

            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                // query: {
                //     presets: ['es2015',"stage-2"]
                // }
            },

            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer?{browsers:["last 2 versions", "Android >= 4.0"]}'
            },

            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer?{browsers:["last 2 versions", "Android >= 4.0"]}!sass'
            },

            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            },

            {
                test: /\.(woff|eot|ttf)$/i,
                loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            },
        ]
    },

    // .vue的配置。需要单独出来配置
    vue: {
        loaders: {
            css: 'style!css!autoprefixer?{browsers:["last 2 versions", "Android >= 4.0"]}'
        }
    },

    resolve: {

        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],

        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components')
        }
    },

    plugins: [

        //提供全局的变量，在模块中使用无需用require引入
        new webpack.ProvidePlugin({
            Vue: "vue",
            wx: "weixin-js-sdk",
            _: "lodash"
        }),

        new HtmlWebpackPlugin({
            // title: 'My App',
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: 'clear.html',
            template: './src/clear.html'
        })

        //提公用js到common.js文件中
        //new webpack.optimize.CommonsChunkPlugin('common','common.js')
    ]

};
