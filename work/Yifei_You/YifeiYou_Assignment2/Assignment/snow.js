var Particle = function(position) {
  this.acceleration = createVector(0.001, 0.001);
  this.velocity = createVector(random(-3, 5), random(-2, 5));
  this.position = position.copy();
  this.flake = 255.0;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.flake -= 0.2;
};

Particle.prototype.display = function() {
  stroke(200, this.flake);
  strokeWeight(2);
  fill(127, this.lifespan);
  ellipse(this.position.x, this.position.y, 5, 5);
};

Particle.prototype.Wrong= function(){
  if (this.flake < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  if (int(random(0,2))==0) {
    p = new Particle(this.origin);
  }
  else{
    p = new Snows(this.origin);
  }
  this.particles.push(p);
};

ParticleSystem.prototype.run = function() {
  for (var i = this.particles.length-5; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.Wrong()) {
      this.particles.splice(i, 7);
    }
  }
};

function Snows(origin){
  Particle.call(this,origin);

  this.snoww = 0.0;
};

Snows.prototype = Object.create(Particle.prototype);
Snows.prototype.constructor = Snows;

Snows.prototype.update = function() {
  Particle.prototype.update.call(this);
  this.snoww += ( this.velocity.x * this.velocity.mag()) / 20.0;
  push();
  translate(this.position.x, this.position.y);
  rotate(this.snoww);
  stroke(255,this.lifespan); pop();
}
