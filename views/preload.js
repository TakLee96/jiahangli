function preload() {
	['bg2', 'me', 'Bitrun', 'Txtcoin', 'Wepay', 'Wisen'].forEach(function (src) {
		var image = new Image();
		image.src = '/assets/' + src + '.jpg';
	});
	
	setTimeout(function () {
		document.body.classList.add('background');
		document.getElementById('loaded').classList.remove('hide');
		document.getElementById('loading').classList.add('hide');	
	}, 2000);
}
