var $ = require('jquery');

var ASPECT_RATIO = 0.931255;  /** Aspect ratio of the image */
var image; /** DIV with the image as the background */
var holder; /** DIV that will mimic the image size */
var face; /** DIV covering the face in the picture */
var left, right; /** DIVs for left and right eye lid */
var opened = true; /** Are eyes currently opened? */

var peekInterval;

/**
 * Update holder's size so it would match the size of the underlying image. (We're simulating
 * background-size: contain property)
 */
function updateSize() {
    // apect ratio = width / height
    if ((image.width() / image.height()) > ASPECT_RATIO) {
        holder
            .width(image.height() * ASPECT_RATIO)
            .height(image.height());
    } else {
        holder
            .width(image.width())
            .height(image.width() / ASPECT_RATIO);
    }
}

function openEyes() {
    opened = true;
    openLeft();
    openRight();
    clearInterval(peekInterval);
}

function closeEyes() {
    opened = false;
    closeLeft();
    closeRight();
    peekInterval = setInterval(peek, 2000);
}

function openLeft() { left.hide(); }
function closeLeft() { left.show(); }
function openRight() { right.hide(); }
function closeRight() { right.show(); }

function peek() {
    if (!opened) {
        openLeft();
        setTimeout(function () {
            if (!opened) {
                closeLeft();
            }
        }, 300);
    }
}

// public methods
var mattyImage = {
    init: function () {
        image = $('.matty-image');
        holder = $('.matty-image-holder');
        face = $('.matty-image-face');
        left = $('.matty-image-blink-left');
        right = $('.matty-image-blink-right');

        face.mouseenter(closeEyes);
        face.mouseleave(openEyes);

        updateSize();
        $(window).resize(updateSize);
    }
};

module.exports = mattyImage;