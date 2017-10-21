

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var x1 = 0;
  var y1 = height/2;
  var y2 = 100;
  var gap = 20;

  while(x1 <= width) { // do not make infinity loop!
    ellipse(x1, y1, 10, 10);
    x1 = x1 + gap;
  }
}
