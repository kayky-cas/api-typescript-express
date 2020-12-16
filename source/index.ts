import express = require('express');


const app: express.Application = express();

const config = require('./config/api_config.json');


app.use('/', require('./routes'))

app.listen(config.port, () => {
    console.log(`API running in ${config.uri}:${config.port}.`);
});

