function setup() {
  createCanvas(400, 400);
  console.log("something");
}

function draw() {
  background(200);
  noStroke();
  fill(255, 0, 0, 50);
  ellipse(width/2, height/2, 50, 50);

  fill(0, 255, 0, 50);
  rect(width/2, height/2, 100, 100);
}
