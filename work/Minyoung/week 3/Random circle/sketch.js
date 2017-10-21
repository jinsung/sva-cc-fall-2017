function setup() {
  createCanvas(800, 800);
}

var myhue = 0;

function draw() {
  colorMode(HSL);
  var xPos = random ( 20 ) -10;
  var yPos = random ( 20 ) -10;
  var randomSize = 5 +random(50);
  myhue += 1;
  stroke(255, 50);
  fill(myhue, 80, 70);
  strokeWeight(1);

  if (myhue > 300) {
    myhue = 0;
  }
  /* I'm drawing lines here.
  Hi! I'm Minyoung! */
  //line(mouseX, mouseY, pmouseX, pmouseY);

  //var myName = "Minyoung";
  if( mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX+xPos, pmouseY+yPos);
    ellipse(mouseX+xPos, mouseY+yPos, randomSize, randomSize);
  }

  if(keyIsPressed) {
    background (255);
  }

  /* noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY); */
}
