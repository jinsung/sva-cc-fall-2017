var myFreakyImage;
var particleSystem;


function preload() {
  myFreakyImage = loadImage("assets/image.png");
}


function setup() {
  createCanvas( 500, 500 );
  particleSystem = new ParticleSystem();
  particleSystem.setup();
}

function draw() {
  background(200);
  image(myFreakyImage, 0, 0, width, height);
  loadPixels();

  if(mouseIsPressed) {
    particleSystem.addParticle(mouseX, mouseY, 1);
  }
  background(100);
  particleSystem.draw();


}
