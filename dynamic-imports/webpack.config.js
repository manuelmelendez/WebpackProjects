const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const webpack = require('webpack') 

module.exports = {
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        contacto: path.resolve(__dirname,'src/js/contacto.js'),
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        // publicPath:'dist/',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    { 
                     loader: MiniCSSExtractPlugin.loader
                     },
                    //'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { 
                        loader: MiniCSSExtractPlugin.loader
                    },
                    // 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test:/\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 900000,
                    }
                }  
           },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'home',
            filename: './home.html',
            template: path.resolve(__dirname, './index.html'),
            chunks: ['home']
        }),
        new HtmlWebpackPlugin({
            title: 'contacto',
            filename: './contacto.html',
            template: path.resolve(__dirname, './contacto.html'),
            chunks: ['contacto']
        }),
        // new AddAssetHtmlPlugin({
        //     filepath: require.resolve('./dist/js/modules.js'), 
        // }),
        // AddAsset me esta duplicando el module.js en la carpeta principal cuando ya hay uno creado en la carpeta js
        new MiniCSSExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest.json') 
        })
        ], 
}