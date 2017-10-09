
function setup () {
  createCanvas(800,800);
  noStroke();
  ellipseMode(RADIUS);
}
function draw(){
if(mouseIsPressed){
  drawtriangle();
 }
if(keyIsPressed){
  drawshape();
}
writetext();
}

function drawtriangle() {
  background(255,255,255);
  from = color(255, 0 ,0, 0.05 * 255);
  for (var num_shapes = 0; num_shapes <= 70; num_shapes++) {
    fill(from);

    triangle(random(-20, 800), random(height),
         random(-20, 800), random(height),
         random(-20, 800), random(height));
       }
 frameRate(10);
}

function drawshape() {
  from = color(0, 0 ,255, 0.05 * 255);
  for (var i = 0; i < 10; i++) {
    fill(from);
    ellipse(mouseX,mouseY,30,30);
       }
 frameRate(10);
}

function writetext(){
  s = "Press mouse for drawing triangle, and press keyboard for drawing blue ellipse.";
fill(50);
text(s, 10, 200);
}
