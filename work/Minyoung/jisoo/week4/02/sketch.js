function setup() {
  createCanvas(400, 400);
}

var xPos = 200;
var yPos = 200;

function draw() {
  background(200);

  var redColor = 255;

  fill(redColor,0,0);

  var myVar = 0;

    // for ( var sizeOFcircle = 100; sizeOFcircle > 0;sizeOFcircle = sizeOFcircle - 10) {
for (var i = 0; i<100; i++){
    redColor -= 2;
    fill(redColor,0,0);
    var circleSize = width - i*3;
    ellipse(xPos,yPos,circleSize,circleSize);
  }
}
