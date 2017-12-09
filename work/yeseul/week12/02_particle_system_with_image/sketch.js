var myImage;
var ParticleSystem;

function preload (){
    myImage = loadImage ("assets/rose.png");
}

function setup() {
  createCanvas(500, 333);
  ParticleSystem = new ParticleSystem();
  ParticleSystem.setup();
  noStroke();
}

function draw() {

  background(200);
  image(myImage, 0, 0, width, height);
  loadPixels();
  var myPixels = pixels;

  if (mouseIsPressed) {
    ParticleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  ParticleSystem.draw(myPixels);
}
