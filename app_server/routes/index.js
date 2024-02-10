var express = require('express');
var router = express.Router();
const controller = require('../controllers/main')


/* GET home page. */
router.get('/', controller.index);   //pass the request for the site default starting page known as the root or "/" over the new main controller


module.exports = router;
