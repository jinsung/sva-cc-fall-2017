function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  noStroke();
  ellipseMode(CENTER);
  fill(255, 0, 0, 200);
  ellipse(width/2, height/2, 50, 50);
  rectMode(CORNERS);
  fill(0, 0, 255, 100);
  rect(width/2, height/2, 100, 100);
}
