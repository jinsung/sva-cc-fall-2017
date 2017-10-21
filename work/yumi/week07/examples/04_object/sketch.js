
var arrow = {
  x: 100,
  y: 100,
  size: 100,
  draw: function () {

    push();
    translate(this.x, this.y);
    rotate(this.getAngle());
    fill(0);
    line(0, 0, this.size, 0);
    var tSize = this.size * 0.15;
    triangle(0, 0, tSize, tSize/3, tSize, -tSize/3);
    // feathers
    var fPos = this.size * 0.7;
    var fSize = this.size * 0.05;
    line (fPos, 0, fPos+fSize, fSize);
    line (fPos, 0, fPos+fSize, -fSize);
    fPos = this.size * 0.8;
    line (fPos, 0, fPos+fSize, fSize);
    line (fPos, 0, fPos+fSize, -fSize);
    fPos = this.size * 0.9;
    line (fPos, 0, fPos+fSize, fSize);
    line (fPos, 0, fPos+fSize, -fSize);
    pop();
  },
  getAngle: function () {
    var dx = this.x - mouseX;
    var dy = this.y - mouseY;
    var angleInRad = Math.atan2(dy, dx);
    return angleInRad;
  }
}

function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);
  arrow.draw();
}
