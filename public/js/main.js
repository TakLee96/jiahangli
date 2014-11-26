// Constants
var NAV_BAR_HEIGHT = 51;

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56469080-1', 'auto');
ga('send', 'pageview');

// Main
function handleOnResize () {
  var h = parseFloat(window.innerHeight);
  var w = parseFloat(window.innerWidth);
  renderAboutComponent(h, w);
}

function renderAboutComponent (h, w) {
  var about_height = h - NAV_BAR_HEIGHT;
  $('#about').css('height', about_height + 'px');
}

function handleAboutButtonOnClick () {
  alert("Sorry, the developer sucks for now. \
  But the More tag on the nav bar still works...");
}
