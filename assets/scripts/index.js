// Include jQuery (dependency for Bootstrap)
var $ = require('jquery');
window.$ = window.jQuery = $;

// Add only those Bootstrap modules that I need
// require('bootstrap/js/transition');
require('bootstrap/js/collapse');

var mattyImage = require('./mattyImage');
var clientBanners = require('./clientBanners');

$(document).ready(function () {
    mattyImage.init();
    clientBanners.init();
});
