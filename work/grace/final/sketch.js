var leftEye, rightEye;
var littleDudeHead;
var littleDudeHand;
var littleDudeBlink;



function setup() {
  createCanvas(500, 500);



  noStroke();
  leftEye = new LittleDudeEye(175, 380, 120);
  rightEye = new LittleDudeEye(400, 380, 120);
  hand = new LittleDudeHand;
  blink = new LittleDudeBlink;

}

function draw() {

  if (mouseIsPressed)
  background(173, 244, 66);
  else
  background(80);

  var littleDudeHead;
    rect(30, 300, 600, 400, 100);
    fill(244, 95, 65);
    stroke(300);
    strokeWeight(10);


  rightEye.update(mouseX, mouseY);
  leftEye.update(mouseX, mouseY);
  rightEye.display();
  leftEye.display();
  blink.update();
  blink.display();
  hand.draw();






}
