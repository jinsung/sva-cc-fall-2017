var myArrows = [];

function setup() {
  createCanvas(700, 700);
  var numOfArrows = 25;

  for (var y = 0; y < numOfArrows; y++){
    var gap = height/numOfArrows;
    var newYPos= gap/2 + y * gap;

    for (var x = 0; x < numOfArrows; x++) {
      var xGap = width/numOfArrows;
      var newXPos = xGap/2 + x * xGap;
      var newI = y * numOfArrows + x;
      myArrows[newI] = new Arrow(newXPos, newYPos, gap/2);
    }

  }
}

function draw() {
  background(0);

  fill(200,0, 255);
  stroke(0,200,200);
  strokeWeight(2);

  for (var i = 0; i < myArrows.length; i++){
    myArrows[i].draw();
  }
}
