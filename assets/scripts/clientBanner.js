var $ = require('jquery');

function clientBanner() {
    var banner = $(this);
    var image = banner.find('img');

    var activeColor = banner.data('active-color');
    var activeSrc = image.data('active-src');
    var normalSrc = image.attr('src');

    var active = false;

    banner
        .mouseenter(function () { active = true; update() })
        .mousedown(function () { active = true; update() })
        .mouseleave(function () { active = false; update() })
        .mouseup(function () { active = false; update() });

    function preloadActiveImage() {
        // $('<img/>')[0].src = activeSrc;
    }

    function update() {
        if (active) {
            banner.css('background-color', activeColor);
            banner.find('img.white').show();
            banner.find('img.black').hide();
        } else {
            banner.css('background-color', 'white');
            banner.find('img.white').hide();
            banner.find('img.black').show();
        }
    }

    preloadActiveImage();
    update();
}

module.exports = clientBanner;