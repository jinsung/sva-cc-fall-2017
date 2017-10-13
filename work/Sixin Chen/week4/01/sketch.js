var circleX = 0;
var circleY = 100;
var speedX =1
var speedY =1

function setup() {
  createCanvas(300, 500);
}

function draw () {
  background(100);

 ellipse(circleX, circleY, 30, 30);
 fill(255);

 if (circleX > width || circleX < 0){
   speedX = speedX * -1;
 }
 if (circleY > height || circleY < 0){
   speedY = speedY * -1.2;
 }

   circleX = circleX + speedX;
   circleY = circleY + speedY;

 }
