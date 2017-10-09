function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
}

function draw() {
  background(200);
  var gap = 10;
  noStroke();
  for (var i=0; i<width+gap; i+=gap) {
    var distance = abs(mouseX - i);
    fill(i/width * ((mouseX/width) * 360), mouseY / 4, 100);
    rect(i, 0, gap, height);
  }
}
