var myCircle;
var myCircle2;

function setup() {
  createCanvas(500, 500);
  smooth();

function draw() {
  background(220);
  myCirlce.move();
  myCircle.display();
  myCircle.bounce();

}

  myCircle = {
    x: width/2,
    y: 100,
    size:30,
    speedX:2,
    speedY:2.1,
    move:function(){
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    },
    //making function its name is display
    display:function(){
      ellipse(this.x, this.y, this.size, this.size);
    },

    bounce:function(){
      if(this.x > width || this.x < 0){
        this.speedX = this.speedX *-1;
      }
      if (this.y >height || this.y <0){
        this.speedY = this.speedY *-1;
      }
    }
  }
}
