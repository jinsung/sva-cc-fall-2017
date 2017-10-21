var x1 = 200;
var y1 = 100;
var targetX = 0;
var targetY = 0;
var x2 = 0;
var y2 = 0;

var isFired = false;

function setup() {
  createCanvas(600, 600);

  targetX = mouseX;
  targetY = mouseY;
  x2 = targetX;
  y2 = targetY;
}

function draw() {
  background(100);
  var targetDist = distance(x1, y1, x2, y2);
  drawTarget(x1, y1, 100, targetDist /10);
  var arrowAngle = calcAngle(x1, y1, x2, y2);
  if (isFired) {
    targetX = x1;
    targetY = y1;
  } else {
    targetX = mouseX;
    targetY = mouseY;
  }
  animateArrow();
  push();
  translate(x2, y2);
  rotate(arrowAngle + Math.PI/2);
  drawArrow(50);
  pop();

}

function animateArrow() {
  var dx = targetX - x2;
  var dy = targetY - y2;
  x2 = x2 + dx * 0.1;
  y2 = y2 + dy * 0.1;
}

function mousePressed() {
  isFired = !isFired;
}

function drawArrow(arrowLength) {
  fill(0);
  triangle(0, 0, 3, 10, -3, 10);
  noFill();
  stroke(0);
  line(0, 0, 0, arrowLength);
}

function calcAngle(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var angle = Math.atan2(dy, dx);
  return angle;
}

function drawTarget(x, y, size, numOfCircles) {
  var circleSize = size;
  for (var i = 0; i < numOfCircles; i++) {
    var step = (numOfCircles-i)/numOfCircles;
    fill(255 * step);
    var size = circleSize * step;
    ellipse(x, y, size, size);
  }
}

function distance(xpos1, ypos1, xpos2, ypos2) {
  var dx = xpos1 - xpos2;
  var dy = ypos1 - ypos2;
  var dist = Math.sqrt(dx*dx + dy*dy);
  return dist;
}
