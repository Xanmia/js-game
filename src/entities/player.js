$.player = function () {
    this.x = 0;
    this.y = 0;
    this.w = 25;
    this.h = 25;
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

    }
}