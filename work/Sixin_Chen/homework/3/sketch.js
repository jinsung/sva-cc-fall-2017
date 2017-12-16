var letters = [];
var word = "Merry Christmas to Everyone :)";
var stars = [];
var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i<80; i++){
    stars[i] = new Star();
    letters.push(new Letters());
  }
}
function draw() {
  speed = map(mouseX, 0, width,0, 50);
  background(0);
  for (var i=0; i<1; i++){
    letters[i].display();
    letters[i].move();
  }
  translate(width /2, height/2);
  for (var i = 0; i<stars.length; i++){
    stars[i].update();
    stars[i].show();
  }

}
function Star(){
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random (width);
  this.pz = this.z;

  this.update = function(){
    this.z = this.z - speed;
    if(this.z < 3){
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz =this.z;
    }
  }
  this. show = function(){
    fill(255);
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(255);
    line(px, py, sx, sy);
  }


}
function Letters() {
  this.x = random(windowWidth);
  this.y = random(windowHeight);
  this.speed = 1;
  this.col = color(255,300);

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };


  this.display = function() {
    fill(255);
    text(word, this.x/2, this.y/2, 100, 300);
    noStroke();
  };
  this.clicked = function(){
    this.col = color(HSB);
  }
}
