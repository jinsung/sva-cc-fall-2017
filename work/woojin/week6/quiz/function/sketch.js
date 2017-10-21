function setup() {
  createCanvas(100, 100);
  smooth();
}

function draw() {
  background(230);
  drawCircles(5, 50);

  }

  // 1. Create a function that draw {number of circles} on {y position}.


function drawCircles(numberOfCircles, y) {
  var size = 10;
  for (var i = 0; i < numberOfCircles; i++) {
    var offset = 10;
    var xPos = i * width/numberOfCircles + offset;
    ellipse (xPos, y, size, size);
}
}
