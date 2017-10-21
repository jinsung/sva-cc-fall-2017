

function setup() {
  createCanvas(400, 400);
}
var xPos = 200;
var yPos = 200;


function draw() {
  background(200);

  var redColor = frameCount;
  var sizeOfCircle = 100;

  fill(redColor, 0, 0);
  ellipse(mouseX, mouseY, sizeOfCircle, sizeOfCircle);

  redColor -= 20;
  sizeOfCircle = sizeOfCircle - 20;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20;
  sizeOfCircle = sizeOfCircle - 20;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20;
  sizeOfCircle = sizeOfCircle - 20;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

}
