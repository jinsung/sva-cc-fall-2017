

function setup() {
  createCanvas(400, 400);
}

function draw() {
  var mouseSpeed = Math.abs(mouseX - pmouseX)
  stroke(100);
  strokeWeight(1);

  if ( mouseIsPressed ){
   line(mouseX, mouseY, pmouseX, pmouseY);
  }
  if ( keyIsPressed ){
    background (255);
  }
  /*noStroke();  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY);*/
}
