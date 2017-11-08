
function Particle(loc, size){
  this.setup = function(pos){
    this.pos = pos.copy();
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.age = 0;
    this.size = 10;
    this.lifeSpan = 100;
    this.isDead = false;
    this.mass = Math.random()+0.1 *10.0;
    this.damping = 1.00;
  }

  this.addForce = function(force){
    var f = force.copy().div(this.mass);
    this.acc.add(f);
  }

  this.update = function (){
    this.age++;
    if (this.age > this.lifeSpan ||
        (this.pos.x < 0 || this.pos.x > width) ||
        (this.pos.y < 0 || this.pos.y > height) ) {
      this.isDead = true;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.damping);
  }


  this.draw = function (index){
    var hueRand = random(255);
    var randomB = random(50);

    var xPos = random(50);
    var yPos = random(50);

    fill(hueRand, randomB, 100);
    ellipse(mouseX+xPos, mouseY+yPos, this.size, this.size);
  }
}
