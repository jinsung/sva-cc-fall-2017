
function ParticleSystem() {

this.setup = function (pixels) {
    this.particles = [];
    this.pixels = pixels; // new
  }

  this.addParticle = function (x, y, amt) {
    for (var i=0; i < amt; i++) {
      var p = new Particle(); //new
      p.setup(createVector(x,y));//no Math
      this.particles.push(p);
      var randomForce = createVector((Math.random() - 0.5), (Math.random() - 0.5));
      randomForce.mult(2.0);
      p.applyForce(randomForce);
      }
    }
    /*this.dontTouch = function(){
      for(var i = 0; i < this.particles.length; i++){
        var ip = this.particles[i];
        for (var j = this.particles.length-1; j>i; j--){
          var jp = this.particles[j];
          var distance = ip.pos.dist(jp.pos);
          if (distance < ( ip.soze + jp.size) * 0.2) {
            var force = ip.pos.copy().sub(jp.pos).mult(0.01);
            var fi = force.mult(forceAmt);
            var fj = force.mult(-forceAmt);
              ip.applyForce(fi);
              jp.applyForce(fj);
          }
        }
      }
    }*/ //touch//

    this.draw = function () {
      console.log(pixels);
      for (var i = 0; i < this.particles.length; i++) {
        var p = this.particles[i];
        if (p.isDead) {
          this.particles.splice(i, 1);
        } else {
          var d = pixelDensity();
          var pixelIndex = (parseInt(p.pos.x) + (parseInt(p.pos.y) * height) * d) * d * 4;//depends on size
          var m = [this.pixels[pixelIndex], this.pixels[pixelIndex+1], this.pixels[pixelIndex+2]];
          p.update(m);
          p.draw();
        }
      }
    }
  }
