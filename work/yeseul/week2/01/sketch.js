function setup() {
  createCanvas(400, 400);

}

function draw() {

noStroke();
background(200)
  fill(0,0,250,150);

  ellipseMode(CORNERS);
    stroke(0);
    ellipse(0, 0, 100, 100);
    rectMode(CENTER)

    stroke(0);
    fill(0,255,0,100)
    rect(width/2,height/2,150,100);

  }
