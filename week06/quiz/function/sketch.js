function setup() {
  createCanvas(100, 100);
  smooth();
}

function draw() {
  background(230);
  var size = 10;
  for (var i = 0; i < 5; i++) {
    var offset = 10;
    var xPos = i * width/5 + offset;
    ellipse (xPos, 10, size, size);
  }

  // 1. Create a function that draw {number of circles} on {y position}.
}
