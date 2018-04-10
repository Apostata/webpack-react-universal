const path = require('path');
const webpack = require('webpack');
//const HTMLWebpackPlugin = require('html-webpack-plugin');
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpackConfig = {
    name:"client",
    entry: {
        vendors: ["react", "react-dom"],
        main: [
            "react-hot-loader/patch",
            "babel-runtime/regenerator",
            "webpack-hot-middleware/client?reload=true",
            "./src/main.js"
        ],
    },

    mode: "development",

    output: {
        filename: "[name]-bundle.js",
        chunkFilename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/"
    },
    
    devServer: {
        contentBase: "dist",
        overlay: true,
        hot: true, //live reoald
        stats:{
            colors: true
        }
    },

    devtool: "source-map",

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
                use:ExtractTextPlugin.extract({
                    fallback: "style-loader",    
                    use:[{
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
                    }]
                })
            },

            { //loader para as imagens
                test: /\.(jpg|gif|png)$/,
                use:[
                    {
                        loader: "file-loader",
                        options:{
                            name:"images/[name]-[hash:8].[ext]"
                        }
                    }
                ]

            },
           {
                test: /\.html$/,
                use: [
                  {
                    loader: "file-loader",
                    options: {
                      name: "[name].[ext]"
                    }
                  },
                  { loader: "extract-loader" },
                  {
                    loader: "html-loader",
                    options: {
                      attrs: ["img:src"]
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
                "NODE_ENV": JSON.stringify("development")
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        /*new HTMLWebpackPlugin({
            template:   'src/index.ejs',
            inject: true,
            title: "Link's journal" 
        }),*/
        /*new BundleAnalyzerPlugin({
            generateStatsFile: false
        })*/
    ]   
};
module.exports = webpackConfig;