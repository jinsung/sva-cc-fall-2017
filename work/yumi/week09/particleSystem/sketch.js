var ps;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ps = new ParticleSystem(1000);
  ps.setup(createVector(width/2, height/4));
}

function draw() {
  background(0);

  stroke(45, 0, 255, 100);
  noFill();
  ps.update();
  ps.display();

}
