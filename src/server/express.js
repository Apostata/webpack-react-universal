import express from 'express';
const server = express();
import path from 'path';

const expressStaticGzip = require('express-static-gzip')

import webpack from 'webpack';
import configDevClient from "../../config/webpack.dev-client.js";
import configDevServer from "../../config/webpack.dev-server.js";
import configProdClient from "../../config/webpack.prod-client.js";
import configProdServer from "../../config/webpack.prod-server.js";

import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV !== "production"){
    
    const compiler = webpack([configDevClient, configDevServer]);
       
    
    const clientCompiler = compiler.compilers[0];
    const serverCompiler = compiler.compilers[1];

    const webpackDevMiddleware = require('webpack-dev-middleware')(
        compiler,
        configDevClient.devServer,
        { serverSideRender: true }
    );
    const webpackHotMiddleware = require('webpack-hot-middleware')(
        clientCompiler,
        configDevClient.devServer,
    );

    server.use(webpackDevMiddleware); //usar as configurações de devserver do webpack config
    server.use(webpackHotMiddleware); //usar live reload USAR SEMPRE DEPOIS DO DEV MIDDLEWARE
    server.use(webpackHotServerMiddleware(compiler));
}
else{
    webpack([configProdClient, configProdServer]).run((err, stats) =>{
        const render = require('../../build/prod-server-bundle.js').default;

        server.use(
            expressStaticGzip("dist", {
                    enableBrotli:true
                }
            )
        );
        server.use(render());
    })
    
}



const PORT = process.env.PORT || 9001;
server.listen(PORT, ()=>{
    console.log(`Servidor funcionando na porta ${PORT} ${process.env.NODE_ENV}`);
});