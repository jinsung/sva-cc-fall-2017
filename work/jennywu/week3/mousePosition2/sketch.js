var colR = 100;

function setup() {
createCanvas(400, 400);
background(0);
}

function draw() {

/*var mouseSpeed = Math.abs(mouseX - mouseY);
strokeWeight(mouseSpeed);
strokeWeight(random(1,5));
*/
stroke(colR,0,0);
line(50,50,mouseX,mouseY);
//colR=

if (mouseIsPressed) {
  stroke(255);
  line(mouseX, mouseY, pmouseX, mouseY);
}

if (keyIsPressed) {
  background(0);
}

}

/*
to comment many lines
*/
