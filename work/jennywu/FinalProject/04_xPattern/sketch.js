var myCircle;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  smooth();

  myCircle = [];
  for (var i = 0; i < 1000; i++){
    myCircle[i] = new Circle(random(width),random(height),
    1.5 + random(), 1.5 + random(), 2, random(255));
    myCircle[i].setup();
  }

}

function draw() {

  for (var i = 0; i < myCircle.length; i++){
  myCircle[i].display();
  myCircle[i].move();
  myCircle[i].bounce();
  }

}
