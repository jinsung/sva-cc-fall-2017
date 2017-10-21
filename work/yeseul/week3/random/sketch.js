


function setup() {
  createCanvas(800, 800);

}

var mhue=0;

function draw() {
  colorMode(HSB)
  var xPos = random ( 20 )-100;
  var yPos = random ( 20 )-100;
  var circleSize = 5 + random (10)
  mhue += 4;

  stroke(mhue, 100, 100);
  strokeWeight(5);
//I am drawing line

  if (mhue > 360 ) {
    mhue = 0 ;
  }


 if (mouseIsPressed) {
  ellipse(mouseX+xPos,mouseY+yPos, circleSize, circleSize);

}

  if (keyIsPressed) {
    background(255)
  }
  /*noStroke();
  fill(redColor,0,0);
  ellipse(width/2, height/2, mouseX, mouseY)

  redColor -= 0.01; */


}
