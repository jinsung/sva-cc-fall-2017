var r;
var g;
var b;
var a;
var size;
var x;
var y;

var myHue = 0;
var centerX = 0.0, centerY = 0.0;

var radius = 90, rotAngle = -90;
var accelX = 0.0, accelY = 0.0;
var deltaX = 0.0, deltaY = 0.0;
var springing = 0.0009, damping = 0.98;
var nodes = 5;

var nodeStartX = [];
var nodeStartY = [];
var nodeX = [];
var nodeY = [];
var angle = [];
var frequency = [];

// soft-body dynamics
var organicConstant = 10.0;

function setup() {
  createCanvas(1000, 600);

  centerX = width/2;
  centerY = height/2;

  //initialize arrays to 0
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }

  // iniitalize frequencies for corner nodes
  for (var i=0; i<nodes; i++){
    frequency[i] = random(5, 12);
  }
  frameRate(40);
}

function draw() {
  colorMode(HSB);
  background(255);
  if (mouseIsPressed) {
    background(myHue, 100, 100);
  }

  myHue += 5;
  fill(myHue, 100, 100);

  if (myHue > 360) {
    myHue = 0;
  }

  stroke(r, g, b, a);
  if (mouseIsPressed) {
    fill(255);
  }
  //push();
  // translate(width*0.8, height*0.5);
  // rotate(frameCount / -50.0);
  star(mouseX, mouseY, 35, 65, 5);
  //pop();

  drawShape();
  moveShape();

  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
}

function drawShape() {
  //  calculate node  starting locations
  for (var i=0; i<nodes; i++){
    nodeStartX[i] = centerX+cos(radians(rotAngle))*radius;
    nodeStartY[i] = centerY+sin(radians(rotAngle))*radius;
    rotAngle += 360.0/nodes;
  }

  // draw polygon
  curveTightness(organicConstant);
  fill(myHue, 100, 100);
  if (mouseIsPressed) {
    fill(255);
  }
  beginShape();
  for (var i=0; i<nodes; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (var i=0; i<nodes-1; i++){
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}

function moveShape() {
  //move center point
  deltaX = mouseX-centerX;
  deltaY = mouseY-centerY;

  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

  // move predator's center
  centerX += accelX;
  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1-((abs(accelX)+abs(accelY))*1);

  //move nodes
  for (var i=0; i<nodes; i++){
    nodeX[i] = nodeStartX[i]+sin(radians(angle[i]))*(accelX*2);
    nodeY[i] = nodeStartY[i]+sin(radians(angle[i]))*(accelY*2);
    angle[i] += frequency[i];
  }
}

function star(mouseX, mouseY, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  push();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = mouseX + cos(a) * radius2;
    var sy = mouseY + sin(a) * radius2;
    vertex(sx, sy);
    sx = mouseX + cos(a+halfAngle) * radius1;
    sy = mouseY + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  pop();
  }
  endShape(CLOSE);
}
