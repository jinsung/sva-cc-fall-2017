function setup() {
  createCanvas(400, 400);
  console.log("something");


}

function draw() {
  background(200);
  fill(255, 0, 0,50);
  //console.log("mouse position X:" + mouseX);
  noStroke();
  ellipseMode(CORNERS);
  ellipse(0, 0, 400, 400);

  rectMode(CENTER);
  stroke(0);
  fill(0,255,0,50);
  rect(width/2, height/2, 100,150);
}
