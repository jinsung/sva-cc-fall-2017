var myCircle;

function setup() {
  createCanvas(500, 500);
  smooth();
//the following function is known as JSON - Java Script Object Notation
  //myCirlce = new Circle();

  myCircle = {
    x: width/2,
    y: 100,
    size: 30,
    speedX: 2,
    speedY: 2.1,
    move: function () {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    },
    display: function() {
      ellipse(this.x, this.y, this.size, this.size);
    },
    bounce: function () {
      if (this.x > (width - this.size/2) || this.x < this.size/2) {
        this.speedX = this.speedX * -1;
      }
      if (this.y > (height - this.size/2) || this.y < this.size/2) {
        this.speedY = this.speedY * -1;
      }
    },

  }
}

function draw() {
  background(220);
  fill(255);
  myCircle.move();
  myCircle.display();
  myCircle.bounce();

}
