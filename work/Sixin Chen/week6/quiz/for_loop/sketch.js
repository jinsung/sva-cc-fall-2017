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
    fill(0,0,0)
    ellipse (xPos, 10, size, size);
}
    var size = 5;
    for (var i = 0; i < 10; i++){
      var offset = 5;
      var xPos = i * width/10 + offset;
      fill(0,0,0)
      ellipse (xPos, 50, size, size);
          }

      var size = 10;
      for (var i = 0; i < 5; i++){
        var offset = 10;
        var xPos = i * width/5 + offset;
        if (xPod < width/2);{
        else
         fill(0,255,0);

        fill(500,0,0)
        ellipse (xPos, 90, size, size);
  }
}









  // 1. Create a for loop that draws 10 circles on y position 50 in the canvas.

  // 2. Create a for loop that draw 5 circles on y position 90.
  //    set fill color to red for circles that is positioned on the left side.
  //    set fill color to green for the circle on the middle.
  //    set fill color to blue for circles on the right side.
