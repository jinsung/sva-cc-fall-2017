var line1;
var line2;

var ellipse1;


function setup() {
  createCanvas(500,500);
  line1 = new Line(0, 0, 0, 500);


}

function draw() {
  frameRate(100);
  line(0, 0, 0, 500);
  stroke(500);
  var step = frameCount % 500;
  background(51);
  applyMatrix(10, 0, 0, 20, 0 + step, -10);
  line(0, 0, 0, 500);
}

function Line() {
}
