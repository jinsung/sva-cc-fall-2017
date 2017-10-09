
function setup() {
  createCanvas(800, 800);
  console.log("xPos: "+ xPos);
}


  var xPos = 800;
  var yPos = 800;

function draw() {
  background(200);

  var sizeOfCicle =300;
  var redColor = frameCount;

  xPos -= 1;
  yPos -= 1;
  redColor -=0.01;

  noStroke();
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOfCicle, sizeOfCicle);

  redColor-=20;
  sizeOfCicle = sizeOfCicle-20;
  noStroke();
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOfCicle, sizeOfCicle);

  redColor-=20;
  sizeOfCicle = sizeOfCicle-20;
  noStroke();
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOfCicle, sizeOfCicle);

  redColor-=20;
  sizeOfCicle = sizeOfCicle-20;
  noStroke();
  fill(redColor,0,0);
  ellipse(xPos,yPos,sizeOfCicle, sizeOfCicle);

}
