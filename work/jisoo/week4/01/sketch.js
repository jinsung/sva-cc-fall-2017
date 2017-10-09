var circleX=0;
var circleY=100;
var speedX=1;
var speedY=1;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  fill(100,200,0,100);
  noStroke();
  ellipse(circleX, circleY, 30,30);

  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  }
    circleX = circleX - speedX;

  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }
    circleX = circleX + speedX;
    circleY = circleY + speedY;
}
