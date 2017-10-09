function setup() {
  createCanvas(400, 400);
}
  var xPos = 200;
  var yPos = 200;

function draw() {
  background(200);
  var minyoungsize = 240;
  var blueColor = frameCount;

  fill(0, 0, blueColor);
  ellipse(mouseX, mouseY, minyoungsize, minyoungsize);

  blueColor -= 20;
  minyoungsize = minyoungsize - 20;
  fill(0, 0, blueColor);
  ellipse(xPos, yPos, minyoungsize, minyoungsize);

  blueColor -= 20;
  minyoungsize = minyoungsize - 20;
  fill(0, 0, blueColor);
  ellipse(xPos, yPos, minyoungsize, minyoungsize);

  blueColor -= 20;
  minyoungsize = minyoungsize - 20;
  fill(0, 0, blueColor);
  ellipse(xPos, yPos, minyoungsize, minyoungsize);
}
