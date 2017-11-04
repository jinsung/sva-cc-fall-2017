var myBalls = [];

function setup() {
  createCanvas(500, 500);

  for (var i = 0; i < 15; i++) {
    var myBallLoc = createVector(10, 10);
    myBall = new Ball(myBallLoc, random(10, 20));
    myBalls[i] = myBall;
  }
}

function draw(){
  background(200);
  fill(200,100);
  for (var i = 0; i < myBalls.length; i++) {
    var gravity = createVector (0, 0.3);
    myBalls[i].applyForce(gravity);
    if (mouseIsPressed) {
      var wind = createVector (0.1, 0);
      myBalls[i].applyForce(wind);
    }
    myBalls[i].update();
    myBalls[i].display();
  }
}
