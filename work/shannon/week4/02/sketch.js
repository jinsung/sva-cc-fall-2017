var xPos = 300;
var yPos = 300;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

 var blueColor = 255;
 fill(0, 0, blueColor);


//i++ = i=i+1
// for (var sizeOfCicle = 300; sizeOfCicle > 0; sizeOfCicle = sizeOfCicle - 10){
for (var i=0; i<50; i++){
   blueColor -= 5;
   fill(0, 0, blueColor);
   var circleSize = width - i*10
   ellipse(xPos, yPos, circleSize, circleSize)
 }

}
