var circleX;
var circleY;
var targetX;
var targetY;

function setup() {
  createCanvas(600, 400);
  circleX = width/2;
  circleY = height/2;
  targetX = circleX;
  targetY = circleY;
}

function draw() {
  background(200);

  var circleSize = 50;
  noStroke(0);
  fill(350);

  if (mouseIsPressed) {
    targetX = mouseX;
    targetY = mouseY;
  }

  var xDiff = targetX - circleX;
  var yDiff = targetY - circleY;
  var speed = 1.3;

  circleX = circleX + xDiff * speed;
  circleY = circleY + yDiff * speed;

  ellipse(circleX, circleY, circleSize, circleSize);
}
