function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0);
}

var myHue = 0;

function draw() {
  colorMode(HSB);
  ellipseMode(CENTER);
  //var xPos = random(20)-10;
  //var yPos = random(20)-10;
  var numberOfLoop = 300;
  myHue += 10;
  noStroke();

if (myHue > 400) {
  myHue = 0;
  background (0);
}

for (var i = 0; i < 100; i++) {
  var theta = i*((Math.PI/2)/numberOfLoop)*(mouseY*0.1);
  var radius = 0.1*i*mouseX;
  var xPos = Math.cos(theta)*random(windowWidth);
  var yPos = Math.sin(theta)*random(windowHeight);
  fill(myHue, 40, 255);
  ellipse(mouseX+xPos, mouseY+yPos, random(width)*0.01, random(height)*0.01);
  fill(myHue, 40, 255);
  textSize (50);
  text ("WOOJIN", mouseX, mouseY);

}

fill(myHue, 40, 255);
textSize (100);
text ("SVA", 50, 150);
text ("FALL", 50, 250);
text ("2017", 50, 350);
text ("CREATIVE COMPUTING", 50, 450);
text ("HOMEWORK #1", 50, 550);


}
