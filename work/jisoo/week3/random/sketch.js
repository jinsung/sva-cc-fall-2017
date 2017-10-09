function setup() {
  createCanvas(400, 400);
}

var myHue = 0;

function draw() {
  colorMode(HSB);
  var xPos = random( 20 )-10;
  var yPos = random( 20 )-10;
  var circleSize = random(10) + 5;
  myHue += 4;
  stroke(0);
  fill(myHue,70,50);
  strokeWeight(1);

  if(myHue > 360){
    myHue = 0;
  }

  if(mouseIsPressed){
    ellipse(mouseX+xPos, mouseY+yPos,circleSize, circleSize);
  //line(mouseX,mouseY,pmouseX+xPos,pmouseY+yPos);
}

  if(keyIsPressed){
    background (255);
  }
/*
  noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY);*/
}
