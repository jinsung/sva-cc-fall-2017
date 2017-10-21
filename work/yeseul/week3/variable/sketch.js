var xPos = 200;
var yPos = 200;

function setup() {
  createCanvas(400, 400);

}

function draw() {

  var redColor = frameCount;
  var yeseul = 100;

  background(200);
  fill(redColor,0,0);
  ellipse(xPos,yPos,yeseul,yeseul);

  redColor -= 20;
  yeseul=yeseul-20;
  fill(redColor,0,0);
  ellipse(xPos,yPos,yeseul,yeseul);

  redColor -= 20;
  yeseul=yeseul-20;
  fill(redColor,0,0);
  ellipse(xPos,yPos,yeseul,yeseul);

  redColor -= 20;
  yeseul=yeseul-20;
  fill(redColor,0,0);
  ellipse(xPos,yPos,yeseul,yeseul);

  xPos += 0.1;
  yPos += 0.1;
  redColor -= 0.01;
}
