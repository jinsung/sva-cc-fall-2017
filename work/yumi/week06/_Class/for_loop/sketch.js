function setup() {
  createCanvas(100, 100);
  smooth();
}

function draw() {
  background(230);
  drawCircle(10, 5, 45);
  drawCircle(50,10);

}

function drawCircle(position, number){
  var size = 10;
  for (var i = 0; i < number; i++) {
    var offset = 10;
    var xPos = i * width/number + offset;
    ellipse (xPos, position, size, size);

  }

  // 1. Create a function that draw {number of circles} on {y position}.
}




/*
  for (var i = 0; i < 10; i++) {
    var offset = 10;
    var xPos = i * width/10 + offset;
    ellipse (xPos, 50, size, size);
  }


  for (var i = 0; i < 5; i++) {
    var offset = 10;
    var xPos = i * width/5 + offset;
    if(xPos < width/2){
        fill(0, 255, 0);
    }else{
      fill(0, 0, 255);
    }
    ellipse (xPos, 90, size, size);
  }


  // 1. Create a for loop that draws 10 circles on y position 50 in the canvas.

  // 2. Create a for loop that draw 5 circles on y position 90.
  //    set fill color to red for circles that is positioned on the left side.
  //    set fill color to green for the circle on the middle.
  //    set fill color to blue for circles on the right side.

}
*/
