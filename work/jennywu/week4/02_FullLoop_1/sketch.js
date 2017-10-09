var xPos = 200;
var yPos = 200;

function setup() {
createCanvas(400, 400);
}

function draw() {
  background(200);

  var colR = 255;

  //ellipse
  noStroke();
  fill(colR,0,0);

  //for ( var sizeC = 100; sizeC > 0; sizeC = sizeC -10) {
  myVar = 0;

  for (var i = 0; i < 30; i++){
    colR -= 20;
    fill (colR, 0 ,0);
    var sizeC = 200 - i*10;
    ellipse(xPos, yPos, sizeC, sizeC);
  }
}

//function mousePressed
/*
myVar = myVar +1;
myVar += 1;
myVar++;
*/
