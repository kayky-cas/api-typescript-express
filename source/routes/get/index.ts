import express = require('express');

const route: express.Router = express.Router();


route.get('/', (require, response) => {
    response.send('Oi Rapasiada.')
});




module.exports = route;