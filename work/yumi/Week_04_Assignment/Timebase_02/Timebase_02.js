function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  setTimeout(refresh, 4000);

}

function draw() {
  //displayTime();
  //grid();
  animation();
}

function displayTime(){
  //background(0);
  noStroke();
  var s = second();
  //var mil = millis();
  //var min = minute();
  //var h = hour();

  fill(255);

  //text("\n" + h, 50, 50);
  //text ("\n" + min, 50, 75);
  text ("\n" + s, 50, 50);
  //text("\n" + mil, 50, 125);

}

function animation(){

  stroke(random (0, 255), random (0, 255), random (0, 255));
  strokeWeight(1);

  var s = second();
  line(s * width/61, 0, s * width/61, height);

}

function refresh(){
  background(0);
  setTimeout(refresh, 4000);
}
