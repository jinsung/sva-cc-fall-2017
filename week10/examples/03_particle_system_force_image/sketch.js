var particleSystem;
var img;

function preload() {
  img = loadImage("assets/rose.png");
}

function setup() {
  createCanvas( 500, 333 );
  noStroke();

  particleSystem = new ParticleSystem();
  particleSystem.setup();
}

function draw() {

  image(img, 0, 0)
  loadPixels();
  var myPixels = pixels;
  if (mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  particleSystem.draw(myPixels);

}

function mousePressed() {
  //particleSystem.addParticle(mouseX, mouseY, 10);
}
