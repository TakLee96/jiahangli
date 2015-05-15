// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56469080-1', 'auto');
ga('send', 'pageview');

function handleEnter() {
	this.classList.add('darken');
	this.classList.remove('brighten');
}

function handleLeave() {
	this.classList.add('brighten');
	this.classList.remove('darken');
}

var images = document.getElementsByClassName('img');

for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('mouseenter', handleEnter);
	images[i].addEventListener('mouseleave', handleLeave);
}
