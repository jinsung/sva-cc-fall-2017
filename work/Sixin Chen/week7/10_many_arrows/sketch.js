var myArrows = [];


function setup() {
  createCanvas(500, 500);

  var numOfArrow = 25;
  for (var y=0; y<numOfArrow; y++) {
  var gap =height/numOfArrow;
  var newYPos = y * height/2 + y* gap;
  for (var x = 0; x < numOfArrow; x ++){
    var xGap = width/numOfArrow;
    var newXPos = xGap/2 + x * xGap;
    var newI = y*numOfArrow+ x;
      myArrows[newI] = new Arrow(newXPos, newYPos, gap/2);
    }
  }
}

function draw() {
  background(200);
  fill(0);
  stroke(0);
  for (var i=0; i<myArrows.length; i++) {
      myArrows[i].draw();

  }
}
