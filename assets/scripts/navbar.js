var $ = require('jquery');

/**
 * Hide expanded navbar menu when anything on the screen is clicked.
 */
function navbar () {
    var navbar = $(this);

    $(document).click(function () {
        if (navbar.is('.in')) {
            navbar.collapse('hide');
        }
    });
}

module.exports = navbar;