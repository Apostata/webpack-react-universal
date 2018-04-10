const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals")
import externals from './node-externals';

var webpackConfig = {
    
    entry: "./src/server/render.js",
    name:"server",
    target: "node",
    externals, //externals : externals
    mode: "development",

    output: {
        filename: "dev-server-bundle.js",
        path: path.resolve(__dirname, "../build"),
        libraryTarget: "commonjs2"
        /*
        commonjs mean pure CommonJs
        commonjs2 also includes the module.exports stuff.
        */
    },
    

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
              test: /\.scss$/,
              use:[
                  {loader: "style-loader"},
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
                            name:"/images/[name]-[hash:8].[ext]",
                            emitFile: false
                        }
                    }
                ]

            },
          {
            test: /\.md$/,
            use: [
              {
                loader: "markdown-with-front-matter-loader"
              }
            ]
          }
        ]
      },
      plugins: [
        
        //new ExtractTextPlugin("[name].css"),
        new webpack.DefinePlugin({
          "process.env": {
            NODE_ENV: JSON.stringify("development")
          }
        })
      ]
    
};
module.exports = webpackConfig;