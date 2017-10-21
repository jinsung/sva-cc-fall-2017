
function setup() {
  createCanvas(400, 400);
  console.log("whatever")
}

var myhue = 0

 function draw() {
  colorMode(HSB);
  var xPos =random(20) -10 ;
  var yPos = random(20) -10 ;
  var circleSize = 5 + random(10);
  myhue += 4;
  //stroke(myhue,30,100);
  stroke (0);
  fill(myhue,70,50);
  strokeWeight(1);



  if (myhue>360) {
    myhue = 0;
  }

  if (mouseIsPressed) {
      //line(mouseX,mouseY,pmouseX+xPos,pmouseY+yPos);
      ellipse(mouseX+xPos, mouseY+yPos,circleSize,circleSize);
  }
  if (keyIsPressed) {
    background(255);
  }
 }
