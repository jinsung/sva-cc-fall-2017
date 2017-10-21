var rectX = 0;
var rectY = 100;
var speedX = 5;
var speedY = 5;

function setup() {
  createCanvas(600, 400);
}

  var myHue = 0;

function draw() {

  colorMode(HSB);
  background(0);
  rectMode(CENTER);
  myHue += 100;
  fill(myHue, 80, 340);
  strokeWeight(0.3);
  stroke(250);
  rect(rectX, rectY, 5, 5);

  if (myHue > 360) {
    myHue = 0;
  }

  if (rectX > width || rectX < 0) {
  speedX = speedX * -1;
}

  rectX = rectX + speedX;

  if (rectY > height || rectY < 0) {
    speedY = speedY * -1;
  }

  rectY = rectY + speedY;

  var myVar = 0;
    var numOfLoop = 100;
    var rectSize = 1;
    for(var i = 0; i < numOfLoop; i++) {
      var theta = i * ((Math.PI * 2) / numOfLoop) * (mouseY * 0.1)
      var radius = 0.01 * i * mouseX;

      var xPos = Math.cos(theta) * radius + width/2;
      var yPos = Math.sin(theta) * radius + height/2;

      //fill(100 + i * 1, 50, 100);
      rect(xPos, yPos, rectSize, rectSize);
    }
}
