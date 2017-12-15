

function LittleDudeHand() {

  this.draw = function() {
    this.y = mouseY;
    this.x = mouseX;


    fill(244, 95, 65);
    stroke(300);
    strokeWeight(10);


    if (mouseIsPressed){

      //triangle(this.x - 10, this.y - 10, this.x -20, this.y -20, this.x +10, this.x +10);



      //rotate();
      rect(this.x,this.y,500,30,10,10);
      rect(this.x + 40,this.y,500,100,10,10);
      rect(this.x + 60,this.y,30,40,10,10);





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
