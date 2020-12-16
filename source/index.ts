/**
 * @author Kayky Casagrande
 * @date 16/12/2020
 * @version 1.0
 * @description This is the main module of the API.
 */


import express = require('express');

const app: express.Application = express();

const config = require('./config/api_config.json');

// Here is calling the router
app.use('/', require('./routes'))

app.listen(config.port, () => {
    console.log(`API running in ${config.uri}:${config.port}.`);
});

