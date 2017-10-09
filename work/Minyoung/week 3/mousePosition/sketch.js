function setup() {
  createCanvas(800, 800);
}

function draw() {

  var mouseSpeed = Math.abs (mouseX - pmouseX);
  stroke(255);
  strokeWeight(5);
  /* I'm drawing lines here.
  Hi! I'm Minyoung! */
  //line(mouseX, mouseY, pmouseX, pmouseY);

  //var myName = "Minyoung";
  if( mouseIsPressed) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if(keyIsPressed) {
    background (0);
  }

  /* noStroke();
  fill(mouseX);
  ellipse (width/2, height/2, mouseX, mouseY); */
}
