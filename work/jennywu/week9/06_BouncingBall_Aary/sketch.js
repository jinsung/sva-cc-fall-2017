var myBalls = [];
function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 50; i++){
    var myBallLoc = createVector(50,10);
    var myBall = new Ball (myBallLoc, random(20));
    myBalls[i] = myBall;
  }

}

function draw() {
  background(200);

 for (var i = 0; i < 50; i++){
   var gravity = createVector(0, 0.3);
   myBalls[i].applyForce(gravity);

   if (mouseIsPressed) {
   var wind = createVector(0.1,0);
   myBalls[i].applyForce(wind);
   }
   myBalls[i].update();
   myBalls[i].display();
 }


}
