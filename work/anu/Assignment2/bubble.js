// function bubble() {
//   this.x;
//   this.y;
//   this.size;
//   this.speedX;
//   this.speedY;
// }
//
// this.setup = function(x, y, size, speedX, speedY) {
//   this.x = x;
//   this.y = y;
//   this.size = size;
//   this.speedX = speedX;
//   this.speedY = speedY;
// }
//
// this.move = function() {
//   this.x = this.x + this.speedX;
//   this.y = this.y + this.speedY;
// }
//
// this.bounce = function(width, height) {
//   if (this.x > width || this.x < 0) {
//     this.speedX = this.speedX * -1;
//   } else if (this.y > height || this.y < 0) {
//     this.speedY = this.speedY * -1;
//   }
//
// this.draw = function () {
//   ellipse(this.x, this.y, this.size, this.size);
//   }
// }
function Bubble() {
  this.setup = function(pos) {
    this.pos = pos.copy();
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.age = 0;
    this.size = 2;
    this.lifeSpan = 100;
    this.isDead = false;
    this.mass = Math.random() + 0.1 * 10.0;
    this.damping = 1;
  }

  this.addForce = function (force) {
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function () {
    this.age ++;
    if (this.age > this.lifeSpan ||
        (this.pos.x < 0 || this.pos.x > width) ||
        (this.pos.y < 0 || this.pos.y > height) ) {
      this.isDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
  }

  this.draw = function (index) {
    fill(0, 0, 255, (1 - this.age/this.lifeSpan) * 255);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }

}
