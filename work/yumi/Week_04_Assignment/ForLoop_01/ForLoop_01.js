var angle_01 = 0;
var angle_02 = 0;
var scalar = 70;

//var x;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(45, 0, 255);
}

function draw() {

  for(var x = 0; x < width; x = x + 2){
    stroke(255, (x * 0.5));
    line(x, 0, x, height);
  }

  /*
  for(var y = 0; y < height; y = y + 5){
    stroke(0, (x * 0.5));
    line(0, y, width, y);
  }
  */
}

function keyPressed(){
  //background(45, 0, 255);
  background(random(0,255),random(0,255),random(0,255));
}
