function ParticleSystem() {

  this.particles = [];
  this.numberOfParticles = 100;
  this.currentParticleIndex = 0;
  this.myX = 0;
  this.myY = 0;
  this.timeX = 0;
  this.timeY = 5;



  this.setup = function(){
    for (var i = 0; i < this.numberOfParticles; i++){
      this.particles[i] = new particle(this.myX, this.myY, 120);
    }
  }

  this.update = function(){
  }

  this.display = function(){

    this.timeX += 0.005;
    this.timeY += 0.005;
    this.myX = noise(this.timeX) * width;
    this.myY = noise(this.timeY) * height;
    this.currentParticleIndex++;

    if (this.currentParticleIndex >= this.numberOfParticles) {
      this.currentParticleIndex = 0;
    }

    this.particles[this.currentParticleIndex].update(this.myX, this.myY);

    for (var i = 0; i < this.numberOfParticles; i++){
      fill(random(0, 255));
      //modulo
      var index = (this.currentParticleIndex + i) % this.numberOfParticles;
      this.particles[index].display();
    }
  }
}
