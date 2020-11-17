const config = require('config');
const express = require('express');
const path = require('path');

const nodePort = config.get('port');
const app = express();

app.get('/', (req, res) => {
    // TODO: neposila app.js
    res.sendFile(path.join(`${__dirname}/dist/index.html`));
    //    res.send('Hello world'));
});

app.listen(nodePort, () => {
    // eslint-disable-next-line no-console
    console.log(`App is listening on ${nodePort}`);
});
