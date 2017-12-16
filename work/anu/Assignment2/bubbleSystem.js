function BubbleSystem() {

  this.setup = function () {
    this.bubbles = [];
  }

  this.addBubble = function (x, y, amt) {
    for (var i=0; i<amt; i++) {
      var p = new Bubble();
      p.setup(createVector(x, y));
      this.bubbles.push(p);
      var randomForce = createVector((Math.random() - 0.5), (Math.random() - 0.5));
      randomForce.mult(2.0);
      p.addForce(randomForce);
    }
  }

  this.draw = function () {
    for (var i = 0; i < this.bubbles.length; i++) {
      var p = this.bubbles[i];
      if (p.isDead) {
        this.bubbles.splice(i, 1);
      } else {
        p.update();
        p.draw();
      }
    }
  }
}
