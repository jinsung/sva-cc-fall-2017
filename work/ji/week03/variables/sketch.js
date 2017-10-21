function setup() {
  createCanvas(400, 400);
  console.log("xPos: " + xPos);
}

var xPos = 200;
var yPos = 200;

function draw() {
  background(200)

  var redColor = frameCount;
  var sizeOfCircle = 300;

  fill(redColor, 0, 0);
  ellipse(mouseX, mouseY, sizeOfCircle, sizeOfCircle);

  redColor -= 20;
  sizeOfCircle = sizeOfCircle - 40;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20;
  sizeOfCircle = sizeOfCircle - 40;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20;
  sizeOfCircle = sizeOfCircle - 40;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= .5;


}
