

function setup() {
  createCanvas(600, 400);
  circleX = width/2;
  circleY = height/2;
  targetX = circleX;
  targetY = circleY;
  var circleX;
  var circleY;
  var targetX;
  var targetY;
}

 function draw() {
   background(200);

   var circleSize = 50;


   var myColor = hexToRgb("FF0000");
   fill (myColor.r,myColor.g, myColor.b); 

   if (mouseIsPressed) {
     targetX = mouseX;
     targetY = mouseY;
   }
   var xDiff = targetX - circleX;
   var yDiff = targetY - circleY;
   var speed = 0.13;

   circleX = circleX + xDiff * speed;
   circleY = circleY + yDiff * speed;

    ellipse(circleX, circleY, circleSize, circleSize);
 }
