function ParticleSystem () {
  this.particles = [];   //store your particles in this array

  this.addParticles = function (pos, numOfParticles) {
    for (var i = 0; i<numOfParticles; i++){
      var p = new Particle(); //var p is your class
      p.setup(pos);
      var force = createVector(random(-0.5, 0.5),
                               random(-0.5, 0.5));
      p.applyForce(force);
      //this.particles[i] = p;
      this.particles.push(p);
    }
    
  }

  this.draw = function() {
    for(var i=0;i<this.particles.length;i++) {

      if (this.particles[i].isDead){
        this.particles.slice(i,1);
      } else {
        this.particles[i].update();
      this.particles[i].draw();

      }

    }
  }
}
