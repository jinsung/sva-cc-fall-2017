var myCircle;
var myCircle2;

function setup() {
  createCanvas (500,500);
  smooth();

  myCircle = new Circle ();
}


function draw () {
  background (250,150,0);
  fill(0,150,150);
  noStroke();
  myCircle.move();
  myCircle.display();
  myCircle.bounce();

}

myCircle = {
  x:100,
  y: 100,
  size : 30,
  speedX: 3,
  speedY: 2.1,
  move: function(){
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
  },
  display: function() {
  ellipse(this.x, this.y, this.size, this.size);
},
  bounce: function() {

    if(this.x > (width - this.size / 2 )|| this.x < this.size / 2){
      this.speedX = this.speedX * -1;
    }
    if (this.y > (height - this.size /2) || this.y < this.size /2){
      this.speedY = this.speedY * -1;
    }
  }
}
