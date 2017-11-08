var hueRand;
var ps;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();

  ps = new ParticleSystem();
  ps.setup();
}

function draw(){

  if(mouseIsPressed){
  ps.addParticle(mouseX, mouseY, 10)
  }
  ps.draw();

  if (hueRand > 360){
    hueRand = 0;
  };

  if (keyIsPressed){
    background(255);
  };

}
