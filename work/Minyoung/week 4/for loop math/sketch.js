function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(200);

  var blueColor = 255;


  //for ( var minyoungsize = 100; minyoungsize > 0; minyoungsize = minyoungsize - 10 ) {
  var myVar = 0;
  var numOfLoop = 300;
  var circleOfSize = 50;
  for ( var i = 0; i < numOfLoop; i++ ) {
    var theta = i * ((Math.PI * 2) / numOfLoop) * (mouseY * 0.05)
    var radius = 0.01 * i * mouseX;
    var xPos = Math.cos(theta) * radius + width/2;
    var yPos = Math.sin(theta) * radius + height/2;
  stroke (255);
  fill(30 + i * 1, 60, 80);
  ellipse(xPos, yPos, circleOfSize, circleOfSize);
  }
}