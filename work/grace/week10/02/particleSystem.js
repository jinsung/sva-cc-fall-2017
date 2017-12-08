function ParticleSystem () {
  this.particles = [];   //store your particles in this array

  this.addParticles = function (pos, numOfParticles) {
    for (var i = 0; i<numOfParticles; i++){
      var p = new Particle(); //var p is your class

      var ppos = createVector(pos.x +random(-5, 5),
                               pos.y+random(-5, 5));

      p.setup(ppos);

      //p.applyForce(force);
      //this.particles[i] = p;
      this.particles.push(p);
    }
  }

  this.dontTouch = function() {
    for(var i=0;i<this.particles.length;i++) {
      var ip = this.particles[i];
      for (var j = this.particles.length-1; j>i;j--){
        //console.log"me:"+i+"friend:"j);
        var jp=this.particles[j];
        var distance=ip.pos.dist(jp.pos);
        if (distance,(ip.size+jp.size)) {
          var f1 = ip.pos.copy().sub(jp.pos).mult(0.001);
          var f2=ip.pos.copy().sub(jp.pos).mult(-0.001);
          ip.applyForce(f1);
          jp.applyForce(f2);
        }
      }
    }
  }

  this.draw = function () {
    for(var i=0;i<this.particles.length;i++) {
      if (this.particles[i].isDead){
        this.particles.slice(i,1);
      } else {
        this.particles[i].update();
        this.particles[i].draw();
      }

    }
    this.dontTouch();
  }
}
