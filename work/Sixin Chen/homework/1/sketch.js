var barWidth = 5;
var lastBar = -1;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB, height, height, height);
  background(0);
  frameRate(30);
  noStroke();
}
function draw (){
  var whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    var barX = whichBar * barWidth;
    fill(mouseY, height, height);
    triangle(barX, mouseY/3, barWidth, mouseY/5, mouseX, mouseY);
    lastBar = whichBar;

    var x = 0;
    for (var x = 0; x <= width; x = x +40){
      fill(HSB, width, width, width);
      ellipse(x, 200, 15, 15);
    }
  }



}
