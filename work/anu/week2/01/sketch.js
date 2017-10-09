function setup() {
  createCanvas(400, 400);
  console.log("something");
}

function draw() {
  background(200);
  noStroke();
  fill(255, 0, 0, 150);
  ellipseMode(CORNERS);
  ellipse(width / 2, height/2, 400, 400);

  rectMode(CENTER);
  stroke(0);
  fill(0, 255, 0, 150);
  rect(width/2, height/2, 100, 150);
}
