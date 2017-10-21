//var col = "#000cff";

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  //stroke(0);
  strokeWeight(1);


  var x = 0;

  while (x < mouseX){
    line(x, 0, x, height);
    x = x +30;

    stroke(random (0, 255), random (0, 255), random (0, 255));
  }



}
