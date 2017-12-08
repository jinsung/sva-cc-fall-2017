var myBall;
function setup() {
  createCanvas(500, 500);
  smooth();
  var ballLocation = createVector(10, 10);
  myBall = new Ball(ballLocation, 10);
}

function applyForce() {
  var gravity = createVector(0.0, 0.03);
  myBall.applyForce(gravity);

  if (mouseIsPressed) {
    var wind = createVector(0.01, 0.0);
    myBall.applyForce(wind);
  }

}

function draw() {

  background(200);
  applyForce();
  myBall.update();
  myBall.bounce(width, height);
  myBall.draw();
}
