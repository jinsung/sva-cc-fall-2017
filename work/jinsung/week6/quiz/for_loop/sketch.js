function setup() {
  createCanvas(100, 100);
  smooth();
}

function draw() {
  background(230);
  var size = 10;
  fill(255, 255, 255);
  for (var i = 0; i < 5; i++) {
    var offset = 10;
    var xPos = i * width/5 + offset;
    ellipse (xPos, 10, size, size);
  }

  // 1. Create a for loop that draws 10 circles on y position 50 in the canvas.
  for (var i = 0; i < 10; i++) {
    var offset = 10;
    var xPos = i * width/10 + offset;
    ellipse (xPos, 50, size, size);
  }


  // 2. Create a for loop that draw 5 circles on y position 90.
  //    set fill color to red for circles that is positioned on the left side.
  //    set fill color to green for the circle on the middle.
  //    set fill color to blue for circles on the right side.
  /*for (var i = 0; i < 5; i++) {
    var offset = 10;
    var xPos = i * width/5 + offset;
    if (xPos < width/2) {
      fill(255, 0, 0);
    } else if(xPos == width/2) {
      fill(0, 255, 0);
    } else {
      fill(0, 0, 255);
    }
    ellipse (xPos, 90, size, size);
  }*/
}
