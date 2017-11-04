function Ball(loc, size) {
  this.location = loc
  this.size = size;
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0.01, 0.03);

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
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
        this.location.y
         = 0;
      }
      this.velocity.y *= -1;
    }
  }

  this.bound = function (width, height) {
    if (this.location.x < 0) {
      this.location.x = width;
    } else if (this.location.x > width) {
      this.location.x = 0;
    }

    if (this.location.y < 0) {
      this.location.y = height;
    } else if (this.location.y > height) {
      this.location.y = 0;
    }

  }

  this.draw = function () {
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }
}
