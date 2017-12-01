var ps;

function setup() {
  createCanvas(900,900);
  ps = new ParticleSystem();
}

function draw() {
  if(mouseIsPressed){
    ps.addParticles(createVector(mouseX, mouseY),10);
  }
  background(200);
  ps.draw();
}

function mousePressed(){

}
