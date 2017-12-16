var circle = []

function setup(){
createCanvas(800, 800);
background(0);
noStroke();
colorMode(HSB);
x=width/5
y=height/5
for(var i=0;i<80; i++){
  circle.push(new Circle())
  
}

}
function draw(){
  background(0,0.05)
  for (var i=0; i<circle.length;i++){
    circle[i].move()
    circle[i].draw()
  };

}

function Circle(){
  this.color=Math.random()*360
  this.x = Math.random()
  this.y= Math. random()
  this.z =0
  this.nx = Math.random()*100
  this.ny = Math.random()*100
  this.nz = Math. random()*100
  this.cal = Math. random()*0.12+0.004
  this.move = function(){

    this.x += noise(this.nx)*6-3
    this.x = ((this.x%width)+width)%width
    this.x +=(mouseX -this.x)/180
    this.y += noise(this.ny)*6-3
    this.y = ((this.y%height)+height)%height
    this.y +=(mouseY -this.y)/180
    this.z = map(noise(this.nz),0,1,20,50);
    this.nx += this.cal;
    this.ny += this.cal;
    this.nz += this.cal;

  }


this.draw = function(){
  fill((frameCount +this.color)%360,50,50,0.6);
  ellipse(this.x,this.y,this.z/3,this.z/3)
}
}
