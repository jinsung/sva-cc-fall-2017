
function setup() {
  createCanvas(600, 600);
  background(255);

  smooth();
  fill(192);
  noStroke();
  rect(40, 40, 40, 40);

  push();
  translate(40, 40);
  rotate(PI/4);
  fill(0);
  rect(0, 0, 40, 40);
  pop();
}

function draw() {


}
