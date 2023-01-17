const express = require('express'); 
const appController = require('../appController');
const router = express.Router();

router.get('/', appController.homePage)


module.exports = router;