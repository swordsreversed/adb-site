var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
	.get(function(req, res) {
	  res.render('new1.handlebars');
	});

module.exports = router;
