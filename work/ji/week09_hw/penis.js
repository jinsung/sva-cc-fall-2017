function Penis(ax, ay, size) {
  this.x = ax;
  this.y = ay;
  this.size = size;
  this.draw = function() {
    push();

    translate(this.x, this.y);
    var angle = this.getAngle(this.x, this.y, mouseX, mouseY);
    rotate(angle);
    var size = this.size;
    var ballSize = this.size * 0.3;
    var size2 = this.size * 0.15;
    rect(0, -size2, size, ballSize);
    ellipse(0, 0, ballSize, ballSize)

    var ballLocation = size * -0.3;
    var ballball = size * 0.85;
    for (var i = 0; i < 2; i++) {
    ellipse(ballball, ballLocation, ballSize, ballSize);
    ballLocation += size * 0.6;
    }

    pop();
  };

  this.getAngle = function(x1, y1, x2, y2) {
    var diffX = x1 - x2;
    var diffY = y1 - y2;
    var angle = Math.atan2(diffY, diffX);
    return angle;
  };
}
