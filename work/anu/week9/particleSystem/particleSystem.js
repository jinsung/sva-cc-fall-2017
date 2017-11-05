function ParticleSystem(numOfParticles) {
  this.numberOfParticles = numOfParticles;
  this.particles = [];
  this.setup = function (loc) {

    for (var i = 0; i < this.numberOfParticles; i++) {
      var p = new Particle(loc, 10);
      this.particles[i] = p;
    }
  }

  this.update = function () {
    for (var i = 0; i < this.particles.length; i++) {
      var randomRange = 0.01;
      var randomVec = createVector(random(-randomRange, randomRange),
                                   random(-randomRange, randomRange));
      this.particles[i].applyForce(randomVec);
      this.particles[i].update();
    }
  }

  this.display = function () {
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].display();
    }
  }
}
