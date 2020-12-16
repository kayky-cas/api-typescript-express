import express = require('express');

const router: express.Router = express.Router();


router.use('/', require('./get'));



module.exports = router;