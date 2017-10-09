function setup() {
  createCanvas(400, 400);


}

function draw() {
  //background(200);
  var mouseSpeed = Math.abs(mouseX - pmouseX);

  stroke(0);
  strokeWeight(1);


  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX+30, mouseY+30, pmouseX, pmouseY);

  }

  if (keyIsPressed){
    background(255)
    //Clear background
  }
  /*noStroke();
  fill(mouseX);
  ellipse(width/2, height/2, mouseX, mouseY);
  */
}



/*
comment multiline
*/
