$.player = function () {
    this.w = 25;
    this.h = 25;
    this.x = (($.W - (this.w / 2)) / 2);
    this.y = (($.H - (this.h / 2)) / 2);
    this.velocityX = 0;
    this.velocityY = 0;
    var lateralMovement = .2;
    this.status = true;

    this.update = function () {
        if ($.key.left) {
            if (this.velocityX > -4) {
                this.velocityX -= lateralMovement;
            }
        }
        else if ($.key.right) {
            if (this.velocityX < 4) {
                this.velocityX += lateralMovement;
            }
        }
    }

    this.render = function () {
        $.mainctx.beginPath();
        $.mainctx.fillStyle = "rgba(0, 100, 200, 1.0)";
        $.mainctx.fillRect(this.x, this.y, this.w, this.h);
        $.mainctx.closePath();
    }
}