
var myImage;
var particleSystem;

function preload() {
  myImage = loadImage("assets/rose.png")
}


function setup() {
  createCanvas(500, 500);
  particleSystem = new ParticleSystem;
  particleSystem.setup();
}

function draw() {
  background(200);
  image(myImage, 0, 0, 500, 333);
  loadPixels();
  var myPixels = pixels;

  if (mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  particleSystem.draw(myPixels);


}
