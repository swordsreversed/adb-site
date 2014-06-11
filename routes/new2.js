var express = require('express');
var router = express.Router();

/* GET home page. */
router.route('/')
	.get(function(req, res) {
	  res.render('new2.handlebars', { title: 'ADB - Soft Power' });
	});

module.exports = router;
