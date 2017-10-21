var circleX = 0;
var circleY = 0;
var speedX = 1;
var speedY = 2;

function setup() {
createCanvas(300, 400);
}

function draw() {
  background(100);

  drawCircle();
  moveCircle();
  checkHit();

}
function drawCircle(){
  fill(255);
  ellipse(circleX,circleY, 30, 30);
}

function moveCircle(){
  circleX = circleX + speedX
  circleY = circleY + speedY
}

function checkHit(){
  if(circleX > width || circleX <0){
    speedX = speedX * -1;
  }

  if(circleY > height || circleY <0){
    speedY = speedY * -1;
  }
}
