const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require('babel-minify-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
;
var webpackConfig = {
    name:"client",
    entry: {
        main: [
            "./src/main.js"
        ],
    },

    mode: "production",

    output: {
        filename: "[name]-bundle.js",
        path: path.resolve(__dirname, "../dist")
    },
    
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true, //live reoald
        stats:{
            colors: true
        }
    },

    optimization:{
        splitChunks:{
            chunks: "all",
            automaticNameDelimiter: "-",
            cacheGroups:{
                vendors:{
                    name:"vendors",
                    chunks: "initial",
                    minChunks:2
                }
            }
        }
    },

    module:{
        rules:[
            {//loaders para javascript
                test: /\.js$/,
                use:[
                    {
                        loader: "babel-loader"
                    }
                ],
                exclude: /node_modules/
            },
            { 
                test: /\.scss$/,
                use:[
                    {loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, //css para js
                    {
                        loader: "sass-loader", //transpila sass para css
                        options: {
                            sourceMap:true,
                        }
                    }
                ]
            },
            { //loader para as imagens
                test: /\.(jpg|gif|png)$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                        //name:"images/[name]-[hash:8].[ext]"
                        name:"images/[name].[ext]"
                        }
                    }
                ]

            },
            {   //markdown loader
                test: /\.md$/,
                use:[
                    {
                        loader: "markdown-with-front-matter-loader"
                    }
                ]
            }
        ]
    },
    plugins:[
        
        new ExtractTextPlugin("[name].css"),
        new OptimizeCssAssetsPlugin({
            assetsNameRegExp:/\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions:{
                discardComments:{ removeAll: true}
            },
            canPrint: true
        }),
        /*
        new HTMLWebpackPlugin({
            template: "./src/index.ejs",
            inject: true,
            title: "Link's Journal"
        }),
        */
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new MinifyPlugin(),
        new CompressionPlugin({
            algorithm: "gzip"
        }),
        new BrotliPlugin()            
    ]
};
module.exports = webpackConfig;