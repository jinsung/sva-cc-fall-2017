var ps1;
var ps2;
//background
var unit = 80;
var count;
var mods = [];
//sine wave
var xspacing = 16;
var w;
var theta = 50.0;
var amplitude = 75.0;
var period = 500.0;
var dx;
var yvalues;

var r;
var theta;
var theta_vel;
var theta_acc;

//distance
var target1X = 350;
var target1Y = 250;



function setup() {

  background(0);
//sin wave
   createCanvas(700, 500);
     w = width+16;
     dx = (TWO_PI / period) * xspacing ;
     yvalues = new Array(floor(w/xspacing));

      r= height * 0.45;
      theta = 0;
      theta_vel = 0;
      theta_acc = 0.00001;

//background
  var wideCount = width / unit;
  var highCount = height / unit;
  count = wideCount * highCount;

  var index = 0;
  for (var y = 0; y < highCount; y++) {
    for (var x = 0; x < wideCount; x++) {
      mods[index++] = new Module(x*unit, y*unit, unit/2, unit/2,
        random(0.05, 0.8), unit);
    }
  }
//particle
  ps1 = new ParticleSystem(310);
  ps2 = new ParticleSystem(310);
  ps3 = new ParticleSystem(310);
  //ps3 = new ParticleSystem(300);

  ps1.setup(createVector(width/1.5, height/1.5));
  ps2.setup(createVector(width/2.7, height/2.5));
    ps3.setup(createVector(width/2, height/2));
  //ps3.setup(createVector(width/2, height/2));

}

function draw() {
//background
  background(0);
    for (var i = 0; i < count; i++) {
      mods[i].update();
      mods[i].draw();
    }

//distance
    backgroundColor = getDistance(target1X, target1Y, mouseX, mouseY);
  //  background(backgroundColor-220);

    drawTarget(target1X, target1Y, 5, 80);

    drawTarget(mouseX, mouseY, 0, 0);


//sin wave
      calcWave();
      renderWave();

//particle
    fill(255);
    noStroke();
    ps1.update();
    ps1.display();

    fill(255);
    noStroke();
    ps2.update();
    ps2.display();

    fill(255);
    noStroke();
    ps3.update();
    ps3.display();

    //fill(255);
    //noStroke();
    //ps3.update();
    //ps3.display();

    //fill(255);
    //ellipse(width/2, height/2, 300,300);

//big ellipse
    translate(width/2, height/2);
  var x = r * cos(theta)/8 ;
  var y = r * sin(theta)/8;


  rectMode(CENTER);
  stroke(255);
  strokeWeight(backgroundColor-200);
  noFill();
  rect (0, 0, 650, 450);



  ellipseMode(CENTER);
  stroke(255);
  fill(0);
  strokeWeight(1);
  ellipse(x, y, 300, 300);

  theta_vel += theta_acc;
  theta += theta_vel;


}

function drawTarget(x, y, numOfCircles, targetSize, targetHue) {
  for (var i=numOfCircles; i>0; i--) {
    var step = i/numOfCircles; // range from 1 to 0.
    fill(0);
    ellipse(x, y, size, size );
  }
}

function getDistance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  var result = Math.sqrt(dx*dx + dy*dy);
  return result;
}
//background
function Module(_xOff, _yOff, _x, _y, _speed, _unit) {
  this.xOff = _xOff;
  this.yOff = _yOff;
  this.x = _x;
  this.y = _y;
  this.speed = _speed;
  this.unit = _unit;
  this.xDir = 1;
  this.yDir = 1;
}

//background
Module.prototype.update = function() {
  this.x = this.x + (this.speed * this.xDir);
  if (this.x >= this.unit || this.x <= 0) {
    this.xDir *= -1;
    this.x = this.x + (1 * this.xDir);
    this.y = this.y + (1 * this.yDir);
  }
  if (this.y >= this.unit || this.y <= 0) {
    this.yDir *= -1;
    this.y = this.y + (1 * this.yDir);
  }
}
//background
Module.prototype.draw = function() {

  fill(0);
  stroke(255);
  ellipse(this.xOff + this.x, this.yOff + this.y, mouseX/20, mouseY/20);
}

function calcWave() {
  theta += 0.05;

  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}


//sin wave
function renderWave() {
  noStroke();
  fill(255);
  for (var x = 0; x < yvalues.length; x++) {
    ellipse(x*xspacing, height/2+yvalues[x], mouseY/11, mouseX/11);
  }
}
