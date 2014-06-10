#!/usr/bin/env node
var app = require('./app.js');


var ipaddress = process.env.OPENSHIFT_NODEJS_IP ;
if (typeof ipaddress === "undefined") {
    //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
    //  allows us to run/test the app locally.
    console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
    ipaddress = "127.0.0.1";
};

var port = process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || 8080;
if (app.get('env') === 'development') {
	var port = 4000;
}

var server = app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), ipaddress, port);
});
