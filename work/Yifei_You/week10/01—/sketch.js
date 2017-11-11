var ps;

function setup() {
  createCanvas( 400, 400 );
  ps = new ParticleSystem();
}

function draw() {

  if(mouseIsPressed){
    ps.addParticles(createVector(mouseX,mouseY),10);
  }
  background(100);
  ps.draw();
}

function mousePressed(){

}
