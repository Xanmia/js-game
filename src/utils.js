"use strict";

$.util = {};

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

$.util.range = function (n, r) {
    if (n < 0) {
        return Math.max(n, -r);
    }
    else if (n > 0) {
        return Math.min(n, r);
    }
}

$.util.rectInRect = function (r1, r2) {
    return !(r2.x > r1.x + r1.w ||
        r2.x + r2.w < r1.x ||
        r2.y > r1.y + r1.h ||
        r2.y + r2.h < r1.y);
};

$.util.pickRandomFromObject = function (obj) {
    var keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]];
}