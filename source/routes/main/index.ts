/**
 * @author Kayky Casagrande
 * @date 16/12/2020
 * @version 1.0
 * @description This is a route for the root of the router.
 */

import express = require('express');

const route: express.Router = express.Router();

route.use(express.urlencoded());
route.use(express.json());

// This will return "{mesage: 'This is a mesage for test GET!'}"
route.get('/', (require, response) => {

    response.json({mesage: 'This is a mesage for test GET!'});
});

// This will return what was posted. 
route.post('/', (require, response) => {

    response.json(require.body);
});


module.exports = route;