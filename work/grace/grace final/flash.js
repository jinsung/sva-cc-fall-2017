

function LittleDudeFlash() {

  this.draw = function() {
    this.y = mouseY;
    this.x = mouseX;


    fill(244, 95, 65);
    noStroke();


    if (mouseIsPressed){
      triangle(10,10,20,20,30,30);

    }    else {
}


  }
}



//this.draw = function() {
//  fill(244, 95, 65)
//  rect(30, 300, 600, 400, 100);
//  if(mouseX < 175 || mouseX > 400, mouseX < 70 || mouseX > 170){
//    fill(244, 95, 65)
//    rect(30, 300, 600, 400, 100);
//  }
//}
