var $ = require('jquery');

var BASE_HEIGHT = 120;
var MIN_HEIGHT = 60;
var SPEED_FACTOR = 0.2;

/**
 * Reduce header height as the user scrolls down.
 */
function flexibleHeader() {
    var nav = $(this);

    function setHeight(height) {
        var elements = nav.find('.navbar-brand, .navbar-menu-toggle');
        elements.css('height', height + 'px');
        nav.css('min-height', height + 'px');
    }

    function update() {
        var position = $(window).scrollTop();
        var height = BASE_HEIGHT - position * SPEED_FACTOR;
        setHeight(Math.max(height, MIN_HEIGHT));
    }

    $(window).scroll(update);
    update();
}

module.exports = flexibleHeader;