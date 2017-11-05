function Particle(loc, size) {
  this.loc = loc.copy();
  this.acc = createVector(0,0);
  this.vel = createVector(0,0);
  this.size = size;

  this.update = function () {
    this.vel.add(this.acc);
    this.loc.add(this.vel);

    this.acc.mult(0);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
    }

  this.display = function () {
    noStroke();
    ellipse(this.loc.x, this.loc.y, this.size, this.size);
  }
}
