

function setup() {
  createCanvas(500, 500);
  smooth();
  myCircles = [];
  for (var i =0; i<100; i++) {
    myCircles[i] = new Circle();
    myCircles[i].setup(random(width), random(height),
    1.5+random(), 1.5+random(), 10 + random(5));
  }

}

function draw() {
  background(220);
  fill(255);

  for (var i = 0; 1 < myCircles.length; i++) {
    myCircles[i].move();
    myCircles[i].display();
    myCircles[i].bounce();
  }
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

  this.move =function () {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }

  this.bounce= function () {
    if (this.x > (width - this.size/2) || this.x < this.size/2) {
      this.speedX = this.speedX*-1;
    }
    if (this.y > (height - this.size/2) || this.y < this.size/2) {
      this.speedY = this.speedY*-1;
    }
}

  this.display= function () {
    ellipse(this.x, this.y, this.size, this.size);
  }
}
