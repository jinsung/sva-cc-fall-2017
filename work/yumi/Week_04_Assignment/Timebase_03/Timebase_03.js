  var y1 = 0;
  var y2 = 0;
  var y3 = 0;
  var y4 = 0;
  var y5 = 0;
  var y6 = 0;
  var y7 = 0;
  var y8 = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //setTimeout(movingLines, 10000);
  background(0);
  setTimeout(movingLines_02, 1000);
  setTimeout(movingLines_03, 850);
  setTimeout(movingLines_04, 650);
}

function draw() {

  //displayTime();
  animation();
  movingLines_01();
  movingLines_02();
  movingLines_03();
  movingLines_04();
  //secondAnimation();
}

function displayTime(){

  noStroke();
  var s = second();
  var mil = millis();
  var min = minute();
  var h = hour();

  fill(0);

  text("\n" + h, 50, 50);
  text ("\n" + min, 50, 75);
  text ("\n" + s, 50, 100);
  text("\n" + mil, 50, 125);

}

function animation(){

  stroke(random (0, 255), random (0, 255), random (0, 255));
  strokeWeight(1);

  var s = second();
  line(s * width/61, 0, s * width/61, height);

}

function secondAnimation(){
  stroke(random (0, 255), random (0, 255), random (0, 255));
  strokeWeight(1);

  var s = second();
  line(s * width/121, 0, s * width/121, height);

}

function movingLines_01(){

  stroke(0);
  strokeWeight(1);

  y1 = y1 + 1;
  if(y1 > height){
    y1 = 0;
    }
    line(0, y1, width/4, y1);

  y2 = y2 - 1;
  if(y2 < 0){
    y2 = height;
    }
  line(0, y2, width/4, y2);


  //setTimeout(movingLines, 10000);

}

function movingLines_02(){

  y3 = y3 + 1;
  if(y3 > height){
      y3 = 0;
    }
    line(width/4, y3, width/2, y3);

  y4 = y4 - 1;
  if(y4 < 0){
      y4 = height;
    }
    line(width/4, y4, width/2, y4);

  setTimeout(movingLines_02, 1000);
}

function movingLines_03(){

  y5 = y5 + 1;
  if(y5 > height){
    y5 = 0;
    }
    line(width/2, y5, (width/2 + width/4), y5);

  y6 = y6 - 1;
  if(y6 < 0){
    y6 = height;
    }
    line(width/2, y6, (width/2 + width/4), y6);

  setTimeout(movingLines_03, 850);
}

function movingLines_04(){

  y7 = y7 + 1;
  if(y7 > height){
      y7 = 0;
    }
    line((width/2 + width/4), y7, width, y7);

  y8 = y8 - 1;
  if(y8 < 0){
      y8 = height;
    }
    line((width/2 + width/4), y8, width, y8);

  setTimeout(movingLines_04, 650);
}
