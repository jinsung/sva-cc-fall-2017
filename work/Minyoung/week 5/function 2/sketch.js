function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(100);
  var x1 = 300;
  var y1 = 300;
  var x2 = mouseX;
  var y2 = mouseY;
  var targetDist = distance(x1, y1, x2, y2);
  drawTarget(x1, y1, 300, targetDist / 10 );
  drawTarget(x2, y2, 50, 15);
}

function distance(xpos1, ypos1, xpos2, ypos2) {
  var dx = xpos1 - xpos2;
  var dy = ypos1 - ypos2;
  var dist = Math.sqrt(dx*dx + dy*dy);
  return dist;
}

function drawTarget(x, y, size, step) {
  var circleSize = size;
  var numOfCircles = step;
  for (var i = 0; i < numOfCircles; i++) {
    var step =(numOfCircles-i)/numOfCircles;
    // noStroke();
    fill(255, 0, 0 * step);
    var size = circleSize * step;
    ellipse (x, y, size, size);

  }
}
