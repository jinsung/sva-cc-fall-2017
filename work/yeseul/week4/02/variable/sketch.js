var xPos = 200;
var yPos = 200;



function setup() {
  createCanvas(400, 400);

}

function draw() {

  var redColor = 255;


  background(200);
  fill(redColor,0,0);

  //for (var yeseul = 100; yeseul > 0; yeseul=yeseul-10) {
  for (var i =0; i < 100; i++) {
  redColor -= 2;
  fill(redColor,0,0);
  var yeseul = width - i*3;
  ellipse(xPos,yPos,yeseul,yeseul);
  }

}
