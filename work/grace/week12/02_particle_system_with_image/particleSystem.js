function ParticleSystem() {
  this.setup = function() {
    this.particles = [];
  }

  this.addParticle = function (x, y, amt) {
    for (var i = 0; i < amt; i ++) {
      var p = new Particle();

      this.particles.push(p);
      var randomForce = createVector(Math.random() -0.5, Math.random() -0.5);
      p.setup(createVector(x + randomForce.x, y + randomForce.y));
      p.applyForce(randomForce);
    }
  }

  this.draw = function (pixels) {
    for ( var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];

      p.update();
      p.draw();
    }
  }
}
