var circleX = 100;
var circleY = 100;
var speedX = 1;
var speedY = 1.5;

function setup() {
  createCanvas(300, 400);
  console.log("setup")
  var myNumber = addSomeNumber(10, 20);
  console.log("what is my number now: " + myNumber)
}

function addSomeNumber( x, y ) {
  var sum = x + y;
  return sum;
}

function draw() {
  background(0);

  if (circleX > width || circleX < 0) {
    speedX = speedX * -1;
  }

  circleX = circleX + speedX

  if (circleY > height || circleY < 0) {
    speedY = speedY * -1;
  }

    circleX = circleX + speedX;
    circleY = circleY + speedY;

    fill(255, 0, 0);
    ellipse(circleX, circleY, 30, 30);
}
