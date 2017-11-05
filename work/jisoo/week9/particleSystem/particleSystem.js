function ParticleSystem(numOfPar){
  this.numOfPar = numOfPar;
  this.particles = [];

  this.setup = function(loc){
    for(var i=0; i<this.numOfPar; i ++){
      var p = new Particle(loc,10);
      this.particles[i] = p;
    }
  }

  this.update = function(){
      for(var i=0; i<this.numOfPar; i ++){
          var randomVec = createVector(random(-0.01,0.01), random(-0.01,0.01));
          this.particles[i].applyForce(randomVec);
          this.particles[i].update();
    }
  }
  this.display = function(){
    for(var i=0; i<this.numOfPar; i ++){
        this.particles[i].display();
    }
  }
}
