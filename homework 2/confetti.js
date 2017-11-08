
function Confetti(loc, numOfLoop){
  this.location = loc;
  this.numOfLoop = numOfLoop;

  this.velocity = createVector(3,4);

  this.update = function(){
    this.location.add( this.velocity );
    this.bounce();
  };

  this.bounce = function(){
    var left = this.location.x - this.size/2
    var right = this.location.x + this.size/2
    var top = this.location.y - this.size/2
    var bottom = this.location.y + this.size/2

    if(left<0) {
      this.velocity.x *= -1;
    } else if (right>width) {
      this.velocity.x *= -1;
    }

    if(top<0) {
      this.velocity.y *= -1;
    } else if (bottom>height) {
      this.velocity.y *= -1;
    }
  };

  var hueRand = random(255);
  var randomB = random(50);

  this.createBalloon = function() {
      var circleSize = random(100);
      var xPos = random(-windowWidth,windowHeight);
      var yPos = random(-windowWidth,windowHeight);

      fill(hueRand, randomB, 100);
      ellipse(mouseX+xPos, mouseY+yPos, circleSize, circleSize);
    };

  this.createConfetti = function(){
      var xPos = random(-windowWidth,windowHeight);
      var yPos = random(-windowWidth,windowHeight);
      var rectSizeX = random(80);
      var rectSizeY = random(80);

      fill(hueRand, randomB, 100);
      rect(mouseX+xPos, mouseY+yPos, rectSizeX, rectSizeY);;
    };

}
