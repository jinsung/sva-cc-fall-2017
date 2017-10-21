var myArrows = [];
var gap = 20;

function setup() {
  createCanvas(500, 500);
  smooth();

  for (var y=0; y<height/gap; y++) {
    myArrows[y] = [];
    for (var x=0; x<width/gap; x++) {
      var newX = gap/2 + x * gap;
      var newY = gap/2 + y * gap;
      myArrows[y][x] = new Arrow(newX, newY, gap/2);
    }
  }
}

function draw() {
  background(200);
  for (var y=0; y<myArrows.length; y++) {
    for (var x=0; x<myArrows[y].length; x++){
      myArrows[y][x].draw();
    }
  }
}
