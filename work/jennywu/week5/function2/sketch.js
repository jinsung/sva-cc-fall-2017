function setup() {
  createCanvas(600, 600);
  var circleSize = 100;
  var numberOfCircles = 5;
}

function draw() {
  background(100);
  var x1 = 300;
  var y1 = 300;
  var x2 = mouseX;
  var y2 = mouseY;
  var targetDist = distance(x1,y1,x2,y2);
  drawTarget(x1, y1, 300, targetDist / 6);
  drawTarget(x2, y2, 100, 10);
}
function distance(xPos1, yPos1, xPos2,yPos2) {
  var dx = xPos1 - xPos2;
  var dy = yPos1 - yPos2;
  var dist = Math.sqrt(dx*dx + dy*dy)
  return dist;
}
function drawTarget(x,y,circleSize,numberOfCircles){
  noStroke();

  for (var i=0; i<numberOfCircles; i++){
    var step = (numberOfCircles-i)/numberOfCircles;
    fill(255 * step);
    var size = circleSize * step;
    ellipse (x, y, circleSize, circleSize);
    circleSize -= circleSize/5
  }
}
