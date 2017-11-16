var ps;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  ps = new ParticleSystem();
};

function draw(){
  background(0);
  ps.draw();

  if (mouseIsPressed){
    ps.addParticles(createVector(mouseX,mouseY),10);
  }
};
