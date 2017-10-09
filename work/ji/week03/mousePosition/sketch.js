function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  var mouseSpeed = Math.abs(mouseX - pmouseX);
  stroke(255, 0, 0);
  strokeWeight(1);
  // I am drawing line here. :)

  if ( mouseIsPressed ) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if ( keyIsPressed ) {
    background (0);
  }

  // var myName = "ihavehairyknees"

  /*  noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY); */

}
