var backgroundColor = 200;
var isThrown = false;

var arrowX = 0;
var arrowY = 0;

var targetX = 100;
var targetY = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(backgroundColor);

  drawTarget(targetX, targetY, 5, 80);
  locateArrow()
  drawArrow(arrowX, arrowY, targetX, targetY);
}

function mousePressed () {
  throwArrow();
}

function drawTarget(x, y, numOfCircles, targetSize, targetHue) {
  stroke (0);
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles; // range from 1 to 0.
    fill(step*255);
    var size = targetSize * step;
    ellipse(x, y, size, size );
  }
}

function locateArrow () {
  if (isThrown) {
    var diffX = targetX - arrowX;
    var diffY = targetY - arrowY;
    arrowX = arrowX + diffX * 0.1;
    arrowY = arrowY + diffY * 0.1;
  } else {
    arrowX = mouseX;
    arrowY = mouseY;
  }
}

function drawArrow(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var angle = Math.atan2(dy, dx);

  // move canvas instead of elements
  // 2D trasformation - https://processing.org/tutorials/transform2d/
  push();
  translate(x1, y1);
  rotate(angle);
  var length = 60;
  var red = 255-getDistance(x1, y1, x2, x2);
  stroke (red, 0, 0);
  fill (red, 0, 0);
  triangle(0, 0, 10, 3, 10, -3);
  line(0, 0, length, 0 );

  // draw feather
  var featherPos = 0.7;
  var featherSize = 5;
  for (var i = 0; i < 4; i++) {
    drawFeather(length * featherPos, 0, featherSize);
    featherPos += 0.1;
  }
  pop();
}

function drawFeather(x1, y1, size) {
  line (x1, y1, x1 + size, size);
  line (x1, y1, x1 + size, -size);
}

function throwArrow() {
  isThrown = !isThrown;
}

function getDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var result = Math.sqrt(dx*dx + dy*dy);
  return result;
}
