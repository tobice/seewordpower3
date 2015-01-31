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
        $('<img/>')[0].src = activeSrc;
    }

    function update() {
        if (active) {
            banner.css('background-color', activeColor);
            image.attr('src', activeSrc);
        } else {
            banner.css('background-color', 'white');
            image.attr('src', normalSrc);
        }
    }

    preloadActiveImage();
    update();
}

var clientBanners = {
    init: function () {
        $('.client-banner').each(clientBanner);
    }
};

module.exports = clientBanners;