var myConfettis = [];

var hueRand;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  noStroke();
  var myConfettiLoc = createVector(10, 10);

  for (var i = 0; i< 10; i++){
    myConfettis[i] = new Confetti(myconfettiLoc,50);
  };
}

function draw(){

  if(mouseIsPressed){
  for (var i = 0; i < myConfettis.length; i++){
    myConfettis[i].createBalloon();
    myConfettis[i].createConfetti();
    myConfettis[i].update();
  };
};


  if (hueRand > 360){
    hueRand = 0;
  };

  if (keyIsPressed){
    background(255);
  };

}
