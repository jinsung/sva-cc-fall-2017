function setup() {
  createCanvas(400, 400);
}
  var xPos = 200;
  var yPos = 200;

function draw() {
  background(200);

  var blueColor = 255;

  fill(0, 0, blueColor)

  //for ( var minyoungsize = 100; minyoungsize > 0; minyoungsize = minyoungsize - 10 ) {
  var myVar = 10;

  //myVar = myVar + 1;
  myVar += 1;
  myVar++;

  for ( var i = 0; i < 100; i++ ) {
  blueColor -= 2;
  fill(0, 0, blueColor);
  var minyoungsize = 300 - i*3;
  ellipse(xPos, yPos, minyoungsize, minyoungsize);
  }
}
