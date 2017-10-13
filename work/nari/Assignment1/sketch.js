
var h = 192;
var s = 0;
var b = 95;

//rectangle1 position
var xPos1 = 240;
var yPos1 = 60;

//rectangle2 position
var xPos2 = 150;
var yPos2 = 140;

//rectangle3 position
var xPos3 = 70;
var yPos3 = 500;

//ellipse1 position
var xPos4 = 340;
var yPos4 = 180;

//ellipse2 scale
var xScale = 40;
var yScale = xScale;

//ellipse3 position
var xPos6 = 520;
var yPos6 = 330;

//ellipse3 scale
var xScale2 = 120;
var yScale2 = 120;

//triangle2 color
var triangleH = 31;
var triangleS = 62;
var triangleB = 72;



function setup() {
  createCanvas(600,600);
  colorMode(HSB);
  background (h,s,b);

}



function draw() {
  background (h,s,b);

  //rectangle1
  fill(233, 76, 67);
  noStroke();
  rect (xPos1, yPos1, 300, 400);

  //rectangle2
  fill(52, 100, 100);
  noStroke();
  rect (xPos2, yPos2, 140, 140);

  //rectangle3
  fill(171, 100, 76);
  noStroke();
  rect (xPos3, yPos3, 340, 30);

  //ellipse1
  fill(192, 70, 96);
  noStroke();
  ellipse (xPos4, yPos4, 40, 40);

  //ellipse2
  fill(0);
  noStroke();
  ellipse (120, 380, xScale, yScale);

  //ellipse3
  fill(353, 69, 97);
  noStroke();
  ellipse (xPos6, yPos6, xScale2, xScale2);

  //triangle1
  fill(3, 37, 87);
  noStroke();
  triangle(30, 75, 58, 20, 86, 75);

  //triangle2
  fill(triangleH, triangleS, triangleB);
  noStroke();
  triangle(380, 400, 260, 550, 380, 550);


  if (mouseIsPressed) {
    //random background
    h = random (70, 230);
    s = random (49, 80);
    b = 100;
    background (h, s, b);

//

    //rectangle1 new position
    xPos1 = random (305, 152);
    yPos1 = random (50, 80);

    //rectangle2 new position
    xPos2 = xPos1 + random (-60, 80);
    yPos2 = yPos1 + random (40, 130);

    //rectangle3 new position
    xPos3 = random (20, 100);
    yPos3 = random (200, 480);

    //ellipse1 new position
    xPos4 = 340 + random (-10, 100);
    yPos4 = 180;

    //ellipse2 new size
    xScale = random (20,60);
    yScale = xScale;

    //ellipse3 new position
      if (xScale >= 30) {
        xPos6 = 520;
        yPos6 = 330;
        xScale2 = 120;
        yScale2 = 120;
      } else {
        xPos6 = 140;
        yPos6 = 130;
        xScale2 = 20;
        yScale2 = xScale2;
      }

    //triangle2 new color
    triangleH = random(56, 10);
    triangleS = random(70, 90);


  } else {
    h = 192;
    s = 0;
    b = 95;
  }


  if (keyIsPressed){
    for (var x = 0; x <= width; x += 80){
      stroke (10, 0, 80);
      strokeWeight(1);
      noFill();
      ellipse(width/2, height/2, x, x);
    }

  }

}
