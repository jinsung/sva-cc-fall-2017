var circleX;
var circleY;

var targetX;
var targetY;
var myHue = 0;

function setup() {
  createCanvas(800, 800);
  circleX = width/2;
  circleY = height/2;
  targetX = circleX;
  targetY = circleY;
}

function draw() {
  // background(0);
  colorMode(HSB);
  myHue +=4;

  var circleSize= 100;
  fill(myHue, 100,100,50)

  if(mouseIsPressed){
    targetX = mouseX;
    targetY = mouseY;
  }
  if (myHue > 360) {
    myHue=0;
  }
  var xDiff = targetX - circleX;
  var yDiff = targetY - circleY;
  var speed = 0.1;

  circleX = circleX + xDiff * speed;
  circleY = circleY + yDiff * speed;

  ellipse(circleX, circleY, circleSize, circleSize)


  if (keyIsPressed){
    background(255);
  }

}
