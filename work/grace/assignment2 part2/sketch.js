function setup() {
  createCanvas(500, 500);
  smooth();
}

function draw() {
  background(51);
  noStroke();
  fill(500);

  for (var i = 0; i < 2; i++) {
    var offset = 10;
    var yPos = i * width/5 + offset;
    rect (yPos+20, 50, 30, 80);
    rect (yPos, 120, 50, 20);
  }


}
