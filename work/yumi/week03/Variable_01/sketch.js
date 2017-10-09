var circleSize;
var xPos = 200;
var yPos = 200;


function setup() {
  createCanvas(400, 400);
  console.log("circleSize;"+circleSize);

}

function draw() {
  background(200);

  circleSize = 240;
  var redColor = frameCount;

  fill(redColor, 0, 0);
  ellipse(mouseX, mouseY, circleSize, circleSize);

  circleSize = circleSize-10;
  redColor -= 10;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, circleSize, circleSize);

  circleSize = circleSize -10;
  redColor -= 10;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, circleSize, circleSize);

  circleSize = circleSize-10;
  redColor -= 10;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, circleSize, circleSize);

  xPos += 1;
  yPos += 1;


}
