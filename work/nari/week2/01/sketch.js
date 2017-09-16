function setup() {
  createCanvas(800, 800);
  console.log("something");
}

function draw() {
  background(200);
  noStroke();

  fill(0,255,0);
  ellipseMode(CORNERS);
  ellipse(width/2, height/2, 800, 800);

  fill(255, 0, 0);
  stroke(0);
  rect(width/2, height/2, 50, 50);


}
