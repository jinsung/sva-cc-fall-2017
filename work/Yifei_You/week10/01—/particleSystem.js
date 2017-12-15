function ParticleSystem() {

  this.particles = [];

  this.addParticles = function (pos,numOfParticles) {

    for(var i = 0; i < numOfParticles; i++){

       var p = new Particle();
       var pos = createVector(pos.x + random(-5,5),
                              pos.y + random(-5,5));
       p.setup(pos);

    //   var force = createVector ( random ( -0.1,0.1), random(-0.1,0.1));
      // p.applyForce(force);
      // this.particles[i] = p; //onetime
    this.particles.push(p); //loop

      }
    }

    this.dontTouch = function() {
      for(var i = 0; i< this.particles.length;i++){
        var ip = this.particles[i];
        for(var j = this.particles.length-1; j>i; j--){
          var jp = this.particles[i];
          var distance = ip.pos.dist(jp.pos);
          if(distance < (ip.size +jp.size)){
            var f1 = ip.pos.copy().sub(jp.pos).mult(0.001);
            var f2 = ip.pos.copy().sub(jp.pos).mult(-0.001);
            ip.applyForce(f1);
            jp.applyForce(f2);
          }
        }
       }
      }

  this.draw = function() {
      for (var i =0; i < this.particles.length; i++){
          this.particles[i].update();
          if(this.particles[i].isDead){
            this.particles.slice(i,1);
        } else {
          this.particles[i].update();
          this.particles[i].draw()
        }
      }
      this.dontTouch();
    }
  }
