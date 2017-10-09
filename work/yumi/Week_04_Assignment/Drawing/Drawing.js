var myHue = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);

}

function draw() {
  colorMode (HSB);
  var mouseSpeed = Math.abs(mouseX - pmouseX);

  myHue += 1;
  stroke(myHue, 100, 100);

  strokeWeight(1);

  if (myHue > 360){
    myHue = 0;
  }


  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseY+50, mouseX+50, mouseY+50, mouseX + 50);
    line(mouseY + 20, mouseX + 20, mouseY + 20, mouseY + 40);

  }

  //noStroke();
  //fill(myHue, 100, 100);
  //alpha(5);

  //if (mouseIsPressed){
    //line(mouseX+50, mouseY+50, mouseX+50, mouseY + 50);

  //}
  if (keyIsPressed){
    background(0)
    //Clear background
  }


  /*
  noStroke();
  fill(mouseX);
  ellipse(width/2, height/2, mouseX, mouseY);
  */
}



/*
comment multiline
*/
