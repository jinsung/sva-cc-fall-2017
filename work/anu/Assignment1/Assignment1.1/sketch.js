var rectX;
var rectY;
var targetX;
var targetY;

function setup() {
  createCanvas(1500, 700);
  rectX = width/2;
  rectY = height/2;
  targetX = rectX;
  targetY = rectY;
}

  var myHue = 0;

function draw() {

  colorMode(HSB);
  //background(200);
  /*rectMode(CENTER);
  fill(myHue, 100, 100);
  rect(width/2, height/2, 10, 10);*/
  push();
  var xPos = random(5)-5;
  var yPos = random(5)-5;
  var rectSize = 100 + random(5);

  /*if (mouseIsPressed) {
  rect(mouseX+xPos, mouseY+yPos, rectSize, rectSize);
}*/

  myHue += 5;
  fill(myHue, 100, 100);
  strokeWeight(0.1);

  if (myHue > 360) {
    myHue = 0;
  }

  if (mouseIsPressed) {
    targetX = mouseX;
    targetY = mouseY;
  }

  var xDiff = targetX - rectX;
  var yDiff = targetY - rectY;
  var speed = 2;

  rectX = rectX + xDiff * speed;
  rectY = rectY + yDiff * speed;
  rect(rectX, rectY, rectSize, rectSize);
  pop();
}
