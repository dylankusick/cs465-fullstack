var express = require('express');
var router = express.Router();
const tripsController = require('../controllers/trips')


router
    .route('/trips') //define route called /trips
    .get(tripsController.tripsList); //when get request comes in, pass to the tripsList controller

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);    

module.exports = router;
