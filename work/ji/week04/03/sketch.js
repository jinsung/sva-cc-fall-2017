function setup() {
  createCanvas(800, 800);
  colorMode(HSB)
}

function draw() {
  background(200)

  var redColor = 255;

  fill(redColor, 0, 0);

  // for ( var sizeOfCircle = 100; sizeOfCircle > 0; sizeOfCircle = sizeOfCircle - 10; ) {
  var MyVar = 0;
  var numOfLoop = 300;
  var circleSize = 100;
  for ( var i = 0; i < numOfLoop; i++ ) {
    var theta = i * ((Math.PI * 2) / numOfLoop) * (mouseY * 0.1);
    var radius = i * mouseX * 0.01;

    var xPos = Math.cos(theta) * radius + width/2;
    var yPos = Math.sin(theta) * radius + height/2;

    fill(30 + i / numOfLoop * 300, 60, 80);
    ellipse(xPos, yPos, circleSize, circleSize );
  }

}
