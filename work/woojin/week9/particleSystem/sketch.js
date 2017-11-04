var ps;

function setup() {
  createCanvas(500, 500);
  ps = new ParticleSystem(50);
  ps.setup(createVector(width/2, height/2))
}

function draw(){
  background(200);
  fill(200,100);
  ps.update();
  ps.display();
}
