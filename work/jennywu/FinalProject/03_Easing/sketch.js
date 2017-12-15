var myCircle;

function setup() {
  createCanvas(1920, 1080);
  background(0);

  //lines
  for (i = 0; i < width; i++){
    var gap = 5;
    stroke(255);
    strokeWeight(1);
    line(i * gap, 0, i * gap, height)
  }

  myCircle = new Circle(800, 500);
  myCircle.setup();

}


function draw() {

  myCircle.update();
  myCircle.draw();

}
