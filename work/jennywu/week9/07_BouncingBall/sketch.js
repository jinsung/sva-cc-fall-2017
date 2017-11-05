var myBalls = [];
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 255);

  for (var i = 0; i < 50; i++){
    var myBallLoc = createVector(random(width), random(0,50));
    var myBall = new Ball (myBallLoc, random(2,10));
    myBalls[i] = myBall;
  }

}

function draw() {
  background(0);

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
