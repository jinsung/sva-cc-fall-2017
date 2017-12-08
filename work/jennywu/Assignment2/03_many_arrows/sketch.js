var myArrow = [];

function setup() {
createCanvas(windowWidth*0.9, windowHeight*0.9);
colorMode(HSB, 255);

var numberOfArrow = 45;
for (var y = 0; y < numberOfArrow; y++){
  var gap = height / numberOfArrow;
  var newYPos = gap / 2 + y * gap;

  for (var x = 0; x < numberOfArrow; x++){
    var xGap = width / numberOfArrow;
    var newXPos = xGap / 2 + x * xGap;
    var newI = y * numberOfArrow + x;
    myArrow[newI] = new Arrow(newXPos, newYPos, gap*0.7, 8);
    }
  }
}

function draw() {
  background(0);
  //strokeWeight(4);
  stroke(mouseX, 150, 250);
  for (var i = 0; i< myArrow.length; i++){
    myArrow[i].draw();
    }
}
