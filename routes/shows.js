var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
	.get(function(req, res) {
	  res.render('show', { title: '2SER On Demand' });
	});

module.exports = router;
