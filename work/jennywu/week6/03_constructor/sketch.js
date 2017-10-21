var myCircle;

function setup() {
  createCanvas(500, 500);
  smooth();

  myCircle1 = new Circle();
  myCircle1.setup(100, 100, 2, 3.2, 30, 255);

  myCircle2 = new Circle();
  myCircle2.setup(200, 200, 3, 3.3, 50, 0);

  myCircle3 = new Circle();
  myCircle3.setup(60, 60, 5, 5.3, 20, 100);
}

function draw() {
  background(220);

  myCircle1.display();
  myCircle1.move();
  myCircle1.bounce();

  myCircle2.display();
  myCircle2.move();
  myCircle2.bounce();

  myCircle3.display();
  myCircle3.move();
  myCircle3.bounce();
}

function Circle(){
  this.x;
  this.y;
  this.speedX;
  this.speedY;
  this.size;
  this.col;

  this.setup = function (x, y, speedX, speedY, size, col){
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.size = size;
    this.col = col;
  }

  this.display = function(){
    fill(this.col);
    noStroke();
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
  //this.hit = function(){}
}




/*
myCircle = {
  x:100,
  y:100,
  size:30,
  speedX:3,
  speedY:3.5,
  bounce: function(){
      if (this.x > (width - this.size/2) || this.x < this.size/2){
        this.speedX = this.speedX * -1;
      }
      if (this.y > (height - this.size/2) || this.y < this.size/2){
        this.speedY = this.speedY * -1;
      }
  },
  move: function(){
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
  },
  display: function (){
    ellipse(this.x, this.y, this.size, this.size);
  }
}
*/
