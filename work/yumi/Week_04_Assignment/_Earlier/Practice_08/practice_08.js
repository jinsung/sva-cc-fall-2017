var x1 = 0;
var x2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(25, 0, 255);
  //x2 = x2 + 3;
  background(0);
}

function draw() {


  x1 = x1 + 1;

  if(x1 > width){
      x1 = 0;
  }
  line(x1, 0, x1, height);
}

function mouseClicked(){

  //line(100, 0, 100, height);
  stroke(random (0, 255), random (0, 255), random (0, 255));

}
