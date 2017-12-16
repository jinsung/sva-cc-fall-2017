function Particle(x, y, size) {
  this.x = x;
  this.y = y;
  this.size=size;
  this.update = function (x,y){
    this.x =x;
    this.y =y;
  }

  this.draw = function(index){
    push();
    translate (this.x, this.y);
    rotate(Math.PI /40 * index);

    rect(0, 0, this.size, this.size);
    pop();
  }
}
