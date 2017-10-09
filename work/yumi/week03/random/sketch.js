function setup() {
  createCanvas(400, 400);


}

var myHue = 0;

function draw() {
  //background(200);
  colorMode(HSB);
  var xPos = random(20) -10; // mean value of 20 - 10= 10: random value between -10 and 20 =10
  var yPos = random(20) -10;
  var circleSize = 5 + random(50);
  myHue +=1
  fill(myHue);
  noStroke();
  fill(myHue, 100, 100);
  //strokeWeight(1);

  if (myHue > 360){
    myHue = 0;

  }

  if (mouseIsPressed){
    //line(mouseX, mouseY, pmouseX + xPos, pmouseY+yPos);
    ellipse(mouseX + xPos, mouseY+yPos, circleSize);
  }

  if (keyIsPressed){
    background(255)
    //Clear background
  }
  /*noStroke();
  fill(mouseX);
  ellipse(width/2, height/2, mouseX, mouseY);
  */
}



/*
comment multiline
*/
