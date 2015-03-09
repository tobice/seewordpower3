var $ = require('jquery');

/**
 * Hide expanded navbar menu when any item is clicked.
 */
function navbar () {
    var navbar = $(this);

    navbar.find('a').click(function () {
        navbar.collapse('hide');
    })
}

module.exports = navbar;