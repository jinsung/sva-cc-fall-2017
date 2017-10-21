var circleX = 0;
var circleY = 100;
var speedX = 5;
var speedY = 5;

function setup() {
  createCanvas(300, 300);
}

function draw() {
  /*var myColor = 255;
  if(mouseX > 100 || mouseX < 200) {
    myColor = 0;
  }

  background(myColor);

  fill(255);
  rect(100, 0, 100, height-1);*/

  background(163, 247, 255);
  fill(116, 82, 255);
  noStroke();
  ellipse(circleX, circleY, 30, 30);

  if (circleX > width || circleX < 0) {
  speedX = speedX * -1;
}

  circleX = circleX + speedX;

  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }

  circleY = circleY + speedY;
}
