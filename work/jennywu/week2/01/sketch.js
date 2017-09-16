function setup() {
  createCanvas(400, 400);
  ellipse(width/2, height/2, 50, 50);
  background(0,0,0);


}

function draw() {
  fill(255,255,18,60);
  noStroke();
  ellipse(width/2, height/2, mouseX, mouseY);
  fill(255,2255,255)
  rectMode(CENTER)
  //rect(width/2, height/2,155,155)

  //triangle(30, 75, 58, 20, 86, 75);


  console.log ("jenny"+mouseX)


}
