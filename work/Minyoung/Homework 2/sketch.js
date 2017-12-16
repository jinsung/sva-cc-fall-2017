var myArrow = [];

function setup() {
createCanvas(400, 400);

var numberOfArrow = 30;
for (var y = 0; y < numberOfArrow; y++){
  var gap = height / numberOfArrow;
  var newYPos = gap / 10 + y * gap;

  for (var x = 0; x < numberOfArrow; x++){
    var xGap = width / numberOfArrow;
    var newXPos = xGap / 10 + x * xGap;
    var newI = y * numberOfArrow + x;
    myArrow[newI] = new Arrow(newXPos, newYPos, gap*0.5, 1);
    }
  }
}

function draw() {
  background(255);
  fill(0, 0, mouseX, mouseX);
  stroke(mouseX, mouseX, mouseX, mouseX);
  for (var i = 0; i< myArrow.length; i++){
    myArrow[i].draw();
    }
}
