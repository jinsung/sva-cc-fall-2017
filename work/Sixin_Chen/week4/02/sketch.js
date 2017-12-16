
function setup() {
  createCanvas(400, 400);
}
var xPos = 200;
var yPos = 200;


function draw() {
  background(200);

  var redColor = 255;
  //var sizeOfCircle = 100;
  fill(redColor, 0,0);


  //fill(redColor, 0, 0);
  var myVar =10;

  myVar = myVar + 1;


//  for (   var sizeOfCircle = 100;sizeOfCircle >0; sizeOfCircle = sizeOfCircle - 10 ) {
  for (var i = 0; i < 100;  i++){
     redColor -= 2;
  fill(redColor, 0, 0);
  var circleSize = width - i*3;
  ellipse(xPos, yPos, circleSize, circleSize);
}
}
