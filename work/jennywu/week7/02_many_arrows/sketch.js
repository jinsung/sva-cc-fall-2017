var myArrow = [];

function setup() {
createCanvas(500,500);

var numberOfArrow = 25;
for (var y = 0; y < numberOfArrow; y++){
  var gap = height / numberOfArrow;
  var newYPos = gap / 2 + y * gap;

  for (var x = 0; x < numberOfArrow; x++){
    var xGap = width / numberOfArrow;
    var newXPos = xGap / 2 + x * xGap;
    var newI = y * numberOfArrow + x;
    myArrow[newI] = new Arrow(newXPos, newYPos, gap/2);
    }
  }
}

function draw() {
  background(230);
  fill(0);
  stroke(0);
  for (var i = 0; i< myArrow.length; i++){
    myArrow[i].draw();
    }
}
