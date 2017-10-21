

function setup() {
createCanvas(400, 400);
background(255);
}
var myHue = 0;
function draw() {

colorMode(HSB);
var myHue = random(360);
var xPos = random(10) - 10;
var yPos = random(10) - 10;
var eSize = 5+random(10);
/*
var colR = random(255);
var colG = random(255);
var colB = random(255);
*/
strokeWeight(10);
stroke(myHue,40,100);
line(mouseX,mouseY,pmouseX,pmouseY);

ellipse(mouseX, mouseY, eSize,eSize);



}

/*
if (mouseIsPressed) {
  stroke(255);
  line(mouseX, mouseY, pmouseX, mouseY);
}

if (keyIsPressed) {
  background(0);
}
to comment many lines
*/
