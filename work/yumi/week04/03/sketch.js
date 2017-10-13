function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

}

function draw() {
  background(200);
  noStroke();


  var redColor = 255;
  var numOfLoop = 300;
  var sizeOfCircle = 40;

  for (var i = 0; i < numOfLoop; i ++){
    var theta = i *( Math.PI * 2 / numOfLoop * (mouseY * 0.3));
    //2 PI / 30, i value changes, theta is going to change based on segment of loop
    var radius = 0.01 * i * mouseX;

    var xPos = Math.cos(theta)* radius + width/2;
    var yPos = Math.sin(theta) * radius + height/2;

    sizeOfCircle -= 2;
    fill(30 + i * 1, 60, 80);
    ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  }
  /*
  for (var sizeOfCircle =100; sizeOfCircle > 0; sizeOfCircle = sizeOfCircle - 10){
    sizeOfCircle -= 20;
    fill(redColor, 0, 0);
    ellipse(xPos, yPos, sizeOfCircle, sizeOfCircle);

  }
*/

}
