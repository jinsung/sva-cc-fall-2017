var myArrows = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var numOfArrows = 25;
  for(var y = 0; y < numOfArrows; y ++){
    var gap = height/numOfArrows;
    var newYPos = gap/2 + y * gap;

    for(var x = 0; x < numOfArrows; x ++){
      var xGap = width/numOfArrows;
      var newXPos = xGap/2 + x * xGap;
      var newI = y * numOfArrows + x;
      myArrows[newI] = new Arrow(newXPos, newYPos, gap/2);
    }
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
