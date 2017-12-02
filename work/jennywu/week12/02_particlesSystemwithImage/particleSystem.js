function ParticleSystem(){

  this.setup = function(){
    this.particles = [];
  }

  this.addParticle = function(x, y, amt){
    for (var i = 0; i < amt; i++) {
      var p = new Particle();

      this.particles.push(p);
      var randomForce = createVector(Math.random() - 0.5, Math.random() - 0.5);
      p.setup( createVector( x + randomForce.x, y + randomForce.y));
      p.applyForce(randomForce);
    }
  }

  this.dontTouch = function() {
    for (var i = 0; i < this.particles.length; i++) {
      var iP = this.particles[i];

      for (var j = this.particles.length - 1; j > i; j--){

        var jP = this.particles[j];
        var distance = iP.pos.dist(jP.pos);
        if (distance < (iP.size + jP.size) * 0.55) {
          var force = iP.pos.copy().sub(jP.pos);
          var forceAmt = 0.0025;
          var fi = force.copy().mult(forceAmt);
          var fj = force.copy().mult(-forceAmt);
          iP.applyForce(fi);
          jP.applyForce(fj);
        }
      }
    }
  }

  this.draw = function(pixels) {
    var pd = pixelDensity();
    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      var xi = Math.ceil(p.pos.x);
      var yi = Math.ceil(p.pos.y);
      var pixelIndex = ((width * pd) * (yi * pd) + (xi * pd)) * 4;
      var color = pixels[pixelIndex];

      p.update(color);
      p.draw();
    }
    this.dontTouch();
  }
}
