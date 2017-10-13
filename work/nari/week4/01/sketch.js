var circleX = 20;
var circleY = 100;
var speedX = 2;
var speedY = 1;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(100);
  fill(255);
  ellipse (circleX, circleY, 30, 30);

  circleX = circleX + speedX;
  circleY = circleY + speedY;

  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  } else if (circleY > height || circleY < 0){
      speedY = speedY * -1;
  }





}
