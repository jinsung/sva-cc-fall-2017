function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);
  var firstArrowX = 100;
  var firstArrowY = 100;
  var angle = getAngle(firstArrowX, firstArrowY, mouseX, mouseY) + radians(180);
  push();
  translate(firstArrowX, firstArrowY);
  rotate(angle);
  drawArrow(0, 0, 100);
  pop();
  drawArrow(100, 200, 50);
}

function drawArrow(x, y, size) {
  fill(0);
  line(x, y, x+size, y);
  var tSize = size * 0.15;
  triangle(x, y, x+tSize, y+tSize/3, x+tSize, y-tSize/3);
  // feathers
  var fPos = size * 0.7;
  var fSize = size * 0.05;
  line (x+fPos, y, x+fPos+fSize, y+fSize);
  line (x+fPos, y, x+fPos+fSize, y-fSize);
  fPos = size * 0.8;
  line (x+fPos, y, x+fPos+fSize, y+fSize);
  line (x+fPos, y, x+fPos+fSize, y-fSize);
  fPos = size * 0.9;
  line (x+fPos, y, x+fPos+fSize, y+fSize);
  line (x+fPos, y, x+fPos+fSize, y-fSize);
}

function getAngle(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var angleInRad = Math.atan2(dy, dx);
  return angleInRad;
}
