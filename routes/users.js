'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
	.get(function(req, res) {
	  res.render('user', { title: 'Express', message: 'liz thicc = )' });
	});

module.exports = router;
