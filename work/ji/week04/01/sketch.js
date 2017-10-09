var circleX = 0;
var circleY = 100;
var speedX = 50;
var speedY = 100;

function setup() {
  createCanvas(600, 300);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  ellipse(circleX, circleY, 30, 30);

  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  }
  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }

    circleX = circleX + speedX;
    circleY = circleY + speedY;
}
