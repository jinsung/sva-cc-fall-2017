var circleX = 0;
var circleY = 100;
var speedX = 10;
var speedY = 10;

function setup() {
  createCanvas(300, 300);
}


function draw() {
  background(100);
  noStroke();
  fill(255);
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
