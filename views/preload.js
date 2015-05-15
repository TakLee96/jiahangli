['bg2.jpg', 'me.jpg', 'Bitrun.jpg', 'Txtcoin.jpg', 'Wepay.png', 'Wisen.png'].forEach(function (src) {
	var image = new Image();
	image.src = '/assets/' + src;
});

setTimeout(function () {
	document.body.classList.add('background');
	document.getElementById('loaded').classList.remove('hide');
	document.getElementById('loading').classList.add('hide');	
}, 1500);
