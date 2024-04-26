$.play = function () {
    var player = new $.player();
    var enemy = new $.enemy();

    this.update = function () {
        player.update()
        enemy.update()
    }

    this.render = function () {
        player.render()
        enemy.render()
    }
}