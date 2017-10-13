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

  // 1. Create a for loop that draws 10 circles on y position 50 in the canvas.

  // 2. Create a for loop that draw 5 circles on y position 90.
  //    set fill color to red for circles that is positioned on the left side.
  //    set fill color to green for the circle on the middle.
  //    set fill color to blue for circles on the right side.

}
