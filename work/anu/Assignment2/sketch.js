// var bubble;
//
// function setup() {
//   createCanvas(600, 600);
//   bubble = new Bubble();
//   bubble.setup(200, 300, 50, 2, 1.6);
// }
//
// function draw () {
//   background(0);
//   fill(255);
//   noStroke();
//   bubble.draw();
//   bubble.move();
//   bubble.bounce(width, height);
//
//   //bubble.ascend();
//   //bubble.top();
// }
var rectX = 0;
var rectY = 100;
var bubble;

function setup() {
  createCanvas(1000, 600);
  bubble = new BubbleSystem();
  bubble.setup();
}

function draw() {
  background(0);
  rectMode(CENTER);
  fill(255);
  strokeWeight(0.3);
  stroke(250);
  rect(rectX, rectY, 5, 5);
  if (mouseIsPressed) {
    bubble.addBubble(mouseX, mouseY, 10);
    background(204, 0, 0);
  }
  var myVar = 0;
    var numOfLoop = 100;
    var rectSize = 1;
    for(var i = 0; i < numOfLoop; i++) {
      var theta = i * ((Math.PI * 2) / numOfLoop) * (mouseY * 0.1)
      var radius = 0.01 * i * mouseX;

      var xPos = Math.cos(theta) * radius + width/2;
      var yPos = Math.sin(theta) * radius + height/2;

      rect(xPos, yPos, rectSize, rectSize);
    }
  noStroke();  
  bubble.draw();
}
