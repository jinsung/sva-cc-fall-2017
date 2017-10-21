var circleX = 0;
var circleY = 100;
var speedX = 1;
var speedY = 1.5;

function setup() {
  createCanvas(300, 300);
  //console.log("circleSize;"+circleSize);
}

function draw() {
  background(0);
  fill(255);
  noStroke();
  ellipse(circleX, circleY, 10, 10);

  circleX = circleX + speedX;
  circleY = circleY + speedY;

  if(circleX > width || circleX < 0){
    speedX = speedX * - 1;
  } else if (circleY >height || circleY < 0){
     speedY = speedY * - 1;
  }

}
