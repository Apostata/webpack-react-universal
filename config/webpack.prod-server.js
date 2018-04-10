const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

var webpackConfig = {
    name:"server",
    entry: "./src/server/render.js",
    mode: "production",
    target: "node",

    externals: nodeExternals(), // ignorar nod_modules

    output: {
        filename: "prod-server-bundle.js",
        path: path.resolve(__dirname, "../build"),
        libraryTarget: "commonjs2"
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
        
        new ExtractTextPlugin("[name].css"),
        
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV: JSON.stringify("production")
            }
        })         
    ]
};
module.exports = webpackConfig;