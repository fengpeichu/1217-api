/*
 * @Author: 楚凤沛 
 * @Date: 2018-12-17 09:47:36 
 * @Last Modified by:   mikey.zhaopeng 
 * @Last Modified time: 2018-12-17 09:47:36 
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/get/train_tickets', function(req, res, next) {
    console.log(req.query);
    res.send(req.query);
});

module.exports = router;