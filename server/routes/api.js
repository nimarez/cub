var express = require('express');
var router = express.Router();

router.get('/auth/spotify', function(req, res, next) {
    res.json({"songs": ["bad guy", "crazy town"]})
});

module.exports = router;
