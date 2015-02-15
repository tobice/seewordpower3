var $ = require('jquery');


function greedyJumbotron() {
    // Because of the URL bar in mobile browsers that hides and appears as the user scrolls and
    // therefore changes the viewport height, we can't rely on pure CSS and we have to manage the
    // height of greedy jumbotron manually. We listen to the viewport changes and we adjust the
    // height only when the change is significant enough (which indicates for example device
    // orientation change). Small changes which are likely caused by the disappearing URL bar are
    // ignored.

    var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome on tablet

    var jumbotron = $(this);
    var viewportHeight = $(window).height();

    $(window).resize(function () {
        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            update();
        }
    });

    function update() {
        jumbotron.css('height', viewportHeight + 'px');
    }

    update();
}

module.exports = greedyJumbotron;