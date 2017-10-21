var myCircle;

function setup() {
  createCanvas(500, 500);
  smooth();

  myCircle = [];
  for (var i=0; i<100; i++){
    myCircle[i] = new Circle;
    myCircle[i].setup(random(width),random(height),
    1.5 + random(), 1.5 + random(), 10 + random(5), random(255));
  }
}

function draw() {
  background(220);

  for (var i = 0; i < myCircle.length; i++){
  myCircle[i].display();
  myCircle[i].move();
  myCircle[i].bounce();
  }
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
