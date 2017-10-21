function setup() {
  createCanvas(400, 400);
}

var xPos = 200;
var yPos = 200;


function draw() {
  background(200);
  var redColor = 255;

  fill(redColor, 0, 0);

// this is for loop. it is made up of 3 statements inside (declare, condition (t or f), changing the variable you declared)

//  for (var sizeOfCircle = 100; sizeOfCircle > 0; sizeOfCircle = sizeOfCircle - 10){
  var myVar = 100;

// these three statements below are the same thing.
//  myVar = myVar + 1;
//  myVar += 1;
// because the value is 1, you can use ++ syntax. will not work with other numbers.
//  myVar ++;

  for (var i = 0; i < 20; i++) {
    redColor -= 20;
    fill(redColor, 0, 0);
    var circleSize = 200 - i*3;
    ellipse(xPos, yPos, circleSize, circleSize);
  }
}
