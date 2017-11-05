var myBalls = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(var i = 0; i < 30; i ++){
  var myBallloc = createVector(random(10, width - 10), random(10, height/2));
  myBall = new Ball(myBallloc, random(5, 20));
  myBalls[i] = myBall;
  }
}

function draw() {
  background(0);
  noStroke();
  fill(random(50, 255), random(50, 255),random(50, 255),);
  for(var i = 0; i < myBalls.length; i ++){
    var gravity = createVector(0, 0.3);
    myBalls[i].applyForce(gravity);
    if(mouseIsPressed){
    var wind = createVector(0.1, 0);
    myBalls[i].applyForce(wind);
    }
    myBalls[i].display();
    myBalls[i].update();
  }
  //myBall.update();
  //myBall.display();
}

  /*
  var myVector = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  //*myVector = Object
  stroke(255);
  myVector.sub(center);
  push();
  translate(center.x, center.y);
  //myVector.sub(createVector(50, 30));
  myVector.mult(2);
  //myVector.normalize();
  //myVector.setMag(100);
  line(0, 0, myVector.x, myVector.y);
  pop();
  */
