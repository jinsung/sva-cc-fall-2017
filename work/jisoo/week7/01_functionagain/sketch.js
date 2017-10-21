var myArrows = [];
function setup() {
  createCanvas(500, 500);

  for (var i = 0; i<100; i++){
    myArrows[i] = new Arrow( 5*i, 100);
  }
}

function draw() {
  background(230);
  fill(0);
  stroke(0);
  for (var i = 0; i<myArrows.length; i++){
    myArrows[i].draw();
  }
}
