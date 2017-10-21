var myCircle;
var myCircle2;
var myCircle3;

function setup() {
  createCanvas(500, 500);
  smooth();

myCircle = new Circle();
myCircle.setup(100,100,2,3,30);
myCircle2 = new Circle();
myCircle2.setup(50,50,3,2,40);
myCircle3 = new Circle();
myCircle3.setup(20,20,4,3,20);
}

function draw() {
  background(240);
  noStroke();
  fill(255, 0, 0);
  myCircle.move();
  myCircle.bounce();
  myCircle.display();
  fill(0, 0, 255);
  myCircle2.move();
  myCircle2.bounce();
  myCircle2.display();
  fill(0, 255, 0);
  myCircle3.move();
  myCircle3.bounce();
  myCircle3.display();
  }

function Circle () {
  this.x;
  this.y;
  this.speedX;
  this.speedY;
  this.size;

  this.setup = function (x, y, speedX, speedY, size) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
  }

this.move = function () {
  this.x = this.x + this.speedX;
  this.y = this.y + this.speedY;
}

this.bounce = function () {
  if (this.x > width - this.size/2 || this.x < this.size/2) {
    this.speedX = this.speedX * -1;
  }
  if (this.y > height - this.size/2 || this.y < this.size/2) {
    this.speedY = this.speedY * -1;
  }
}

this.display = function () {
  ellipse(this.x, this.y, this.size, this.size);
}

}

/*  myCircle = {
    x: width/2,
    y: 100,
    size: 30,
    speedX: 2,
    speedY: 2.1,
    move: function () {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    },
    bounce: function () {
      if (this.x > width - this.size/2 || this.x < this.size/2) {
        this.speedX = this.speedX * -1;
      }
      if (this.y > height - this.size/2 || this.y < this.size/2) {
        this.speedY = this.speedY * -1;
      }
    },
    display: function () {
        ellipse(this.x, this.y, this.size, this.size);
    }
  } */
