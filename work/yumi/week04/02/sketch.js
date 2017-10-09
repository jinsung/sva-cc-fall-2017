
var xPos = 200;
var yPos = 200;


function setup() {
  createCanvas(400, 400);
  //console.log("circleSize;"+circleSize);

}

function draw() {
  background(200);


  var redColor = 255;
  fill(redColor, 0, 0);

  for (var i = 0; i < 100; i ++){
    sizeOfCircle -= 2;
    fill(redColor, 0, 0);
    ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);
    var sizeOfCircle = width - i * 3;

  }
  /*
  for (var sizeOfCircle =100; sizeOfCircle > 0; sizeOfCircle = sizeOfCircle - 10){
    sizeOfCircle -= 20;
    fill(redColor, 0, 0);
    ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  }
*/

}
