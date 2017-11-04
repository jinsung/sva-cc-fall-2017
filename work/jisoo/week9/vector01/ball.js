function Ball(loc,size){
  this.location = loc;
  this.size = size;

  this.velocity = createVector(0,0);
  this.acceleration = createVector(0.0, 0.0);

  this.applyForce= function(force){
    force.div(this.size);
    this.acceleration.add(force);
  }
  this.update = function (){
    this.friction = this.velocity.copy();
    this.friction.mult(-1);
    this.friction.normalize();
    this.friction.setMag(0.001);
    this.velocity.add(this.friction);
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.bounce();
    this.acceleration.mult(0);
  }

  this.bounce = function(){
    var left = this.location.x - this.size/2;
    var right = this.location.x + this.size/2;
    var top = this.location.y - this.size/2;
    var bottom = this.location.y + this.size/2;
    if(left<0){
      this.location.x = 0 + this.size/2;
      this.velocity.x *= -1;
    }else if(right>width){
      this.location.x = width - this.size/2;
      this.velocity.x *= -1;
    }
    if(top<0){
      this.location.y = 0 + this.size/2;
      this.velocity.y *= -1;
    }else if(bottom>height){
      this.location.y = height - this.size/2;
      this.velocity.y *= -1;
    }
  }

  this.display = function(){
    ellipse(this.location.x, this.location.y,this.size, this.size);
  }
}
