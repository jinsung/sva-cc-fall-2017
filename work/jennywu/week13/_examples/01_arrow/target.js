function Target () {
  this.setup = function (pos, size, numOfCircles) {
    this.pos = pos;
    this.size = size;
    this.numOfCircles = numOfCircles;
  }

  this.draw = function () {
    push();
    stroke (0);
    translate(this.pos.x, this.pos.y);
    for (var i=this.numOfCircles; i>0; i--) {
      var step = i/this.numOfCircles; // range from 1 to 0.
      fill(step*255);
      var segSize = this.size * step;
      ellipse(0, 0, segSize, segSize );
    }
    pop();
  }
}
