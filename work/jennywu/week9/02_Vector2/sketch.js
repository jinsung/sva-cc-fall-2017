function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var myVector = createVector (mouseX, mouseY);
  var center = createVector (width/2, height/2);

  myVector.sub(center);
  push();
  translate(center.x, center.y);
  myVector.mult(0.5);
  line (0, 0, myVector.x, myVector.y);
  pop()
  //myVector.add(createVector(50,30));
  //myVector.sub(createVector(50,30));
  //myVector.mult(2);
  //myVector.div(2);
  //myVector.normalize();
  //myVector.setMag(100);
}
