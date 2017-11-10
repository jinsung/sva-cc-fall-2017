function Particle(loc, size, randomnumber) {
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
    textSize(this.size);
    fill (255);
    noStroke();
    text(randomnumber, this.loc.x, this.loc.y)
  }

  this.bounce = function() {
    //if (thi.location.x > width || this.location.)
    var left = this.loc.x - this.size + 21;
    var right = this.loc.x + this.size;
    var top = this.loc.y - this.size + 6;
    var bottom = this.loc.y;

    if (left < 0) {
      this.vel.x *= -1;
    } else if (right > width) {
      this.vel.x *= -1;
    }

    if (top < 0) {
      this.vel.y *= -1;
    } else if (bottom > height) {
      this.vel.y *= -1;
    }
  }
}
