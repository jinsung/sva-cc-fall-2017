var circleX = 0;
var circleY = 100;
var speedX = 1;
var speedY = 1.5;

function setup() {
  createCanvas(300, 400);
  console.log("setup")
  var myNumber = addSomeNumber(10, 20);
  console.log("what is number now: " + myNumber)
}

function draw() {
  background(100);

  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  }

  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }

  fill(255);
  ellipse(circleX, circleY, 30, 30);
}

function myFunction() {
  console.log("hey")
}
