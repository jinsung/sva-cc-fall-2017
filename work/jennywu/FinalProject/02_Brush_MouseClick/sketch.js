var ps;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  noStroke();

  ps = new ParticleSystem();
  ps.setup();

}

function draw() {
  ps.display();

  if(mouseIsPressed){
    ps.addParticles();
  }

}
