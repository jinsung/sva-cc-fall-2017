function Particle(){

  this.setup = function (pos){
    this.pos = pos.copy(); //identical vector
    this.vel = createVector(0,5);
    this.acc = createVector(0,0);
    this.age = 1000;
    this.isDead = false;
    this.friction =1;
  };

  this.applyForce = function(force){
    this.acc = force.copy();
  };

  this.update = function (){
    this.age --;
    if(this.age <= 0){
      this.isDead = true;
    };
    this.vel.add(this.acc);//velocity changes by acceleration
    this.pos.add(this.vel);
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.mult(-1)
    };
    if(this.pos.y < 0 || this.pos.y > height){
      this.vel.mult(-1)
    };
    //position will change by velocity
    this.acc.mult(0);
    this.vel.mult(this.friction);
  };//update forces

this.draw = function(){
  this.hueRand1= random(255);
  this.numOfLoop = 1;
  this.circleSize = random(10);
  this.randomB = 80;

  this.xPos = random(0-width/2,width);
  this.yPos = random(50);

  for (i = 0; i < this.numOfLoop; i++){
    fill(this.hueRand1, this.randomB, 100);
    ellipse(this.pos.x, this.pos.y-this.yPos, this.circleSize, this.circleSize);
  };

  this.hueRand2= random(255);
  this.rectSizeX = random(5);
  this.rectSizeY = random(25);
  for (i = 0; i < this.numOfLoop; i++){
    fill(this.hueRand2, this.randomB, 100);
    rect(this.pos.x, this.pos.y+this.yPos, this.rectSizeX, this.rectSizeY);;
  };

this.hueRand3= random(255);

  this.triRandom = random(10)
  this.xTriPos1 = random(this.triRandom *-1, this.triRandom *+1)+ this.triRandom;
  this.yTriPos1 = random(this.triRandom *-1, this.triRandom *+1)+ this.triRandom;
  this.xTriPos2 = random(this.triRandom *-1, this.triRandom *+1)+ this.triRandom;
  this.yTriPos2 = random(this.triRandom *-1, this.triRandom *+1)+ this.triRandom;
  this.xTriPos3 = random(this.triRandom *-1, this.triRandom *+1)+ this.triRandom;
  this.yTriPos3 = random(this.triRandom *-1, this.triRandom *+1)+ this.triRandom;
  this.numOfLoop = 1;
  this.randomB = random(50);
  for (i = 0; i < this.numOfLoop; i++){
    fill(this.hueRand3, this.randomB, 100);
    triangle(this.pos.x+this.xTriPos1*0.02, this.pos.y+this.yTriPos1, this.pos.x+this.xTriPos2, this.pos.y+this.yTriPos2, this.pos.x+this.xTriPos3, this.pos.y+this.yTriPos3 );
  };
};

}
