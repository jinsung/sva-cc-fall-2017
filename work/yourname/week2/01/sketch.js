function setup() {
  createCanvas(400, 400);
  console.log("something");
}

function draw() {
  background(200);
  noStroke();
  stroke(0);
  
  fill(255, 0, 0, 150);

  ellipseMode(CORNERS);
  ellipse(0, 0, 400, 400);

  rectMode(CENTER);


  fill(0, 255, 0, 150);
  rect(width/2, height/2, 100, 150);
}
