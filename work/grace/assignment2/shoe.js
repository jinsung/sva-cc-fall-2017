function Shoe() {
  this.x = 30;
  this.y = 100;
  this.display = function() {
    noStroke();

    rect(this.x, this.y, 100, 50);
    rect(this.x, this.y-50, 60, 100);
  }

  this.move = function() {
    this.x = this.x + 1;
  }

  this.move2 = function() {
    this.x = this.x + 1.5;
  }
}
