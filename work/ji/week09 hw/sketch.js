var myPenises = [];

function setup() {
  createCanvas(500, 500);

  var numOfPenises = 4;
  for (var y = 0; y < numOfPenises; y++) {
    var gap = height/numOfPenises;
    var newYPos = gap/2 + y * gap;

    for (var x = 0; x < numOfPenises; x++) {
      var xGap = width/numOfPenises;
      var newXPos = xGap/2 + x * xGap;
      var newI = y * numOfPenises + x;
      myPenises[newI] = new Penis( newXPos, newYPos, gap/2 );
    }
  }
}

function draw() {
  background(230);
  if (mouseIsPressed) {
    background(random(255), random(255), random(255), 180)
  }
  fill(255, 173, 96);
  noStroke();
  for(var i = 0; i < myPenises.length; i++) {
    myPenises[i].draw();
  }
}
