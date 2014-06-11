var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
	.get(function(req, res) {
	  res.render('index.handlebars', { title: 'ADB' });
	});

module.exports = router;
