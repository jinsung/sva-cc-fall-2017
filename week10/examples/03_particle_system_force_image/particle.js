function Particle() {
  this.setup = function(pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.age = 0;
    this.size = 1;
    this.color = 255;
<<<<<<< HEAD
    this.lifeSpan = 400;
=======
    this.lifeSpan = 2000;
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
    this.isDead = false;
    this.isAboutToDead = false;
    this.mass = Math.random() + 0.1 * 10.0;
    this.damping = 0.98;
  }

  this.applyForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function (size) {
    this.age++;
    if (this.age > this.lifeSpan ||
        (this.pos.x < 0 || this.pos.x > width) ||
        (this.pos.y < 0 || this.pos.y > height) ) {
<<<<<<< HEAD
//      this.isDead = true;
=======
      //this.isDead = true;
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
      this.isAboutToDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
    if (!isNaN(size)) {
      if (!this.isAboutToDead) {
        this.color += (size - this.color) * 0.1;
<<<<<<< HEAD
        var targetSize = 3 + (size/255) * 5;
=======
        var targetSize = 3 + (size/255) * 3;
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
        this.size += (targetSize - this.size) * 0.1;
      } else {
        if (this.size <= 0){
          this.isDead = true;
        }
        this.size --;
      }

    }
  }

  this.draw = function (index) {
    //fill(255, 255, 255, (1 - this.age/this.lifeSpan) * 255);
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    //rect(this.pos.x, this.pos.y, this.size, this.size);
  }

}
