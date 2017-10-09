
  var x1 = 0;
  var x2 = 0;
  var y1 = 0;
  var y2 = 0;
  var r, g, b, a;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //setTimeout(movingLines, 10000);

}

function draw() {
  background(0);
  displayTime();
  animation();
  movingLines();
  //secondAnimation();
}

function displayTime(){

  noStroke();
  var s = second();
  var mil = millis();
  var min = minute();
  var h = hour();

  fill(255);

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

function movingLines(){
  r = 125;
  g = 125;
  b = 125;
  //a = 100;



  y1 = y1 + 1;
  if(y1 > height){
    y1 = 0;
  } else if (y1 > height/2){
    r = 255;
    g = 0;
    b = 0;
    //a = 100;
  }
  stroke(r, g, b);
  strokeWeight(1);
  line(0, y1, width, y1);


  y2 = y2 - 1;
  if(y2 < 0){
    y2 = height;
  }
  
  stroke(r, g, b);
  strokeWeight(1);
  line(0, y2, width, y2);



  //setTimeout(movingLines, 10000);

}
