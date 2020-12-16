/**
 * @author Kayky Casagrande
 * @date 16/12/2020
 * @version 1.0
 * @description This is the module witch controll the routes.
 */

import express = require('express');

const router: express.Router = express.Router();

// Here is defining the routes "path"
router.use('/', require('./main'));



module.exports = router;