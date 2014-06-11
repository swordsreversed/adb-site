var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
	.get(function(req, res) {
	  res.render('sp.handlebars', { title: 'ADB - Soft Power' });
	});

module.exports = router;
