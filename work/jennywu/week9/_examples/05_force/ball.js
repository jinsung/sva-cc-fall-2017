function Ball(loc, size) {
  this.location = loc
  this.size = size;
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0.0, 0.0);

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.applyForce = function(force) {
    this.acceleration.add(force);

  }

  this.bounce = function (width, height) {
    var left = this.location.x - this.size/2;
    var right = this.location.x + this.size/2;
    var top = this.location.y - this.size/2;
    var bottom = this.location.y + this.size/2;

    if (right > width) {
      this.location.x = width - this.size/2;
      this.velocity.x *= -1;
    } else if (left < 0) {
      this.location.x = this.size/2;
      this.velocity.x *= -1;
    }

    if (bottom > height) {
      this.location.y = height - this.size/2;
      this.velocity.y *= -1;
    } else if (top < 0) {
      this.location.y = this.size/2;
      this.velocity.y *= -1;
    }
  }

  this.draw = function () {
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}
