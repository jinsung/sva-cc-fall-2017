
function setup() {
  createCanvas(800, 800);
}

var myHue = 0;

function draw() {

    colorMode(HSB);
    var xPos = random(100)-50;
    var yPos = random(100)-50;

    var circleSize = 5 + random(100);

    var hueRandomnumber= random(255);
    myHue +=4;

    // var blueRandomNumber = random(255);
    // var redRandomNumber = random(255);
    // var greenRandomNumber = random(255);

    fill(myHue, 100, 100);
    stroke(0);
    strokeWeight(1);

  if (myHue > 360) {
    myHue=0;
  }

  if (mouseIsPressed){
    noStroke();
    ellipse(mouseX+xPos, mouseY+yPos, circleSize, circleSize);
    }

  if (keyIsPressed){
    background(255);
  }
}
