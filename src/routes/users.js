var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/get/train_tickets', function(req, res, next) {
    console.log(req.query);
    res.send(req.query);
});

module.exports = router;