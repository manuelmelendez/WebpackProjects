const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') 

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    // { 
                    //     loader: MiniCSSExtractPlugin.loader
                    // },
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Plugins',
            filename: './index.html',
            template: path.resolve(__dirname, './index.html')
        }),
/*         new MiniCSSExtractPlugin({
            filename: 'css/[name].css'
        }) */
        ], 
    devServer: {
        hot: true,
        host: 'localhost',
        port: 8090,
        disableHostCheck: true,
        open: true
    }
}