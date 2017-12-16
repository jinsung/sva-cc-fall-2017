var myBall;
function setup() {
  createCanvas(500, 500);
  smooth();
  myBall = new Ball(10, 20, 10, 2, 2.3);

}

function draw() {
  background(200);
  myBall.move();
  myBall.bounce(width, height);
  myBall.draw();
}
