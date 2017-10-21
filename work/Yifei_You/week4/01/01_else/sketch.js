
function setup() {
  createCanvas(300, 300);}

function draw(){
  var colorss=255
  if( mouseX > 300){
    colorss = 0;
  } else if(mouseX > 290){
    colorss = 10;
  }
  else if(mouseX > 290){
    colorss = 20;
  }
  else if(mouseX > 280){
    colorss = 30;
  }
  else if(mouseX > 270){
    colorss = 40;
  }
  else if(mouseX > 260){
    colorss = 50;
  }
  else if(mouseX > 250){
    colorss = 60;
  }
  else if(mouseX > 240){
    colorss = 70;
  }
  else if(mouseX > 230){
    colorss = 80;
  }
  else if(mouseX > 220){
    colorss = 90;
  }
  else if(mouseX > 200){
    colorss = 100;
  }
  else if(mouseX > 100){
    colorss = 0;}
  else if(mouseX > 90){
      colorss = 10;
  }
  else if(mouseX > 90){
      colorss = 10;
  }
  else if(mouseX > 80){
      colorss = 20;
  }
  else if(mouseX > 70){
      colorss = 30;
  }
  else if(mouseX > 60){
      colorss = 40;
  }
   background(colorss);
  fill(255);
   rect(100,0,100,height-1);
}
