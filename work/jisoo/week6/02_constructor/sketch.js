var myCircle1;
var myCircle2;
function setup() {
  createCanvas(500, 500);
  smooth();

  myCircle1 = new Circle();
  myCircle1.setup(100,100,2,2.2,30);

  myCircle2 = new Circle();
  myCircle2.setup(200,200,3,3.3,40);

}

function draw() {
  background(220);
  fill(255);
  myCircle1.move();
  myCircle1.display();
  myCircle1.bounce();

  myCircle2.move();
  myCircle2.display();
  myCircle2.bounce();

  }

  function Circle(){
    this.x;
    this.y;
    this.speedX;
    this.speedY;
    this.size;
    this.setup = function (x,y,speedX, speedY, size){
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.size = size;
    }

    this.move = function(){
      this.x = this.x +this.speedX;
      this.y = this.y + this.speedY;
    }

    this.bounce = function(){
      if(this.x > (width - this.size/2) || this.x<this.size/2){
        this.speedX = this.speedX * -1;
      }
      if (this.y>(height-this.size/2) || this.y<this.size/2){
        this.speedY = this.speedY * -1;
    }
  }
    this.display = function(){
      ellipse(this.x, this.y,this.size,this.size);
    }
  }
  /*myCircle = {
    x: width/2,
    y: 100,
    size: 30,
    speedX: 2,
    speedY: 2.1,
    move: function (){
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
    },
    display: function() {
        ellipse(this.x,this.y,this.size,this.size);
    },
    bounce: function(){
      if(this.x > (width - this.size/2) || this.x<this.size/2){
        this.speedX = this.speedX * -1;
      }
      if (this.y>(height-this.size/2) || this.y<this.size/2){
        this.speedY = this.speedY * -1;
      }
    }
  }
  }
  // drawGrid();
*/
