var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(25, 0, 255);
  strokeWeight(2);
  background(0);

}

function draw() {
  background(0);

  x1 = x1 + 1;

  if(x1 > width){
      x1 = 0;
  }
  line(x1, 0, x1, height);

  x2 = x2 + 3;

  if(x2 > width){
      x2 = 0;
  }
  line(x2, 0, x2, height);

  y1 = y1 +1;

  if(y1 > height){
    y1 = 0;
  }
  line(0, y1, width, y1);

  y2 = y2 + 2;
  if(y2 > height){
    y2 = 0;
  }
  line(0, y2, width, y2);


}


function mouseClicked(){
  background(random(0,255));
  stroke(random (0, 255), random (0, 255), random (0, 255));
  strokeWeight(random(2, 100));


}
