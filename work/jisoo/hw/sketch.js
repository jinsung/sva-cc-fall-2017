function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 100);
}

function draw() {
  background(200);
  var x = width/2;
  var y = height*2;
  var numOfCircles = mouseX + mouseY;
  var size = 10;
  //noStroke();
  for (var i=0; i<numOfCircles; i+=1) {
    var zeroToOne = i/numOfCircles;
    stroke( 50 + i/numOfCircles * 50, 50, 50)
    fill(30 + i/numOfCircles * 50, 60, 80);
    var angle = zeroToOne * (Math.PI * (mouseY * 1));
    var spiralSize = 30 + i;
    x = width / 2 + Math.cos(angle) * spiralSize;
    y = height / 2 + Math.sin(angle) * spiralSize;
    rect(x, y, size, size);
  }if (mouseIsPressed) {
    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);
    size = random(100);
    var widthAmout = 20;
    x = random(widthAmout) - widthAmout/2 + mouseX;
    y = random(widthAmout) - widthAmout/2 + mouseY;
    noStroke();
    fill(r,g,b,a);
    rect(0, 0, 800, 800);
  }
}
