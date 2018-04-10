const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
import externals from './node-externals';

var webpackConfig = {
    name:"server",
    entry: "./src/server/render.js",
    mode: "production",
    target: "node",

    externals,

    output: {
        filename: "prod-server-bundle.js",
        path: path.resolve(__dirname, "../build"),
        libraryTarget: "commonjs2"
    },
    
    optimization:{
        splitChunks:{
            chunks: "all",
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
                    {loader: "style-loader",
                        options: {
                            sourceMap:true,
                        }
                    },
                    {
                    loader: "css-loader",
                        options: {
                            sourceMap: true,
                            minimize:true
                        }
                    }, //css para js
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
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
                        name:"images/[name].[ext]",
                        emitFile: false
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
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
          }),
        //new ExtractTextPlugin("[name].css"),
        
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify("production")
            }
        })         
    ]
};
module.exports = webpackConfig;