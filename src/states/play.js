$.play = function () {
    var player = new $.player();

    this.update = function () {
        player.update();
    }

    this.render = function () {
        player.render()
    }
}