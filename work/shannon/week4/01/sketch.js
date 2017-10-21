var circleX = 0;
var circleY = 100;
var speedX = 1;
var speedY = 10;

function setup() {
  createCanvas(600, 600);
}

function draw(){
  background(0);
  noStroke();
  fill(255,200,0);
  ellipse(circleX, circleY, 30, 30);

  if (circleX > width || circleX < 0 ){
  speedX = speedX * -1;
  }
  if (circleY > height || circleY < 0){
    speedY = speedY * -1;
  }

  circleX = circleX + speedX;
  circleY = circleY + speedY;
}
