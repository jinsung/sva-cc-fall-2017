function setup() {
  createCanvas(800, 800);
  circleX = width/2;
  circleY = height/2;
  targetX = circleX;
  targetY = circleY;
}

var circleX;
var circleY;
var targetX;
var targetY;
var myhue = 100;

function draw() {
  colorMode(HSL);
  size = random(100);

var circleSize = size;
  myhue += 1;

  stroke(myhue, 80, 80);
  strokeWeight(2);
  // noStroke();
  fill(0, 100, 100);
  ellipse(mouseX, mouseY, circleSize, circleSize);


  if (mouseIsPressed){
    targetX = mouseX;
    targetY = mouseY;
  } else if (true) {
    var xDiff = targetX - circleX;
    var yDiff = targetY - circleY;
    var speed = 0.2;

    circleX = circleX + xDiff * speed;
    circleY = circleY + yDiff * speed;
    fill (myhue, 80, 50);
    strokeWeight(2);
    stroke(0, 100, 100);
    ellipse(circleX, circleY, circleSize, circleSize);
  }

  if (myhue > 200) {
    myhue = 100;
  }
}
