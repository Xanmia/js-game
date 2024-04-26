$.enemy = function () {
    this.w = 25;
    this.h = 25;
    this.x = 0;
    this.y = 0;
    this.velocityX = 0;
    this.velocityY = 0;
    var lateralMovement = .2;
    this.status = true;

    this.update = function () {
        this.x += lateralMovement;
        this.y += lateralMovement;
    }

    this.render = function () {
        $.mainctx.beginPath();
        $.mainctx.fillStyle = "rgba(0, 100, 100, 1.0)";
        $.mainctx.fillRect(this.x, this.y, this.w, this.h);
        $.mainctx.closePath();
    }
}