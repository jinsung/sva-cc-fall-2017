function Arrow (x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.draw = function () {
    push();
    translate(this.x, this.y);
    rotate(this.getAngle());
    fill(0);

    var tSize = this.size * 1.;
    var triWidthDivider = 8 * Math.sin(frameCount* 0.01) * (this.getDistance()/width ) + 1;
    triangle(0, 0, tSize, tSize/triWidthDivider, tSize, -tSize/triWidthDivider);
    // feathers
    pop();
  };

  this.getDistance = function () {
    var dx = this.x - mouseX;
    var dy = this.y - mouseY;
    return Math.sqrt(dx*dx + dy*dy);
  }

  this.getAngle = function () {
    var dx = this.x - mouseX;
    var dy = this.y - mouseY;
    var angleInRad = Math.atan2(dy, dx);
    return angleInRad;
  }
}
