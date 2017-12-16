
var numOfParticles = 100;
var pc;

function setup() {
  createCanvas( 700, 700 );
  rectMode(CENTER);
  colorMode (HSB, 255);
  noStroke();
pc =new ParticleController();
pc.setup(numOfParticles);
}

function draw() {
  background(100);
  pc.update(mouseX, mouseY);
  pc.draw();
}
