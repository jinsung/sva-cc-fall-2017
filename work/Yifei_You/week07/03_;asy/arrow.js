function Arrow(ax,ay){
  this.x = ax;
  this.y = ay;
  this.draw = function(){
    push();
    translate(this.x,this.y);
    var angle = getAngle(this.x,this.y,mouseX,mouseY);
    rotate(angle);
    var size = 100;

    var trianglesize= size * 0.2;
    fill(0)
    triangle(0,0,trianglesize,trianglesize * 0.3,trianglesize,-trianglesize*0.3);

    pop();
  }
    var getAngle = function(x1,y1,x2,y2){
    var diffX= x1-x2;
    var diffY=y1-y2;
    var angle = Math.atan2(diffY,diffX);
    return angle;
  }
}
