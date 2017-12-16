var backgroundColor = 200;
var myArrow;
var gravity;

function setup() {
  createCanvas(500, 500);

  myArrow = new Arrow();
  var arrowPos = createVector(width * 0.5, height * 0.5);
  myArrow.setup(arrowPos, 60);

  gravity = createVector(0, 0.08);
}


function draw() {
  background(backgroundColor);
  text ("Never drop the white ball by clicking anywhere", 10, 20);

  myArrow.applyForce(gravity);
  myArrow.update();

  myArrow.draw();
}


function mousePressed () {
  var mousePos = createVector(mouseX, mouseY);
  var diffVector = p5.Vector.sub(mousePos, myArrow.pos);
  myArrow.active();
  diffVector.mult(0.038);
  myArrow.applyForce(diffVector);
}
