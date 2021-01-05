/* eslint-disable global-require */
const config = require('config');
const express = require('express');
const path = require('path');

const nodePort = config.get('port');
const app = express();

const distPath = path.join(__dirname, 'dist');

if (config.get('isProduction') === false) {

    const webpack = require('webpack');
    const history = require('connect-history-api-fallback');

    const webpackConfig = require('./webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    console.log('You are in development mode'); // eslint-disable-line no-console

    const compiler = webpack(webpackConfig);

    app.use(history());
    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/'
    }));

}

app.use('/', express.static(distPath));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(nodePort, () => console.log(`App is listening on ${nodePort}`)); // eslint-disable-line no-console
