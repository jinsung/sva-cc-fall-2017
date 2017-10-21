


function setup() {
  createCanvas(400, 400);

}



function draw() {
  var redColor = frameCount;
  var mouseSpeed = Math.abs( mouseX - pmouseY);
  stroke(1);
  strokeWeight(50);
//I am drawing line
 if (mouseIsPressed) {
  line(mouseX,mouseY,pmouseX, pmouseY);

}

  if (keyIsPressed) {
    background(255)
  }
  /*noStroke();
  fill(redColor,0,0);
  ellipse(width/2, height/2, mouseX, mouseY)

  redColor -= 0.01; */


}
