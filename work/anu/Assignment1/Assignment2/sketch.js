var ball1;
var ball2;

function setup() {
  createCanvas(1000, 600);
  ball1 = new Ball1(0, 10, 10, 2, 2.1);
  ball2 = new Ball2(5, 15, 10, 2, 2.1);
}
function draw () {
  background(0);
  fill(255);
  noStroke();
  ball1.move();
  ball1.bounce(width, height);
  ball1.draw();
  ball2.move();
  ball2.bounce(width, height);
  ball2.draw();
}
