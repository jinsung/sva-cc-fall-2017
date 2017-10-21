var myArrows = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(var i = 0; i < width; i ++){
      myArrows[i] = new Arrow(5 * i, 100);
  }
}

function draw() {
  background(255);
  fill(0);
  stroke(0);

  for(var i = 0; i < myArrows.length; i ++){
    myArrows[i].draw();

  }
}
