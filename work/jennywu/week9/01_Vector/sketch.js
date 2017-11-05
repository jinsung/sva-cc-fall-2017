function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var myVector = createVector (100, 100);
  //myVector.add(createVector(50,30));
  //myVector.sub(createVector(50,30));
  //myVector.mult(2);
  //myVector.div(2);

  myVector.normalize();
  myVector.setMag(100);
  line (0, 0, myVector.x, myVector.y);
}
