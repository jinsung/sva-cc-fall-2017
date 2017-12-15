function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  var gap = 10;
  for (var y=0; y <= height; y = y+gap) {
    for (var x=0; x <= width; x = x+gap) {
      for (var x=0; x <= width; x = x+gap) {
      //var circleSize = gap/2;
      //var circleSize = random(gap/2);
      var circleSize = sin(x * 6.28 * wave) * gap/2;
      ellipse(x, y, circleSize, circleSize);
    }
  }
  wave += 0.1;
}
