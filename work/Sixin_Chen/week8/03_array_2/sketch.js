var particles;
var numOfParticles;
var particleIndex;

function setup() {
  createCanvas( 400, 400 );
  colorMode(HSB, 255);
  noStroke();
  smooth();

  particles = [];
  numOfParticles = 100;
  particleIndex = 0;

  for (var i = 0; i < numOfParticles; i++) {
    particles[i] = new Particle();
    particles[i].setup(-100, -100, 200);
  }
}

function draw() {
  background(100);

  particleIndex++;
  if (particleIndex >= numOfParticles) {
    particleIndex = 0;
  }

  particles[particleIndex].update(mouseX, mouseY);

  for (var i = 0; i < numOfParticles; i++) {
      fill(i/numOfParticles*255, 150, 250);
      // modulo
      //var index = (particleIndex + i) % numOfParticles;
      particles[i].draw()
  }

}
