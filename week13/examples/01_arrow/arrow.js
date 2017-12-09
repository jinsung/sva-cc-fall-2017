function Arrow () {

  this.setup = function (pos, size) {
    this.pos = pos;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1.0;
    this.damping = 0.985;
    this.size = size;
    this.angle = 0;
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
    this.angle = this.getAngle();
  }

  this.stop = function() {
    this.vel.mult(0);
  }

  this.draw = function () {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    fill(0);
    line(0, 0, this.size, 0);
    var tSize = this.size * 0.15;
    triangle(0, 0, tSize, tSize/3, tSize, -tSize/3);

    var fPosPct = 0.7;
    var fSize = this.size * 0.05;
    for (var i = 0; i < 3; i++) {
      var fPos = this.size*fPosPct;
      line (fPos, 0, fPos+fSize,  fSize);
      line (fPos, 0, fPos+fSize, -fSize);
      fPosPct += 0.1;
    }
    pop();
  };

  this.getAngle = function () {
    if (this.vel.magSq() > 0) {
      return this.vel.heading() + Math.PI;
    } else {
      var dx = this.pos.x - mouseX;
      var dy = this.pos.y - mouseY;
      var angleInRad = Math.atan2(dy, dx);
      return angleInRad;
    }

  }
}
