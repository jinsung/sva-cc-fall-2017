var circleX;
var circleY;
var targetX;
var targetY;

function setup() {
createCanvas(600, 400);
circleX = width/2;
circleY = height/2;
targetX = circleX;
targetY = circleY;
}

function draw() {
background(200);
var circleSize = 50;

noStroke();
fill(0);
ellipse(circleX,circleY,circleSize,circleSize);

if (mouseIsPressed) {
  targetX = mouseX;
  targetY = mouseY;
}

var xDiff = targetX - circleX;
var yDiff = targetY - circleY;
var speed = 0.1;

circleX = circleX + xDiff * speed;
circleY = circleY + yDiff * speed;

}


/*
var red = unhex("FF")
var green = unhex("AA")
var blue = unhex("00")
fill (red, green, blue)
*/
