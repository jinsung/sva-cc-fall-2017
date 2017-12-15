

function LittleDudeEye(tx, ty, ts) {
  this.x = tx;
  this.y = ty;
  this.size = ts;
  this.angle = 0;

  this.update = function (mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
  };


  this.display = function () {
    push();
    translate(this.x, this.y);
    fill(300);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    fill(173, 244, 66);
    ellipse(this.size / 4, 0, this.size / 2, this.size / 2);
    pop();
  };



}
