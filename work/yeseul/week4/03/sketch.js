



function setup() {
  createCanvas(400, 400);
  colorMode (HSB);
}

function draw() {

  var greenColor = 255;


  background(200);
  fill(0,greenColor,0);

  var myVar = 0;
  var numOfLoop = 300;
  var yeseul = 90;
  for (var i =0; i < numOfLoop; i++) {

  var theta = i * (Math.PI *2 / numOfLoop) * (mouseY * 0.1);
  var radius = mouseX * 0.01 *i;

  var xPos = Math.cos(theta) * radius + width/2;
  var yPos = Math.sin(theta) * radius + height/2;

  fill(30 + i *1, 200 ,80);
  ellipse(xPos,yPos,yeseul,yeseul);
  }

}
