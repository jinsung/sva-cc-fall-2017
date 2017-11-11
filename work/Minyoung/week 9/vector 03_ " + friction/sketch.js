var myBall;

function setup() {
  createCanvas(400, 400);
  var myBallLoc = createVector(10, 10);


  myBall = new Ball(myBallLoc, 20);
}

function draw() {
  background(240);
  var gravity = createVector (0, 0.03);
  myBall.applyForce(gravity);
  if (mouseIsPressed) {
    var wind = createVector(0.01, 0);
    myBall.applyForce(wind);
  }
  myBall.update();
  myBall.display();
}
