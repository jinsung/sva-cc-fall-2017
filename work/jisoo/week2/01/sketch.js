function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  noStroke();

  fill(255, 0, 0, 150); 
  ellipseMode(CORNERS);
  ellipse(width/2, height/2, 50, 50);


  fill(0, 255, 0, 150);
  stroke(0);
  rectMode(CENTER);
  rect(width/2, height/2, 100, 150);
}
