function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
  var myVector = createVector (mouseX, mouseY);
  var center = createVector (width/2, height/2);
  myVector.sub(center);

  push();
  translate(center.x, center.y);
  // myVector.sub(createVector(30, 30));
  // myVector.div(2);
  // myVector.normalize();
  // myVector.setMag(200);
  // myVector.normalize();


  line(0, 0, myVector.x, myVector.y);
  pop();
}
