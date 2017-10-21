function setup() {
  createCanvas(600, 600);
  colorMode(HSB);
}

function draw() {
  background(255);

 var myVar = 0;
 var numOfLoop = 100;
 var circleSize = 40;

 for (var i = 0 ; i < numOfLoop; i++ ){
   var theta = i * ((Math.PI*2)/ numOfLoop) * (mouseY*0.1);
   var radius = 0.01 * i * mouseX;
   var xPos = Math.cos(theta) * radius + width/2;
   var yPos = Math.sin(theta) * radius + height/2;

   noStroke();
   fill(200 + i*1, 100, 100);
   ellipse(xPos, yPos, circleSize, circleSize)
 }

}
