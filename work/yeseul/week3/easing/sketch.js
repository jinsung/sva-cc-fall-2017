

var CircleX;
var CircleY;
var targetX;
var targetY;

function setup() {
  createCanvas(600, 600);
  CircleX = width / 2;
  CircleY = height / 2;
  targetX = CircleX;
  targetY = CircleY;
}

var mhue=0;

function draw() {
   background (0);
   var circleSize = 50;
   noStroke ();
   fill (0,250,0)

   if (mouseIsPressed) {
     targetX = mouseX;
     targetY = mouseY;
   }

   var xDiff = targetX - CircleX;
   var yDiff = targetY - CircleY;
   var speed = 1.3;

   CircleX = CircleX + xDiff * speed;
   CircleY = CircleY + yDiff * speed;

   ellipse(CircleX, CircleY, circleSize, circleSize );

 }
