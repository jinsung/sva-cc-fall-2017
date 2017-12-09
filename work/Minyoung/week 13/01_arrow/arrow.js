function Arrow() {
  this.setup = function(pos, size) {
    this.pos = pos.copy();
    this.size = size;
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1;
    this.dampling = 0.98;
    this.isActive = false;
    this.angle = 0;
  }

  this.active = function() {
    this.isActive = true;
  }

  this.applyForce = function(force) {
    if(this.isActive){
    var f = force. copy(). div(this.mass);
    this.acc.add(f);
  }
}


  this.update = function() {
    this.calcAngle();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.vel.mult(this.dampling);
  }

  this.stop = function() {
    this.vel.mult(0);
  }

  this.draw = function() {
    push();
    fill(0);
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);
    triangle(0, 0, 10, 3, 10, -3);
    line(0, 0, this.size, 0 );

    // draw feathers
    var featherPos = 0.7;
    var featherSize = 5;
    var numOfFeathers = 4;
    for (var i = 0; i < numOfFeathers; i++) {
      this.drawFeather(this.size * featherPos, featherSize);
      featherPos += 0.1;

    }
    pop();
  }

  this.drawFeather = function(pos, size) {
    line (pos, 0, pos + size, size);
    line (pos, 0, pos + size, -size);
  }

  this.calcAngle = function() {
    if(this.isActive) {
      this.angle = Math.atan2(this.vel.y, this.vel.x) + Math.PI;
    } else{
        var mousePos = createVector(mouseX, mouseY);
        var diffVector = p5.Vector.sub(mousePos, myArrow.pos);
        this.angle = Math.atan2(diffVector.y, diffVector.x) + Math.PI;
      }
    }
}
