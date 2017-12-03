var myImage;
var particleSystem;

function preload() {
  myImage = loadImage("assets/rose.jpg");
}

function setup() {
  createCanvas(500, 500);
  particleSystem = new ParticleSystem();
  particleSystem.setup();
  noStroke();
}

function draw() {
  background(200);
  image(myImage, 0, 0, width, height);
  loadPixels();
  var myPixels = pixels;

  if (mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  particleSystem.draw(myPixels);
}
