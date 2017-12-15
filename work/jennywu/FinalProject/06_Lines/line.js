function Line(y, lHeight){
  this.y = y;
  this.r = 0;
  this.time = 0;
  this.height = lHeight;


  this.draw = function(sWeight) {
    this.time += 1.5;
    this.sWeight = sWeight;

    strokeWeight(this.sWeight);
    stroke(frameCount * 3 % 255, frameCount * 5 % 255,
          frameCount * 7 % 255);
    this.r = noise(this.time) * width;
    line(this.r, this.y, this.r, this.height);
    }

}
