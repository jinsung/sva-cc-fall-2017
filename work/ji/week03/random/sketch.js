function setup() {
  createCanvas(1000, 1000);
  background(0);
}

var myHue = 0;

function draw() {
  colorMode(HSB);

  var xPos = random( 20 )-10;
  var yPos = random( 20 )-10;
  var circleSize = 5 + random(100);

  // var hueRandomNumber = random( 255 );
  // var greenRandomNumber = random( 255 );
  // var blueRandomNumber = random( 255 );

  myHue += 1;

  stroke(0);
  fill(myHue, 100, 100)
  strokeWeight(1);
  // I am drawing line here. :)

  if (myHue > 360) {
    myHue = 0;
  }

  if ( mouseIsPressed ) {
    ellipse(pmouseX+xPos, pmouseY+yPos, circleSize, circleSize);
  }

  if ( keyIsPressed ) {
    background (0);
  }

  // var myName = "ihavehairyknees"

  /*  noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY); */

}
