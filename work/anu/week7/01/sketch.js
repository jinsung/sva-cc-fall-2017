var myArrows = [];

function setup() {
  createCanvas(500, 500);

  for (var i = 0; i < 100; i++) {
    myArrows[i] = new Arrow(5 * i, 100);
  }

}
function draw () {
  background(230);
  fill(0);
  stroke(0);
  for (var i = 0; i < myArrows.length; i++) {
    myArrows[i].draw();
  }
}

/*function drawArrow (x, y) {
  push();
  translate(x, y);
  var angle = getAngle(x, y, mouseX, mouseY);
  rotate(angle);
  var size = 100;
  line(0, 0, size, 0);
  var triangleSize = size * 0.2;
  triangle(0, 0,
           triangleSize, triangleSize*0.3,
           triangleSize, -triangleSize*0.3);

  var fLocation = size*0.7;
  var fSize = size*0.05;

  for (var i = 0; i < 3; i++) {
  line(fLocation, 0, fLocation+fSize, fSize);
  line(fLocation, 0, fLocation+fSize, -fSize);
  fLocation += size*0.1;
  }
  pop();
}*/
