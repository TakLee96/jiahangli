module.exports = function (req, res, next) {
	var start = +new Date();
	res.on('finish', function () {
		var end = +new Date();
		console.log("[Server] %s %s\nComplete in %sms\n", req.method, req.url, end-start);
	});
	next();
};