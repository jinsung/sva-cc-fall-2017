var x1 = 300;
var y1 = 300;
var targetX = 0;
var targetY = 0;
var x2 = 0;
var y2 = 0;

var isFired = false;

function setup() {
  createCanvas(600, 600);

  targetX = mouseX;
  targetY = mouseY;
  x2 = targetX;
  x2 = targetY;
  //console.log("circleSize;"+circleSize);
}

function draw() {
  background(245);
  var targetDistance = distance(x1, y1, x2, y2);
  drawTarget(x1, y1, 300, targetDistance / 10);
  var arrowAngle =  calcAngle(x1, y1, x2, y2);
  if(isFired){
    targetX = x1;
    targetY = y1;
  }else{
    targetX = mouseX;
    targetY = mouseY;
  }

  animateArrow();
  push();
  // keep the registration point and rotate
  translate(x2, y2);
  rotate(arrowAngle + Math.PI/2);

  drawArrow(150);
  pop();

}

function animateArrow(){
  var dx = targetX - x2;
  var dy = targetY - y2;
  x2 = x2 + dx * 0.1;
  y2 = y2 + dy * 0.1;
}

function mousePressed(){
  isFired = !isFired;
}

function drawArrow(arrowLength){
  fill(0);
  triangle(0, 0, 3, 10, -3, 10);

  stroke(0);
  line (0, 0, 0, arrowLength);
}

function calcAngle(x1, y1, x2,y2){
  var dx = x1 - x2;
  var dy = y1 - y2;
  var angle = Math.atan2(dy,dx);
  return angle;
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

function distance(xpos1, ypos1, xpos2, ypos2){
  //distance between 2 elements
  var dx = xpos1 - xpos2;
  var dy = ypos1 - ypos2;
  var dist = Math.sqrt (dx * dx + dy * dy);
  return dist;
}
