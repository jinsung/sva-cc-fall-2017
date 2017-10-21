var hueRand1;
var hueRand2;
var hueRand3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
};

function draw(){
  noStroke();

  if (mouseIsPressed){
    createBalloon();
    createConfetti();
    createTri();
  };

  if (hueRand1 > 360){
    hueRand1 = 0;
  };
  if (hueRand2 > 360){
    hueRand2 = 0;
  };
  if (hueRand3 > 360){
    hueRand3 = 0;
  };

  if (keyIsPressed){
    background(255);
  };
};

function createBalloon(){
  var hueRand1= random(255);

  var xPos = random(-200,200);
  var yPos = random(-200,200);
  var numOfLoop = 100;
  var circleSize = random(100);
  var randomB = random(50);

  for (var i = 0; i < numOfLoop; i++){
    fill(hueRand1, randomB, 100);
    ellipse(mouseX+xPos, mouseY+yPos, circleSize, circleSize);
  };
};

function createConfetti(){
  var hueRand2= random(255);

  var xRectPos = random(-200,200);
  var yRectPos = random(-200,200);
  var numOfLoop = 100;
  var rectSizeX = random(80);
  var rectSizeY = random(80);
  var randomB = random(50);

  for (var i = 0; i < numOfLoop; i++){
    fill(hueRand2, randomB, 100);
    rect(mouseX+xRectPos, mouseY+yRectPos, rectSizeX, rectSizeY);;
  };
};

function createTri(){
var hueRand3= random(255);

  var triRandom = random(100)
  var xTriPos1 = random(triRandom *-1, triRandom *+1)+ triRandom
  var yTriPos1 = random(triRandom *-1, triRandom *+1)+ triRandom
  var xTriPos2 = random(triRandom *-1, triRandom *+1)+ triRandom
  var yTriPos2 = random(triRandom *-1, triRandom *+1)+ triRandom
  var xTriPos3 = random(triRandom *-1, triRandom *+1)+ triRandom
  var yTriPos3 = random(triRandom *-1, triRandom *+1)+ triRandom

  var numOfLoop = 100;
  var randomB = random(50);

  for (var i = 0; i < numOfLoop; i++){
    fill(hueRand3, randomB, 100);
    triangle(mouseX+xTriPos1, mouseY+yTriPos1, mouseX+xTriPos2, mouseY+yTriPos2, mouseX+xTriPos3, mouseY+yTriPos3 );
  };
};
