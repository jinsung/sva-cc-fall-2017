var arrow;
var target;
var bowForce;
var gravity;
var isFired = false;

function setup() {
  createCanvas(500, 500);
  var arrowPos = createVector(50, 450);
  var targetPos = createVector(450, 400);
  bowForce = createVector(0,0);
  arrow = new Arrow();
  target = new Target();
  target.setup(targetPos, 50, 5);
  arrow.setup(arrowPos, 50)
  gravity = createVector(0, 0.08);
}

function draw() {
  background(200);

  target.draw();


  if (!hitTest()) {
    if (isFired) {
      arrow.addForce(gravity);
    }

    arrow.update();
  } else {
    arrow.stop();
  }

  arrow.draw();
}

function hitTest() {

  var isHit = p5.Vector.dist(arrow.pos, target.pos) < target.size/2;

  return isHit;

}

function mousePressed() {
  var diffX = mouseX - arrow.pos.x;
  var diffY = mouseY - arrow.pos.y;
  var rawVector = createVector(diffX, diffY);
  bowForce = rawVector.mult(0.015);

  arrow.addForce(bowForce);
  isFired = true;
}
