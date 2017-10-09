
function setup() {
  createCanvas(1000, 1000);

}


function draw() {


  var mouseSpeed = Math.abs(mouseX - pmouseX);
  stroke(100);
  strokeWeight(1);

if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY)
  }

if (keyIsPressed){
  background(255);
}

}
