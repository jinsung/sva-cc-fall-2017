var myBall;

function setup() {
  createCanvas(500, 500);
  smooth();
  var loc = createVector(10, 10);
  var vel = createVector(2, 2.3);
  myBall = new Ball(loc, 10, vel);
}

function draw() {
  background(200);
  myBall.update();
  //myBall.bounce(width, height);
  myBall.bound(width, height);
  myBall.draw();
}
