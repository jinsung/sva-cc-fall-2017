function Arrow(x, y){
  this.x = x;
  this.y = y;

  this.draw = function(){
    push();
    translate(this.x, this.y);
    var angle = this.getAngle(this.x, this.y, mouseX, mouseY);
    rotate(angle);
    var size = 100;
    line(0, 0, size, 0);
    var triangleSize = size * 0.2;
    triangle(0, 0,
            triangleSize, triangleSize * 0.3,
            triangleSize, - triangleSize * 0.3);

    var fLoc = size * 0.7;
    var fSize = size * 0.05;

    for(var i = 0; i < 3; i ++){
    line(fLoc, 0, fLoc + fSize, fSize);
    line(fLoc, 0, fLoc + fSize, - fSize);
    fLoc += size * 0.1;
    }
    pop();
  };

  this.getAngle = function(x1, y1, x2, y2){
    var diffX = x1 - x2;
    var diffY = y1 - y2;
    var angle = Math.atan2(diffY, diffX);
    return angle;
  };
}
