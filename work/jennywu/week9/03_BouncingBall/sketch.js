var myBall;
function setup() {
  createCanvas(400, 400);
  var myBallLoc = createVector(10,10);

  myBall = new Ball (myBallLoc, 20);
}

function draw() {
  background(200);
  myBall.update();
  myBall.display();
}
