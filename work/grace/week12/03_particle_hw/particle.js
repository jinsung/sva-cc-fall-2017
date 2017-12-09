function Particle() {
  this.setup = function (pos) {
    this.pos = pos.copy();
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.age = 0;

    this.mass = 1;
    this.damping = 0.98; //smaller amount slower, larger faster

  }

  this.applyForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function ( color ) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
    this.color = color;
    this.size = color/20;

  }

  this.draw = function () {
    if (isNaN(this.color)){
      this.color =0;
    }
    if (this.color>100){
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    } else {
      rect(this.pos.x, this.pos.y, this.size, this.size);
    }

    fill(this.color);



  }
}
