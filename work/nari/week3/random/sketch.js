function setup() {
  createCanvas(400, 400);
}

var myHue = 0;

function draw() {
  colorMode(HSB);
  var xPos = random(20)-10;
  var yPos = random(20)-10;
  var circleSize = 5 + random(10);

  myHue += 4;
  stroke(0);
  fill(myHue, 60, 50);
  strokeWeight(3);

  //I am drawing a line here!

  if(myHue > 360) {
    myHue = 0;
  }

  if(mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX+xPos, pmouseY+yPos);
    ellipse(mouseX + xPos, mouseY + yPos, circleSize, circleSize);
  }

  if (keyIsPressed) {
    background(255);
  }

  /* noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY); */

}
