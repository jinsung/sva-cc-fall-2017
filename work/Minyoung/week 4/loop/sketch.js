function setup() {
  createCanvas(400, 400);
}
  var xPos = 200;
  var yPos = 200;

function draw() {
  background(200);

  var blueColor = 255;
  var minyoungsize = 400;

  fill(0, 0, blueColor)

  while( minyoungsize > 20 ) {
  blueColor -= 20;
  minyoungsize = minyoungsize - 20;
  fill(0, 0, blueColor);
  ellipse(xPos, yPos, minyoungsize, minyoungsize);
  }
}
