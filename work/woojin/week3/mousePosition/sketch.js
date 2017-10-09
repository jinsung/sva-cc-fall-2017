function setup() {
  createCanvas(400, 400);
}



function draw() {

var mouseSpeed = Math.abs ( mouseX - pmouseX );
stroke(100, 100);
strokeWeight(1);

if ( keyIsPressed ) {
line(mouseX, mouseY, pmouseX, pmouseY);
}

if ( mouseIsPressed ) {
  background(255);
}



/* noStroke();
fill(mouseX);
ellipse (width/2, height/2, mouseX, mouseY); */


}
