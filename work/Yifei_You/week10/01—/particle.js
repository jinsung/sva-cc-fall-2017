function Particle() {

  this.setup = function (pos) {
    this.pos = pos.copy();
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.size = 8;
    this.age = 1000;
    this.isDead = false;
    this.friction = 0.98;
    };

  this.applyForce = function (force) {
      this.acc = force.copy();
    }

  this.update = function (){
    this.age --;
    if (this.age <= 0) {
      this.isDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    };

  this.draw = function (){
    fill(255);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  }
