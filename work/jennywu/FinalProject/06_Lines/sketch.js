var myLine1;
var myLine2;
var myLine3;
var myLine4;
var myLine5;

function setup() {

  createCanvas(1920, 1080);
  background(0);
  myLine1 = new Line(0, (1/5) * height);
  myLine2 = new Line((1/5) * height, (2/5) * height);
  myLine3 = new Line((2/5) * height, (3/5) * height);
  myLine4 = new Line((3/5) * height, (4/5) * height);
  myLine5 = new Line((4/5) * height, height);

}


function draw() {

    myLine1.draw(random(1,5));
    myLine2.draw(random(1,1));
    myLine3.draw(random(1,2));
    myLine4.draw(random(1,3));
    myLine5.draw(random(1,5));

}
