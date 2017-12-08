function ParticleSystem() {

  this.setup = function () {
    this.particles = [];
  }

  this.addParticle = function (x, y, amt) {
    //console.log( "adding" );
    for (var i=0; i<amt; i++) {
      var p = new Particle();
<<<<<<< HEAD
      p.setup(createVector(x, y));
      this.particles.push(p);
      var randomForce = createVector((Math.random() - 0.5), (Math.random() - 0.5));
      randomForce.mult(2.0);
=======

      this.particles.push(p);
      var randomForce = createVector((Math.random() - 0.5), (Math.random() - 0.5));
      randomForce.mult(2.0);
      p.setup(createVector(x + randomForce.x, y + randomForce.y));
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
      //p.applyForce(randomForce);
    }

  }

  this.dontTouch = function () {
    var counter = 0;
    for (var i = 0; i<this.particles.length; i++) {
      var iP = this.particles[i];
      for (var j = this.particles.length-1; j > i; j--) {
        var jP = this.particles[j];
        var distance = iP.pos.dist(jP.pos);
<<<<<<< HEAD
        if (distance < (iP.size + jP.size)) {
          var f1 = iP.pos.copy().sub(jP.pos).mult(2);
          var f2 = iP.pos.copy().sub(jP.pos).mult(-2);
=======
        if (distance < (iP.size + jP.size) * 0.98) {
          var f1 = iP.pos.copy().sub(jP.pos).mult(0.01);
          var f2 = iP.pos.copy().sub(jP.pos).mult(-0.01);
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
          iP.applyForce(f1);
          jP.applyForce(f2);
          //iP.applyForce(f.mult(-1));
          //console.log( "length: " + this.particles.length + " i: " + i + " j: " + j );
          //console.log( "distance: " + distance);
        }
        //
        //counter++;
      }

    }
    //console.log("how many? " + counter);
  }

  this.draw = function (pixels) {
    //var gravity = createVector(0.0, 0.05);

    for (var i = 0; i < this.particles.length; i++) {
      var p = this.particles[i];
      if (p.isDead) {
        this.particles.splice(i, 1);
      } else {
        //p.applyForce(gravity);
        var pd = pixelDensity();
        var pixelIndex = (((width * pd) * (Math.ceil(p.pos.y) * pd)) + (Math.ceil(p.pos.x) * pd) ) * 4;
        var c = pixels[pixelIndex];
        if (!c) {
<<<<<<< HEAD
          console.log("why?: " c + " " + pixelIndex + " length " + pixels.length);
          console.log("p.pos.y: " + Math.floor(p.pos.y) + " length " + pixels.length);
=======
          //console.log("why?: " c + " " + pixelIndex + " length " + pixels.length);
          //console.log("p.pos.y: " + Math.floor(p.pos.y) + " length " + pixels.length);
>>>>>>> 35059a9e83ad0b3bcb63d62db5a0e0552a861cf2
        }
        p.update(c);
        p.draw();

      }
    }
    this.dontTouch();
  }

}
