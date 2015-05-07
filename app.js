/**
 * The static server for my personal website
 * @author TakLee96
 */

var express = require('express');

var app = express();

app.use(function (req, res, next) {
    var start = +new Date();
    res.on('finish', function () {
        var end = +new Date();
        console.log("[Server] %s %s\nComplete in %sms\n", req.method, req.url, end-start);
    });
    next();
});

app.get('/', function (req, res, next) {
    res.render('home.jade', {pageTitle: 'Home'});
});

app.get('/about', function (req, res, next) {
    res.render('about.jade', {pageTitle: 'About'}); 
});

app.get('/academic', function (req, res, next) {
    res.render('academic.jade', {pageTitle: 'Academic'}); 
});

app.get('/experience', function (req, res, next) {
    res.render('experience.jade', {pageTitle: 'Experience'}); 
});

app.use(express.static(__dirname));

app.use(function (req, res, next) {
	res.status(404).end("Oops... The url you are visiting is not on this planet >_<");
});

app.listen(process.env.port || 8080, function () {
	console.log("[Server] listening on port %s\n", this.address().port);
});