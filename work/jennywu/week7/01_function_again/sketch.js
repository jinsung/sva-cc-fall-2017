var myArrow = [];

function setup() {
createCanvas(500,500);

for (var i = 0; i < 100; i++){
  myArrow[i] = new Arrow(5 * i, 250);
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
