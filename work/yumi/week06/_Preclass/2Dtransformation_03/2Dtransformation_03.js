
function setup() {
  createCanvas(600, 600);
  background(255);
  noFill();

  stroke(128);
  rect(20, 20, 40, 40);

  stroke(0);
  push();
  translate(-20, -20);
  scale(2.0);
  rect(20, 20, 40, 40);
  pop();
}

function draw() {

}
