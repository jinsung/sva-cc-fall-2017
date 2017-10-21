var xPos = 200;
var yPos = 200;

function setup() {
  createCanvas(400, 400);
  console.log("something")
}


function draw() {



  background(200);
  var sizeofcircle=100;
  var redcolor = frameCount;
  xPos -= .1;
  yPos -= .5;

  fill(redcolor,0,0);
  ellipse(mouseX,mouseY,sizeofcircle,sizeofcircle);


  sizeofcircle = sizeofcircle - 20;
  redcolor += 20;
  fill(redcolor,0,0);
ellipse(xPos,yPos,sizeofcircle,sizeofcircle);


sizeofcircle = sizeofcircle - 20;
redcolor += 20;
fill(redcolor,0,0);
ellipse(xPos,yPos,sizeofcircle,sizeofcircle);


sizeofcircle = sizeofcircle - 20;
redcolor += 20;
fill(redcolor,0,0);
ellipse(xPos,yPos,sizeofcircle,sizeofcircle);


sizeofcircle = sizeofcircle - 20;
redcolor += 20;
fill(redcolor,0,0);
ellipse(xPos,yPos,sizeofcircle,sizeofcircle);


console.log("xPos:" + xPos);

}
