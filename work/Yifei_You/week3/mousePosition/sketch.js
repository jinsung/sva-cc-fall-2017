
function setup() {
  createCanvas(400, 400);
  console.log("whatever")
}
 function draw() {

  var mouseSpeed = Math.abs(mouseX - pmouseX);
  stroke(100,100);
  strokeWeight(1);


  if (mouseIsPressed) {
      line(mouseX,mouseY,pmouseX,pmouseY);
  }
  if (keyIsPressed) {
    background(255);
  }
 }
