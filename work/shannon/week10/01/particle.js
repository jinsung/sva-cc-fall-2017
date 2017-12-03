function Particle(){
  this.setup = function (pos){
    this.pos = pos.copy(); //identical vector
    this.vel = createVector(0,-10);
    this.acc = createVector(0,0);
    this.size = random(50);
    this.age = 1000;
    this.isDead = false;
    this.friction = 0.98;
  };

  this.applyForce = function(force){
    this.acc = force.copy();
  };

  this.update = function (){
    this.age --;
    if(this.age <= 0){
      this.isDead = true;
    };
    this.vel.add(this.acc);//velocity changes by acceleration
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.mult(-1)
    };
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.mult(-1)
    };
    //position will change by velocity
    this.acc.mult(0);
    this.vel.mult(this.friction);
  };//update forces

  this.draw = function(){
    hueRand = random(255);
    fill(hueRand,70, 100);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  };
}
