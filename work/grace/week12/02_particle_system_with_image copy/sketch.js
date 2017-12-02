var myFreakyImage;
var particleSystem;


function preload() {
  myFreakyImage = loadImage("assets/rose.png");
}


function setup() {
  createCanvas( 500, 333 );
  particleSystem = new ParticleSystem();
  particleSystem.setup();
  noStroke();
}

function draw() {
  background(200);
  image(myFreakyImage, 0, 0, width, height);
  loadPixels();
  var myFunnyPixels = pixels;

  if(mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  particleSystem.draw(myFunnyPixels);


}
