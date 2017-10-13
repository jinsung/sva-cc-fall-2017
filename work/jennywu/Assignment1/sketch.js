var square0 = {
  x: 300,
  y: 300,
  w: 150,
  h: 150,
  op: 0
}

var square1 = {
  x: 300,
  y: 300,
  w: 100,
  h: 100,
  op: 0
}

var square2 = {
  x: 300,
  y: 300,
  w: 50,
  h: 50,
  op: 0
}

var square3 = {
  x: 300,
  y: 300,
  w: 25,
  h: 25,
  op: 0
}

var square4 = {
  x: 300,
  y: 300,
  w: 5,
  h: 5,
  op: 0
}

var col = {
  r : 0,
  g : 0,
  b : 0
}

function setup() {
  createCanvas (600,600,600);
  rectMode(RADIUS);
  noCursor();
}

function draw() {
  background (0);
  stroke(255);
  noFill();

  //background moving

  stroke(255, 255,255,25);
  rect(square0.x, square0.y, square0.w, square0.h);
  square0.w = square0.w + 0.5;
  square0.h = square0.h + 0.5;
  //square1.op = random(60);

  stroke(255, 255,255,30);
  rect(square1.x, square1.y, square1.w, square1.h);
  square1.w = square1.w + 0.4;
  square1.h = square1.h + 0.4;
  //square1.op = random(60);

  stroke(255, 255,255,40);
  rect(square2.x, square2.y, square2.w, square2.h);
  square2.w = square2.w + 0.3;
  square2.h = square2.h + 0.3;
  //square2.op = random(80);

  stroke(255, 255,255,50);
  rect(square3.x, square3.y, square3.w, square3.h);
  square3.w = square3.w + 0.2;
  square3.h = square3.h + 0.2;
  //square3.op = random(100);

  stroke(255, 255,255,60);
  rect(square4.x, square4.y, square4.w, square4.h);
  square4.w = square4.w + 0.1;
  square4.h = square4.h + 0.1;
  //square4.op = random(120);

//flys
frameRate(12);
if (frameCount <= 40) {
noStroke();
fill(255);
  var xPos = random(width);
  var yPos = random(height);
  var eSize = random(3);
rect(xPos,yPos,eSize,eSize)
}

//interaction
stroke(255);
line(mouseX, mouseY, pmouseX, mouseY);

if (mouseIsPressed) {
  for (var xxPos = 10; xxPos < 600; xxPos += 75){
      noStroke();
      fill(100);
      rect(xxPos, mouseY, 1, 1);
      for ( var yyPos = 10; yyPos < 600; yyPos += 75){
      rect(mouseX, yyPos, 1, 1);
      }
    }
  stroke(0);
  fill(255);
  rect(mouseX, mouseY, mouseX/4, mouseY/4);
}

if (keyIsPressed) {
  fill(0);
  rect(300, 300, 600, 600);
  noStroke();
  fill(col.r, col.g, col.b);
  ellipse(300, 300, 300, 300);
}
col.r = random(255);
col.g = random(255);
col.b = random(255);

//text
textSize(10);
fill (170);
noStroke();
text( "Assignment 01", 520, 590)
text("(" + mouseX + "." +  mouseY + "." + frameCount + ")", 10, 590);

}

/*

*/
