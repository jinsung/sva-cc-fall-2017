function Particle() {
  this.setup = function (pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.age = 0;
    this.size = 10;
    this.mass = 3;
    this.damping = 0.98;
    this.color = 0;
  }

  this.applyForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function (color) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
    this.color = color;
  }

  this.draw = function () {
    if (isNan(this.color)) {
      this.color = 0;
    }
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
