// Include jQuery (dependency for Bootstrap)
var $ = require('jquery');
window.$ = window.jQuery = $;

// Add only those Bootstrap modules that I need
require('bootstrap/js/transition');
require('bootstrap/js/collapse');

var mattyImage = require('./mattyImage');
var flexibleHeader = require('./flexibleHeader');
var greedyJumbotron = require('./greedyJumbotron');

$(document).ready(function () {
    mattyImage.init();
    $('nav.navbar').each(flexibleHeader);
    $('.greedy-jumbotron').each(greedyJumbotron);
});
