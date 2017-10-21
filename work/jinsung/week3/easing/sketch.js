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

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function draw() {
  background(200);

  var circleSize = 50;


  var myColor = hexToRgb("FF0000");
  fill(myColor.r, myColor.g, myColor.b);


  if (mouseIsPressed) {
    targetX = mouseX;
    targetY = mouseY;
  }

  var xDiff = targetX - circleX;
  var yDiff = targetY - circleY;
  var speed = 1.3;

  circleX = circleX + xDiff * speed;
  circleY = circleY + yDiff * speed;

  ellipse(circleX, circleY, circleSize, circleSize);
}
