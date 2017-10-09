var circleX = 0;
var circleY= 150;
var speedX= 1;
var speedY= 1;

function setup() {
createCanvas(300,600);
}

function draw(){
  background(100);
  fill(255);
  ellipse(circleX,circleY,30,30);
  if(circleX > width || circleX < 0) {
  speedX = speedX * - 1.5;
}
circleX = circleX + speedX;
 if(circleY > height|| circleY < 0){
   speedY = speedY * -1.8;
 }
circleY = circleY + speedY;
 }
