var $ = require('jquery');

function clientBanner() {
    var a = $(this);

    // Temporarily disabled as even simple scrolling caused link to open. Further investigation and
    // testing needed.
    // a.on('click touchend', function () {
    //    window.location = a.attr('href');
    // });
}

module.exports = clientBanner;