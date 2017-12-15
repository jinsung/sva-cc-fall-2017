function ParticleSystem(numOfParticles) {
  this.numOfParticles = numOfParticles;
  this.particles = [];

  this.setup = function(loc) {
    for( var i = 0; i < this.numOfParticles; i++) {
      var p = new Particle(loc, i/width*10);
      this.particles[i] = p;
    }
  }

  this.update = function() {
    for(var i = 0; i < this.particles.length; i++) {
      var randomRange = 0.5;
      var randomVec = createVector(random(-randomRange, randomRange), random(-randomRange, randomRange));
      this.particles[i].applyForce(randomVec);
      this.particles[i].update();
    }

  }

  this.display = function() {
    for(var i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }

}
