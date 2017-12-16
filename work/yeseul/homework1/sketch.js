function setup() {
  createCanvas(500, 800);

}

var mhue = 0
var circleX=0;
var circleY=70;
var speedX = 3;
var speedY = 2;

function draw() {

  colorMode (HSB);
  var circleSize = random(80) + 10;
  mhue += 4;


  if (mhue > 360) {
    mhue = 0;
  }

  ellipse (circleX, circleY, 10,10);


  if (circleX > width || circleX< 0) {
    speedX = speedX * -1 ;
  }

  circleX = circleX+ speedX;

  if (circleY > height || circleY< 0) {
    speedY = speedY * -1 ;
  }

  circleY = circleY + speedY;

  if (keyIsPressed) {
  background(255)}

  if (mouseIsPressed){
    fill (mhue,100,100)
    noStroke()
    ellipse (circleX, circleY, circleSize ,circleSize);
  }
}
