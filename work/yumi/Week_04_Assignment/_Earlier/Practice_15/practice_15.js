var x = 0;
var x_1 = 0;
var x_2 = 0;
//var xpos_1, xpos_2, xpos_3;
//var col1 = 255;
//var noise;
//var melody;

function setup() {
  //background(0,0,0);
  //noise = loadSound('assets/BackgroundNoise.mp3');
  //melody = loadSound('assets/bear.mp3');
  createCanvas(window.innerWidth, window.innerHeight);

}
function draw() {
  //background(0,0,0);
  colorMode(RGB);

  stroke(46, 0, 255);
  line(x, 0, x, height);
  x = x + 2;
  if (x > width ){
    //noise.play();
    x = 0;
  }

  stroke(255, 72, 0);
  line(x_1, 0, x_1, height);
  x_1 = x_1 + 1;
  if (x_1 > width ){
    //melody.play();
    x_1 = 0;
  }

  stroke(0, 255, 245);
  line(x_2, 0, x_2, height);
  x_2 = x_2 + 0.5;
  if (x_2 > width ){
    //melody.play();
    x_2 = 0;
  }


}
