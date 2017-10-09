var xPos = 350;
var yPos = 200;

function setup() {
createCanvas(400, 400);
}

function draw() {
background(200);

var sizeC = 200;
var colR = frameCount;

//ellipse
noStroke();
fill(colR,0,0);
ellipse(xPos,yPos,sizeC,sizeC);

//ellipse
sizeC = sizeC-20;
colR -= 40;
fill(colR,0,0);
ellipse(xPos,yPos,sizeC,sizeC);

//ellipse
sizeC = sizeC-20;
colR -= 80;
fill(colR,0,0);
ellipse(xPos,yPos,sizeC,sizeC);

//ellipse
sizeC = sizeC-20;
colR -= 80;
fill(colR,0,0);
ellipse(xPos,yPos,sizeC,sizeC);

sizeC +=5;
xPos -= 1;
console.log(frameCount);
}

//function mousePressed
