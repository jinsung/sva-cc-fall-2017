var backgroundColor = 255;
var myArrow;
var myTarget;

function setup() {
  createCanvas(windowWidth, 500);

  myArrow = new Arrow();
  var arrowPos = createVector(width*0.1, height*0.9);
  myArrow.setup(arrowPos, 60);

  myTarget = new Target ();
  var targetPos = createVector(width*0.8, height*0.8);
  myTarget.setup(targetPos, 10, 100);

  gravity = createVector(0, 0.08);
}

function draw() {

  background(backgroundColor);

  if (isHit()){
    myArrow.stop();
  }else{
    myArrow.applyForce(gravity);
    myArrow.update();
  }
  myTarget.draw();
  stroke(0,200,200);
  fill(0,200,200);
  myArrow.draw();
}

function isHit(){
  var distance = myArrow.pos.dist(myTarget.pos);
  if (distance < (myTarget.size/2)){
    return true;
  }
  return false;
}

function mousePressed() {
  var mousePos =createVector(mouseX, mouseY);
  var diffVector= p5.Vector.sub(mousePos,myArrow.pos);

  myArrow.active();
  diffVector.mult(0.038);
  myArrow.applyForce(diffVector);
}
