var ps;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  ps = new ParticleSystem();
};

function draw(){
  background(0);
  ps.draw();
  noStroke();
  fill(0);

  if (mouseIsPressed){
    ps.addParticles(createVector(mouseX,mouseY),10);
  }
};
