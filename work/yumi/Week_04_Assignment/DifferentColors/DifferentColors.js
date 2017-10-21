var r = 0;
var g = 0;
var b = 0;

function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  background (0);
}

function draw(){
  //background (0);
  changeColor();
  controlColor();
  drawEllipse()

function changeColor(){

  if((mouseX < width/2) && (mouseY < height/2)){
    r ++;
    g ++;
    b --;
} else if((mouseX > width/2) && (mouseY < height/2)) {
    r --;
    g ++;
    b ++;
} else if ((mouseX < width/2) && (mouseY > height/2)){
    r ++;
    g --;
    b ++;
} else{
    r --;
    g --;
    b --;
}
}

function controlColor(){

  if ( r > 255){
    r = 255;
  } else if ( r < 0){
    r = 0;
  }

  if ( g > 255){
    g = 255;
  } else if ( g < 0){
    g = 0;
  }

  if ( b > 255){
    b = 255;
  } else if (255 < 0){
    b = 0;
  }

  if (keyIsPressed){
    background(0)
  }
  }

function drawEllipse(){

  //noFill();
  fill(b, r, g, 5);
  stroke(r, g, b, 30);
  ellipse(mouseX - 50, mouseY - 50, mouseX + 50, mouseY + 50);

  }

}
