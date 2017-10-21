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

var arrow1;
var arrow2;

function setup() {
  createCanvas(500, 500);
  arrow1 = new Arrow(200, 100, 100);
  arrow2 = new Arrow(200, 200, 100);
}

function draw() {
  background(200);
  arrow1.draw();
  arrow2.draw();
}
