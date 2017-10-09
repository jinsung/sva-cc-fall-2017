function setup() {
  createCanvas(400, 400);
  console.log("something")
}

var xPos = 200;
var yPos = 200;


function draw() {

  var redColor = frameCount;
  var sizeOFcircle = 100;

  background(200);
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOFcircle,sizeOFcircle);

  redColor -= 20;
  sizeOFcircle = sizeOFcircle - 20;
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOFcircle,sizeOFcircle);

  redColor -= 20;
  sizeOFcircle = sizeOFcircle - 20;
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOFcircle,sizeOFcircle);

  redColor -= 20;
  sizeOFcircle = sizeOFcircle - 20;
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOFcircle,sizeOFcircle);


}
