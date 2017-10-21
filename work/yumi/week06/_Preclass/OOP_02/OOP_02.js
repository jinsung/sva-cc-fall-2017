var jit;
var bug;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(255);
  //create object and pass in parameters = initialize object)
  jit = new JitterBug(width*0.33, height/2, 100);
  bug = new JitterBug(width*0.66, height/2, 200);
}

function draw(){
  jit.move();
  jit.display();
  bug.move();
  bug.display();
  //put a copy of the JitterBug constructor
}

function JitterBug(tempX, tempY, tempDiameter){
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempDiameter;
  this.speed = 3;
//this. = var

  this.move = function(){
    this.x += random(- this.speed, this.speed);
    this.y += random(- this.speed, this.speed);
  };

  this.display = function(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
    noFill();
    //fill(random(10,50), 3);
    //stroke(random(10,50),random(10,50),random(10,50),)
  };

}



/*
var red, blue;

function setup(){
  createCanvas(400, 400);
  red = new Train("Red Line", 90);
  blue = new Train ("Blue Line", 120);

function Train(tempName, tempDistance){
  this.name = tempName;
  this.distance = tempDistance;

  }

}
*/
