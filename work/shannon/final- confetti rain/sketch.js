var ps;

function setup(){
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  ps = new ParticleSystem();
  textAlign(CENTER);
};

function draw(){
  background(0);
  ps.draw();
  noStroke();
  fill(0);

  if (mouseIsPressed){
    ps.addParticles(createVector(mouseX,mouseY),10);
  }

  r = random(255);
  fill(r, 100, 100);
  text("click to see confetti rain", 0,20, width, height)
};
