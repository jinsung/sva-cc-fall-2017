function setup() {
  createCanvas(400, 400);
  console.log("xPos: " + xPos);
}

var xPos = 200;
var yPos = 200;


function draw() {
background(200);

var red = frameCount;
var ellipsesize = 100;

fill(red, 0, 0);
ellipse(mouseX, mouseY, ellipsesize, ellipsesize);

ellipsesize -= 20;
red -= 25;
fill(red, 0 ,0);
ellipse(xPos, yPos, ellipsesize, ellipsesize);

ellipsesize -= 20;
red -= 20;
fill(red, 0 ,0);
ellipse(xPos, yPos, ellipsesize, ellipsesize);

ellipsesize -= 20;
red -= 20;
fill(red, 0 ,0);
ellipse(xPos, yPos, ellipsesize, ellipsesize);

}
