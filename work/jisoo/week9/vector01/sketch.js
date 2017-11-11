var myBalls= [];
function setup() {
  createCanvas(400, 400);
  var numOfballs = 15;

  for (var i = 0; i<numOfballs; i++){
    var myBallLoc = createVector(10,10);
    var myBall = new Ball(myBallLoc,random(10,50));
    myBalls[i] = myBall;
  }
}

function draw() {
  background(200);
  fill(200,100);
  for (var i = 0; i<myBalls.length; i++){
    var gravity = createVector(0, 0.3);
    myBalls[i].applyForce(gravity);
    if(mouseIsPressed){
      var wind = createVector(0.3,0);
      myBalls[i].applyForce(wind);
    }
    myBalls[i].update();
    myBalls[i].display();
  }
}
