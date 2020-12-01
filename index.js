/* eslint-disable global-require */
const config = require('config');
const express = require('express');
const path = require('path');
const webpack = require('webpack');

const nodePort = config.get('port');
const app = express();

const distPath = path.join(__dirname, 'dist');

if (config.get('isProduction') === false) {

    const webpackConfig = require('./webpack.config');
    const webpackDevMiddleware = require('webpack-dev-middleware');

    console.log('You are in development mode'); // eslint-disable-line no-console

    const compiler = webpack(webpackConfig);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: '/'
    }));

}

app.use(express.static(distPath));
app.listen(nodePort, () => console.log(`App is listening on ${nodePort}`)); // eslint-disable-line no-console
