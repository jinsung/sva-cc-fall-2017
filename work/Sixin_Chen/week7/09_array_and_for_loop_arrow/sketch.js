var myArrows = [];
function setup() {
  createCanvas(500, 500);
  smooth();

  for (var i=0; i<6; i++) {
    myArrows[i] = new Arrow(100, i*50, 10);
  }
}

function draw() {
  background(200);
  for (var i=0; i<myArrows.length; i++) {
    myArrows[i].draw();
  }
}
