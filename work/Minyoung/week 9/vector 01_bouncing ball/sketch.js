var myBall;

function setup() {
  createCanvas(400, 400);
  var myBallLoc = createVector(10, 10);


  myBall = new Ball(myBallLoc, 20);
}

function draw() {
  background(240);
  /* Basic myVector
  var myVector = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  myVector.sub(center);

  push();
  translate(center.x, center.y);
  // myVector.sub(createVector(30, 30));
  // myVector.div(2);
  // myVector.mult(.5);
  // myVector.normalize();
  // myVector.setMag(400);

  line(0, 0, myVector.x, myVector.y);
  pop(); */
  myBall.update();
  myBall.display();
}
