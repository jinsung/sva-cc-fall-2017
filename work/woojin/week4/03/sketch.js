function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
background(200);

var redColor = 255;

fill(redColor, 0, 0);

//for ( var ellipsesize = 400; ellipsesize > 0; ellipsesize = eliipsesize - 10 )

var myVar = 0;
var numberOfLoop = 300;
var circleSize = 50;

for(var i = 0; i < numberOfLoop; i++) {
  var theta = i * ((Math.PI * 2) / numberOfLoop) * (mouseY * 0.1)
  var radius = 0.01 * i * mouseX;

  var xPos = Math.cos(theta) * radius + width/2;
  var yPos = Math.sin(theta) * radius + height/2;

  fill(30+ i / numberOfLoop * 255, 60, 80);

  ellipse(xPos, yPos, circleSize, circleSize);
}

}
