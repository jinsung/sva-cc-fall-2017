var ps;

function setup() {
  createCanvas(windowWidth*0.9, windowHeight*0.9);
  ps = new ParticleSystem(90);
  ps.setup(createVector(width/2, height/2));
}

function draw() {
  background(0);
  ps.update();
  ps.display();
}
