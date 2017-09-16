function setup() {
  createCanvas(400, 400);
}

function draw() {

  noStroke();

  ellipseMode(CORNERS);
  fill(255, 0, 0, 10);
  ellipse(width/2, height/2, 400, 400);

  rectMode(CENTER);
  fill(0, 255, 0, 150);
  rect( width/2, height/2, 100,100);


}
