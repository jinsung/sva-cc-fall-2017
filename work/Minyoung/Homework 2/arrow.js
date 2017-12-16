function Arrow(arrowx , arrowy, size){
  this.x = arrowx;
  this.y = arrowy;
  this.size = size;

  this.draw = function(){
    push();
    translate(this.x, this.y);
    var angle = this.getAngle(this.x, this.y, mouseX, mouseY);
    rotate(angle);
    var size = this.size;
    // strokeWeight(sWeight);
    ellipse(20 ,20, 20);
    pop();
  };

  this.getAngle = function(x1, y1, x2, y2) {
    var diffX = x1 - x2;
    var diffY = y1 - y2;
    var angle =  Math.atan2(diffY, diffX);
    return angle;
  }

}
