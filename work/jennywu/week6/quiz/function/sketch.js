function setup() {
  createCanvas(100, 100);
  smooth();
}

function draw() {
  background(230);
  drawCircles(10, 10);
  drawCircles(5, 50);
}

// 1. Create a function that draw {number of circles} on {y position}.
function drawCircles(numberOfCircle,yPos){
  var size = 10;
  for (var i = 0; i < numberOfCircle; i++) {
  var offset = 10;
  var xPos = i * width/numberOfCircle + offset;
  ellipse (xPos, yPos, size, size);
}
}
