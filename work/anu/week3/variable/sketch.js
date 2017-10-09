var xPos = 200;
var yPos = 200;

function setup() {
  createCanvas(400, 400);
  console.log("xPos: " + xPos);
}

function draw() {
  background(200);

  var sizeOfCircle= 240;
  var redColor = frameCount;

  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20
  sizeOfCircle = sizeOfCircle -20;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20
  sizeOfCircle = sizeOfCircle -20;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20
  sizeOfCircle = sizeOfCircle -20;
  fill(redColor, 0, 0);
  ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  redColor -= 20
  sizeOfCircle = sizeOfCircle -20;

  xPos += 1;
  yPos += 1;

  redColor = redColor -1;
  redColor -= 0.1;
}
