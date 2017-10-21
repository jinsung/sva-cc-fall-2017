function setup() {
  createCanvas(400, 400);
}

function draw() {

  var mouseSpeed = Math.abs(mouseX - pmouseX);
  stroke(100);
  strokeWeight(1);
  //line(mouseX, mouseY, pmouseX, pmouseY);

  /* noStroke();
  fill(mouseX);
  ellipse(width/2, height/2, mouseX, mouseY);*/
  //on the last part - mouseX and mouseY work as a size substitude;

  if (mouseIsPressed) {
  line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (keyIsPressed) {
    background (255);
  }

}
