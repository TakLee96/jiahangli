// Constants
var NAV_BAR_HEIGHT = 51;
var THRESHOLD_WIDTH = 710;

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56469080-1', 'auto');
ga('send', 'pageview');

// Main
window.handleOnResize = function () {
  window.renderComponent(window.innerHeight, window.innerWidth);
};

window.renderComponent = function (stdh, stdw) {
  var about_height = parseFloat(stdh) - NAV_BAR_HEIGHT;
  $('#about').css('height', about_height + 'px');
};

window.handleAboutButtonOnClick = function () {
  window.alert("Sorry, the developer sucks for now. \
  But the More tag on the nav bar still works...");
};
