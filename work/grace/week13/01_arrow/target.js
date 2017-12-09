function Target() {
  this.setup =function(pos, numOfCircles, size){
    this.pos = pos;
    this.numOfCircles = numOfCircles;
    this.size = size;
  }

  this.draw = function(){
    stroke (0);
    for (var i=this.numOfCircles; i>0; i--) {
      var step = i/this.numOfCircles; // range from 1 to 0.
      fill(step*255);
      var segSize = this.size * step;
      ellipse(this.pos.x, this.pos.y, segSize, segSize );
    }
  }
}
