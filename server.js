#!/usr/bin/env node
var app = require('./app.js');
var debug = require('debug')('adb');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('we on bish');
	debug('Express server listening on port ' + server.address().port);
})