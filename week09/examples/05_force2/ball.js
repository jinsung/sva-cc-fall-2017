function Ball(loc, size) {
  this.location = loc;
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0.0, 0.0);
  this.size = size;

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult();
  }

  this.applyForce = function (force) {
    this.acceleration.add(force);
  }

  this.bounce = function (width, height) {
    if (this.location.x > width || this.location.x < 0) {

      if (this.location.x > width) {
        this.location.x = width;
      } else {
        this.location.x = 0;
      }
      this.velocity.x *= -1;
    } else if (this.location.y > height || this.location.y < 0) {
      if (this.location.y > height) {
        this.location.y = height;
      } else {
        this.location.y = 0;
      }
      this.velocity.y *= -1;
    }
  }

  this.draw = function () {
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}
