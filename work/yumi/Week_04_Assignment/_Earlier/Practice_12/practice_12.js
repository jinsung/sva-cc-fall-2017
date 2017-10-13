
function preload(){
  soundFormats('mp3');
  mySound = loadSound('assets/bear.mp3');
  //masterVolume(1);
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  mySound.setVolume(0.1);
  mySound.play();

  //if(mouseX < width/4){
    //mySound.setVolume(0.1);
      //}else{
        //mySound.setVolume(1);
      //}

}

function draw() {
  background(0);
  strokeWeight(1);

  var x = 0;

  while (x < mouseX){
    line(x, 0, x, height);
    x = x + 30;

    stroke(random (0, 255), random (0, 255), random (0, 255));

  }



}
