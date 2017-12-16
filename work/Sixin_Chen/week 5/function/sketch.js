function myFuncion() {
  console. log("hey this is my funtion")
  var myNumber = myFunction();
}
var circleX = 10;
var circleY = 20;
var circleSize = 20;
var speedX = 2;
var speedY = 2.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100);


  circleX = circleX + speedX;
  circleY = circleY + speedY;

  if (circleX > width || circleX < 0) {
    speedX *= -1;
  } else if (circleY > height || circleY < 0) {
    speedY *= -1;
  }

  fill(255);
  ellipse(circleX, circleY, circleSize, circleSize);
}
function drawCircle(){
   fill(255);

}
