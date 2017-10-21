function Arrow (x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.draw = function () {
    push();
    translate(this.x, this.y);
    rotate(this.getAngle());
    fill(0);
    line(0, 0, this.size, 0);
    var tSize = this.size * 0.15;
    triangle(0, 0, tSize, tSize/3, tSize, -tSize/3);
    // feathers

    var fPosPct = 0.7;
    var fSize = this.size * 0.05;
    for (var i = 0; i < 3; i++) {
      var fPos = this.size*fPosPct;
      line (fPos, 0, fPos+fSize,  fSize);
      line (fPos, 0, fPos+fSize, -fSize);
      fPosPct += 0.1;
    }
    pop();
  };

  this.getAngle = function () {
    var dx = this.x - mouseX;
    var dy = this.y - mouseY;
    var angleInRad = Math.atan2(dy, dx);
    return angleInRad;
  }
}
