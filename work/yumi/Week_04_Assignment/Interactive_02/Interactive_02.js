var r = 0;
var g = 0;
var b = 0;

var x = 60;

var topLeft;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  //topLeft = rect (0, 0, width/2, height/2);
  //topLeft.mousePressed(playAnimation);

  song1 = loadSound('assets/bear.mp3');
  song2 = loadSound('assets/BlackEyedSusan.mp3');
  song3 = loadSound('assets/cozy.mp3');
  song4 = loadSound('assets/Fater_Lee.mp3');
}

function draw(){
background(r, g, b);
changeBackground();
//playAnimation();
}

/*
function playAnimation(){
  stroke(255, 255, 255);
  x = x + 1;
  line (x, 100, x, height/2-100);
  if(x > width/2 -60){
    x = 60 - 1;
  }
}
*/

function changeBackground(){
  noStroke();
  fill(255, 255, 255, 75);

    if (mouseX < width/2 && mouseY < height/2){
      r = 255;
      g = 0;
      b = random(150, 200);
      rect (0, 0, width/2, height/2);

  } else if (mouseX > width/2 && mouseY < height/2){
      r = random(125, 150);
      g = 0;
      b = 2556;
      rect (width/2, 0, width, height/2);

  } else if (mouseX < width/2 && mouseY > height/2){
      r = 255;
      g = 0;
      b = random (0, 100);
      rect (0, height/2, width/2, height);

  } else if (mouseX > width/2 && mouseY > height/2){
      r = random (0, 100);
      g = random (0, 20);
      b = 255;
      rect (width/2, height/2, width, height);
  }
}

function mousePressed() {
/*
  if (mouseX < width/2 && mouseY < height/2){
    stroke(255, 255, 255);
    x = x + 1;
    line (x, 100, x, height/2-100);
    if(x > width/2 -60){
      x = 60 - 1;
    }
  }
*/

  if (song1.isPlaying()) {
    song1.stop();
  } else if (mouseX < width/2 && mouseY < height/2){
    song1.play();
  } else if (song2.isPlaying()) {
    song2.stop();
  } else if (mouseX > width/2 && mouseY < height/2){
    song2.play();
  } else if (song3.isPlaying()) {
    song3.stop();
  } else if (mouseX < width/2 && mouseY > height/2){
    song3.play();
  } else if (song4.isPlaying()){
    song4.stop();
  } else if (mouseX > width/2 && mouseY > height/2){
    song4.play();
  }
}
