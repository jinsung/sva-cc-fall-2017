function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(100);
  var x1 = 200;
  var y1 = 100;
  var x2 = mouseX;
  var y2 = mouseY;
  var targetDist = distance(x1, y1, x2, y2);
  drawTarget(x1, y1, 100, targetDist /10);
  drawTarget(x2, y2, 40, 3);
}

function distance(xpos1, ypos1, xpos2, ypos2) {
  var dx = xpos1 - ypos2;
  var dy = ypos1 = ypos2;
  var dist = Math.sqrt(dx*dx + dy*dy);
  return dist;
}

function drawTarget(x, y, size, numOfCircles) {
  var circleSize = size;
  for (var i = 0; i < numOfCircles; i++) {
    var step = (numOfCircles-i)/numOfCircles;
    fill (255 * step);
    var size = circleSize * step;
    ellipse(x, y, size, size);
  }
}
