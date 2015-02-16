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
        nav.css('min-height', height + 'px');
        nav.find('.navbar-button').css('height', height + 'px')
            .find('img').hide().show(0); // ugly trick to force Chrome to recalculate image width
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