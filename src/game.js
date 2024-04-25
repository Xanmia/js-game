$.key = {
    left: 0,
    right: 0,
    up: 0,
    down: 0,
}

$.images = {};

$.state;

$.left = 37;
$.up = 38;
$.down = 40
$.right = 39;

$.W = Math.min(window.innerWidth, 800);
$.H = Math.min(window.innerHeight, 800);

$.setup = function () {
    $.main = document.getElementById('main');
    $.mainctx = $.main.getContext('2d');
    $.back = document.getElementById('back');
    $.backctx = $.main.getContext('2d');

    $.main.width = $.W;
    $.main.height = $.H;
    $.back.width = $.W;
    $.back.height = $.H;

    $.mainctx.webkitImageSmoothingEnabled = $.backctx.webkitImageSmoothingEnabled = false;
    $.mainctx.mozImageSmoothingEnabled = $.backctx.mozImageSmoothingEnabled = false;
    $.mainctx.imageSmoothingEnabled = $.backctx.imageSmoothingEnabled = false;

    window.addEventListener('keydown', $.keydown, false);
    window.addEventListener('keyup', $.keyup, false);
    $.updateDelta();

    $.state = new $.play();
    $.loop();


    //$.loadImages();
}


$.keydown = function (e) {
    if (!$.canEdit) { e.preventDefault() };
    if (e.keyCode === $.left) { $.key.left = 1; };
    if (e.keyCode === $.right) { $.key.right = 1; };
    if (e.keyCode === $.up) { $.key.up = 1; };
    if (e.keyCode === $.down) { $.key.down = 1; };
}

$.keyup = function (e) {
    if (e.keyCode === $.left) { $.key.left = 0; };
    if (e.keyCode === $.right) { $.key.right = 0; };
    if (e.keyCode === $.up) { $.key.up = 0; };
    if (e.keyCode === $.down) { $.key.down = 0; };
}


$.loadImages = function () {
    var images = $.data.i, n, i_count = 0;
    var total = Object.keys(images).length;

    var check_done = function (count) {
        if (count >= total) {
            $.state = new $.title();
            $.loop();
        }
    };

    for (n in images) {
        var imageObj = new Image();
        imageObj.onload = function () {
            i_count++;
            check_done(i_count);
        };
        var append = 'data:image/png;base64,';

        imageObj.src = append + images[n];
        $.images[n] = imageObj;
    }
};

$.updateDelta = function () {
    var now = Date.now();
    $.dt = (now - $.lt) / (1000 / 60);
    $.lt = now;
    $.elapsed += $.dt / 60;
}

$.loop = function () {
    window.requestAnimFrame($.loop);
    $.update();
    $.render();
}

$.update = function () {
    $.updateDelta();
    $.state.update();
}

$.render = function () {
    $.mainctx.clearRect(0, 0, $.W, $.H);
    $.state.render();
}

window.addEventListener('load', function () {
    $.setup();
});