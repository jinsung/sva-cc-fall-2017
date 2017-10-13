var circleX = 0;
var circleY = 100;
var speedX = 2;
var speedY = 8;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(230);
  noStroke ();
  fill(0, 0, 255);
  ellipse(circleX, circleY, 30, 30);

  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  } else if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }

  circleX = circleX + speedX;
  circleY = circleY + speedY;
}
