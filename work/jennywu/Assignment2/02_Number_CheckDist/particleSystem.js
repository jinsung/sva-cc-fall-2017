function ParticleSystem(numberOfParticles) {
  this.numberOfParticles = numberOfParticles;
  this.Particles = [];
  this.setup = function(loc){

    for (var i = 0; i < this.numberOfParticles; i++){
      var p =  new Particle (loc, 20, parseInt(random(1,50)));
      this.Particles[i] = p;
    }
  }

  this.update = function(){
    for (var i = 0; i < numberOfParticles; i++){
    var randomRange = 0.01;
    var randomVec = createVector(random(-randomRange,randomRange),
                                random(-randomRange,randomRange));
    this.Particles[i].applyForce(randomVec);
    this.Particles[i].update();
    }
  }
  this.display = function () {
    for (var i = 0; i < numberOfParticles; i++){
    this.Particles[i].display();
    this.Particles[i].bounce();
    }
  }
}
