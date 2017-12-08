function ParticleSystem() {
  this.setup = function() {
    this.particles = [];
  }

  this.addParticle = function (x, y, amt) {
    for (var lala = 0; lala < amt; lala ++) {
      var p = new Particle();

      this.particles.push(p);
      var randomForce = createVector(Math.random() -0.5, Math.random() -0.5);
      p.setup(createVector(x + randomForce.x, y + randomForce.y));
      p.applyForce(randomForce);
    }
  }

  this.dontTouch = function () {
    for (var lala = 0; lala< this.particles.length; lala++) {
      var lalaP = this.particles[lala];

      for (var haha = this.particles.length-1; haha > lala; haha--) {

        var hahaP = this.particles[haha];
        var distance = lalaP.pos.dist(hahaP.pos);
        if (distance < (lalaP.size + hahaP.size) * 0.55) { //too small meaning they are touching each other
          var force = lalaP.pos.copy().sub(hahaP.pos);
          var forceAmt = 0.005;
          var flala = force.copy().mult(forceAmt); //calculating force they have against each other
          var fhaha = force.copy().mult(-forceAmt);
          lalaP.applyForce(flala);
          hahaP.applyForce(fhaha);
        }
      }
    }

  }

  this.draw = function (pixels) { //pixels is now myFunnyPixels. passed by in sketch.js
    var pd = pixelDensity();
    for ( var lala = 0; lala < this.particles.length; lala++) {
      var p = this.particles[lala];
      var xlala = Math.ceil(p.pos.x); //math cell so that p.pos.x is not a floating number
      var ylala = Math.ceil(p.pos.y);

      var pixelIndex = ((width * pd) * (ylala * pd) + (xlala * pd)) * 4;
      var color = pixels[pixelIndex];



      p.update( color );
      p.draw();
    }

    this.dontTouch();
  }
}
