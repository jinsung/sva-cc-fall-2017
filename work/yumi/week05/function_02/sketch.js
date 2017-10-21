
function setup() {
  createCanvas(600, 600);
  //console.log("circleSize;"+circleSize);
}

function draw() {
  background(0);
  var x1 = 300;
  var y1 = 300;
  var x2 = mouseX;
  var y2 = mouseY;
  var targetDistance = distance(x1, y1, x2, y2);

  drawTarget(x1, y1, 300, targetDistance / 10);
  drawTarget(x2, y2, 40, 30);

}

function distance(xpos1, ypos1, xpos2, ypos2){
  //distance between 2 elements
  var dx = xpos1 - xpos2;
  var dy = ypos1 - ypos2;
  var dist = Math.sqrt (dx * dx + dy * dy);
  return dist;
}

function drawTarget(x, y, size, numOfCircle ){
  //(x,y) is argument
  var circleSize = size;
  //var numOfCircle = step;
  for(var i = 0; i < numOfCircle; i ++){
    var step = (numOfCircle-i)/numOfCircle;
    fill(255 * step);
    noStroke();
    var size = circleSize * step
    ellipse(x, y, size, size);

//numOfCircle-i is going to be from 20 to 1
// step is going to slowly change value of 255 from 1 to 0 = create gradiation:

  }
}
