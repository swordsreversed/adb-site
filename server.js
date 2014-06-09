#!/usr/bin/env node
var app = require('./app.js');
var debug = require('debug')('adb');

app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP);
        self.port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

        if (typeof app.ipaddress === "undefined") {
            //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
            //  allows us to run/test the app locally.
            console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
            app.ipaddress = "127.0.0.1";
        };

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);

// var server = app.listen(app.get('port'), function() {
// 	console.log('we on bish');
// 	debug('Express server listening on port ' + server.address().port);
// })

var server = app.listen(app.port, app.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });