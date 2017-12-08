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
<<<<<<< HEAD
    particleSystem.addParticle(mouseX, mouseY, 10);
=======
    //console.log("mouse pressed");
    particleSystem.addParticle(mouseX, mouseY, 1);
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
  }
  background(100);
  particleSystem.draw(myPixels);

}

function mousePressed() {
  //particleSystem.addParticle(mouseX, mouseY, 10);
}
