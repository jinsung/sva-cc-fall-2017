var penis;
var target;
var bowForce;
var gravity;
var isFired = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight-100);
  var penisPos = createVector(100, window.innerHeight-250);
  var targetPos = createVector(window.innerWidth-300, window.innerHeight-250);
  bowForce = createVector(0,0);
  penis = new Penis();
  target = new Target();
  target.setup(targetPos, 50, 5);
  penis.setup(penisPos, 50)
  gravity = createVector(0, 0.08);
}

function draw() {
  background(240);

  target.draw();


  if (!hitTest()) {
    if (isFired) {
      penis.addForce(gravity);
    }

    penis.update();
  } else {
    penis.stop();
  }

  penis.draw();
}

function hitTest() {

  var isHit = p5.Vector.dist(penis.pos, target.pos) < target.size/2;

  return isHit;

}

function mousePressed() {
  var diffX = mouseX - penis.pos.x;
  var diffY = mouseY - penis.pos.y;
  var rawVector = createVector(diffX, diffY);
  bowForce = rawVector.mult(0.015);

  penis.addForce(bowForce);
  isFired = true;
}
