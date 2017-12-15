function Circle(x, y) {

  this.circleX = x;
  this.circleY = y;
  this.targetX = this.circleX;
  this.targetY = this.circleY;
  this.size = 100;
  this.age = 10;
  this.isDead = false;
  this.time = 0



  this.setup = function() {

  }

  this.update = function(){
    this.time -= 0.01;

    if (mouseIsPressed){
    this.targetX = mouseX;
    this.targetY = mouseY;
    }
    /*
    this.age --;
    if (this.age <= 0){
      this.isDead = true;
    }
    */
  }

  this.draw = function() {
    noStroke();
    fill(0);

    this.size += 0.5;
    ellipse(this.circleX, this.circleY ,this.size ,this.size);

    var xDiff = this.targetX - this.circleX;
    var yDiff = this.targetY - this.circleY;
    var speed = 0.1;


    this.circleX = this.circleX + xDiff * speed;
    this.circleY = this.circleY + yDiff * speed;

  }

}
