

function LittleDudeBlink() {

  this.update = function() {
    if(mouseX > 120 & mouseY > 350){
        fill(244, 95, 65)
        rect(30, 300, 600, 400, 100);
        stroke(300);
        strokeWeight(10);
        rect(120,380,120,5);
        rect(350,380,120,5);
      }
  }

  this.display = function(){

      fill(244, 95, 65);
  }
}
