
var myHue = 0;
var speedX = 1;
var speedY = 10;
var circleX = 0;
var circleY = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
};

function draw(){
  var hueRandomnumber= random(255);
  myHue +=4;

  fill(myHue, 100, 100);
  noStroke();

  if (mouseIsPressed){
    createBalloon();
  };

  if (myHue > 360) {
    myHue=0;
  };

  if (keyIsPressed){
    background(255);
  };
}

function createBalloon(){
  var numOfLoop = 100;
  var circleSize = 5 + random(100);

  for (var i = 0; i < numOfLoop; i++){
    var theta = i * ((Math.PI*2)/ numOfLoop) * (mouseY*0.1);
    var radius = 0.01 * i * mouseX;
    var xPos = Math.cos(theta) * radius
    var yPos = Math.sin(theta) * radius

    noStroke();
    fill (myHue, 100, 100);
    ellipse(mouseX, mouseY, circleSize, circleSize);
  };

  if (circleX > width || circleX < 0 ){
  speedX = speedX * -1;
  }
  if (circleY > height || circleY < 0){
    speedY = speedY * -1;
  }

  circleX = circleX + speedX;
  circleY = circleY + speedY;
}
//
// var myHue = 0;
// var circleX = 0;
// var circleY = 100;
// var speedX = 1;
// var speedY = 0.5;
//
// function draw() {
//
//     colorMode(HSB);
//     var xPos = random(100)-50;
//     var yPos = random(100)-50;
//
//     var circleSize = 5 + random(100);
//     var hueRandomnumber= random(255);
//     myHue +=4;
//
//     fill(myHue, 100, 100);
//     stroke(0);
//     strokeWeight(1);
//     noStroke();
//     ellipse(circleX, circleY, 30, 30);
//
//     if (circleX > width || circleX < 0 ){
//     speedX = speedX * -1;
//     }
//     if (circleY > height || circleY < 0){
//       speedY = speedY * -1;
//     }
//
//   if (myHue > 360) {
//     myHue=0;
//   }
//
//   if (mouseIsPressed){
//     noStroke();
//     ellipse(mouseX+xPos, mouseY+yPos, circleSize, circleSize);
//     }
//
//   if (keyIsPressed){
//     background(255);
//   }
//   circleX = circleX + speedX;
//   circleY = circleY - speedY;
// }
