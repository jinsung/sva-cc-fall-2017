var particleSystem;

function preload() {
  myImage = loadImage("assets/rose.png");
}

function setup() {
  createCanvas( 500, 500 );
  image(myImage, 0, 0);
  loadPixels();

  noStroke();

  particleSystem = new ParticleSystem();
  particleSystem.setup(pixels);
}

function draw() {
  background(255,255,255);
  if (mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 10);
  }
  particleSystem.draw();
}
