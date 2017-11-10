function Arrow(ax , ay, size, sWeight){
  this.x = ax;
  this.y = ay;
  this.size = size;
  //this.dist = dist(this.x, this.y, mouseX, mouseY)

  this.draw = function(){
    push();
    translate(this.x, this.y);
    var angle = this.getAngle(this.x, this.y, mouseX, mouseY);
    rotate(angle);
    var size = this.size;
    strokeWeight(sWeight);
    line(0 ,0, size, 0);
    pop();
  };

  this.getAngle = function(x1, y1, x2, y2) {
    var difX = x1 - x2;
    var difY = y1 - y2;
    var angle =  Math.atan2(difY,difX);
    return angle;
  }

}
