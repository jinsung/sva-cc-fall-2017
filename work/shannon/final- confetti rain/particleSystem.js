function ParticleSystem (){
  this.particles = [];
  //array where to store the ParticleSystem

  //need to specify where the particles are and the number
  this.addParticles = function(pos, numOfParticles){
    for (var i = 0; i < numOfParticles; i++){
      var p = new Particle(); //class starts with Uppercase
      var pos = createVector(pos.x + random(-350,350),pos.y + random(-350,350));
      p.setup(pos);
      var force = createVector(random(-1.5,1.5),random(-1.5, 1.5));
      p.applyForce(force);
      this.particles.push(p);
      //object is assigned to array
      //this.particles[i] = p : loop once
    }

  }

  this.dontTouch = function(){
    for(var i = 0; i < this.particles.length; i++){
      var ip = this.particles[i];
      for (var j = this.particles.length -1; j > i; j --){
        var jp = this.particles[j];
        var distance = ip.pos.dist(jp.pos); //distance between ip.pos and jp.pos
        if (distance < (ip.size + jp.size)){
          var f1 = ip.pos.copy().sub(jp.pos).mult(0.01);//push forward
          var f2 = ip.pos.copy().sub(jp.pos).mult(-0.01);//push backward
          ip.applyForce(f1);
          jp.applyForce(f2);
        }
      }
    }
  }

  this.draw = function(){

    for(var i = 0; i < this.particles.length; i++){
      if(this.particles[i].isDead){
        this.particles.slice(i,1);
      } else{
        this.particles[i].update();
        this.particles[i].draw();
      }
    }
    this.dontTouch();
  }
}
