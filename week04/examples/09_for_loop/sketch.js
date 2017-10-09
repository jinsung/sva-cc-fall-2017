

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var x1 = 0;
  var y1 = 100;
  var y2 = 100;
  var gap = 40;
  var circleSize = 20;
  fill(255);
  while(x1 <= width) { // do not make infinity loop!
    ellipse(x1, y1, circleSize, circleSize);
    x1 = x1 + gap;
  }

  fill(100);
  var y2 = 300
  for (var x2=0; x2 <= width; x2 = x2+gap) {
    ellipse(x2, y2, circleSize, circleSize);
  }
}
