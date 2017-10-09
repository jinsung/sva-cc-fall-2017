function setup() {
  createCanvas(400, 400);
}

var myHue = 0;

function draw() {

  colorMode(HSB);
  var xPos = random(20)-10;
  var yPos = random(20)-10;
  var circleSize = 5 + random(10);

  /*var redRandomNumber = random(255);
  var greenRandomNumber = random(255);
  var blueRandomNumber = random(255);*/

  myHue += 50;
  stroke(0);
  fill(myHue, 100, 100);
  strokeWeight(1);
  //line(mouseX, mouseY, pmouseX, pmouseY);

  /* noStroke();
  fill(mouseX);
  ellipse(width/2, height/2, mouseX, mouseY);*/
  //on the last part - mouseX and mouseY work as a size substitude;

  if (myHue > 360) {
    myHue = 0;
  }

  if (mouseIsPressed) {
  //line(mouseX, mouseY, pmouseX+xPos, pmouseY+yPos);
  ellipse(mouseX+xPos, mouseY+yPos, circleSize, circleSize);
  }

  if (keyIsPressed) {
    background (255);
  }

}
