function Ball(x, y, size, speedX, speedY) {
  this.pos = createVector(x,y);
  this.size = size;
  this.speed = createVector(speedX, speedY);

  this.move = function() {
    this.pos.add(this.speed);
  }

  this.bounce = function (width, height) {
    if (this.pos.x > width || this.pos.x < 0) {

      if (this.pos.x > width) {
        this.pos.x = width;
      } else {
        this.pos.x = 0;
      }
      this.speed.x *= -1;
    } else if (this.pos.y > height || this.pos.y < 0) {
      if (this.pos.y > height) {
        this.pos.y = height;
      } else {
        this.pos.y
         = 0;
      }
      this.speed.y *= -1;
    }
  }

  this.draw = function () {
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
