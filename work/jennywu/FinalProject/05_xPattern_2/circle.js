function Circle(x, y, speedX, speedY, size, col){
  this.x = x;
  this.y = y;
  this.speedX = speedX;
  this.speedY = speedY;
  this.size = size;
  this.col = col;

  this.setup = function(){
  }

  this.display = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.move = function(){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  this.bounce = function(){
    if (this.x > (width - this.size/2) || this.x < this.size/2){
      this.speedX = this.speedX * -1;
    }
    if (this.y > (height - this.size/2) || this.y < this.size/2){
      this.speedY = this.speedY * -1;
    }
  }
}
