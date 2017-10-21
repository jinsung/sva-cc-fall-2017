var myArrows = [];

function setup() {
  createCanvas(700, 700);

  for (var i = 0; i < 200; i++){
  myArrows[i] = new Arrow( 5* i, height/2);
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
