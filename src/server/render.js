import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import Routes from '../components/Routes';
export default ()=> (req, res) => {
    res.send(`
        <html>
            <head>
                <link href="main.css" rel="stylesheet" />
            </head>
            <body>
                <div id="react-root">${renderToString(
                    <StaticRouter location ={req.url} context={{}}>
                        <Routes/>
                    </StaticRouter>
                )}</div>
                <script src="vendors-bundle.js"></script>
                <script src="main-bundle.js"></script>
            </body>
        </html>
    `)
}
