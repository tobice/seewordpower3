var $ = require('jquery');

function clientBanner() {
    var a = $(this);
    a.on('click touchend', function () {
        alert("bum");
        window.location = a.attr('href');
    });
}

module.exports = clientBanner;