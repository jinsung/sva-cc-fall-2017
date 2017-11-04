var myBall;

function setup() {
  createCanvas(500, 500);
  smooth();
  var loc = createVector(width/2, height/2);
  myBall = new Ball(loc, 100);
}

function draw() {
  background(200);
  myBall.update();

  var gravity = createVector(0, 0.03);
  myBall.applyForce(gravity);
  fill(255, 255, 255);
  if (mouseIsPressed) {
    fill(255, 0, 0);
    var wind = createVector(0.01, 0.0);
    myBall.applyForce(wind);
  }
  myBall.bounce(width, height);

  myBall.draw();
}
