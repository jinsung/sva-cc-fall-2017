function setup() {
  createCanvas(600, 400);
  circleX = width/2;
  circleY = height/2;
  targetX = circleX;
  targetY = circleY;
}

var circleX;
var circleY;
var targetX;
var targetY;

function draw() {
    background (200);

    var circleSize = 50;
    noStroke();
    var red = unhex("00");
    var green = unhex("00");
    var blue = unhex("FF");
    fill(red, green, blue);


    if (mouseIsPressed){
      targetX = mouseX;
      targetY = mouseY;
    }

    var xDiff = targetX - circleX;
    var yDiff = targetY - circleY;
    var speed = 0.2;

    circleX = circleX + xDiff * speed;
    circleY = circleY + yDiff * speed;

    ellipse(circleX, circleY, circleSize, circleSize);
}
