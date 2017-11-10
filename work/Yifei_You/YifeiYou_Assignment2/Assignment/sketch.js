var newsnow;
var img;
var shape;
var SCENE_W = 1880;
var SCENE_H = 1000;

function setup() {
  createCanvas(1980, 1080);
  newsnow = [];

}


function draw() {
  background(51);

  camera.on();
  camera.zoom = 1.01;
  console.log(camera);
  camera.position.x = mouseX;
  camera.position.y = mouseY;
  if(mouseX < 0)
    camera.position.x = 0;
  if(mouseY < 0)
    camera.position.y = 0;
  if(mouseX > SCENE_W)
   camera.position.x = SCENE_W;
 if(mouseY > SCENE_H)
   camera.position.y = SCENE_H;
   stroke(255,255,100);
   fill(255,255,100,150);
   ellipse(2000,-400,300,300);
  fill(255);
  fill(160,160,160,160);
  noStroke();
  rect(-1000,200,500,1500);
  rect(-400,400,400,1000);
  rect(0,540,300,600);
  rect(1720,50,20,1500);
  rect(1680,150,100,1500);
  rect(1630,250,200,1500);
  rect(1580,350,300,1500);
  rect(500,540,100,1000);
  rect(300,800,3000,1000);
  rect(2800,150,100,1500);
  rect(2060,250,200,1500);
  rect(2260,350,300,1500);

  fill(100,100,100,100);
  rect(700,700,200,1000);
  rect(0,650,200,800);
  rect(200,750,150,800);
  rect(1780,550,150,800);
  rect(1180,350,180,800);
  rect(-500,550,200,1000);
  rect

  fill(80,80,80,180);
  rect(1080,550,150,800);
  rect(80,750,150,600);
  rect(300,850,550,600);
  rect(1000,950,550,600);
  rect(1500,650,200,600);

  fill(30,30,30,180);
  rect(720,950,400,800);
  rect(500,965,200,800);
  rect(0,975,400,800);
  rect(1650,850,400,800);

  for(i = 0; i < newsnow.length; i++) {
    newsnow[i].run();
    newsnow[i].addParticle();
  }
  if ( newsnow.length ==0 ){
    fill(255,255,255);
    textAlign(CENTER);
    textSize(40);
    text("Start snowing by clicking mouse. Move your mouse to see all image",width/2,100);
  }
  stroke(255,255,255,100);
  strokeWeight(20,20);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(pmouseX + " -> " + mouseX);
}

function mousePressed() {
  console.log("mouseX", mouseX);
  console.log("mouseY", mouseY);
  this.particles = new ParticleSystem(createVector(mouseX,-600));
  newsnow.push(this.particles);
}
