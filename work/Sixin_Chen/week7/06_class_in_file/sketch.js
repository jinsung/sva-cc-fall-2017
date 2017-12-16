var arrow1;
var arrow2;

function setup() {
  createCanvas(500, 500);
  arrow1 = new Arrow(200, 100, 100);
  arrow2 = new Arrow(200, 200, 100);
}

function draw() {
  background(200);
  arrow1.draw();
  arrow2.draw();
}
