var myArrows = [];

function setup() {
  createCanvas(500, 500);

  var numOfArrows = 25;
  for (var y = 0; y < numOfArrows; y++) {
    var gap = height/numOfArrows;
    var newYPos = gap/2 + y * gap;

    for (var x = 0; x < numOfArrows; x++) {
      var xGap = width/numOfArrows;
      var newXPos = xGap/2 + x * xGap;
      var newI = y * numOfArrows + x;
      myArrows[newI] = new Arrow(newXPos, newYPos, gap/2);
    }
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
