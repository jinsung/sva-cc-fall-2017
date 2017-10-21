var bubble = {
  x: 300,
  y: 200,
  display: function(){
    stroke(255);
    strokeWeight(random(1,3));
    //noFill();
    ellipse(this.x, this.y, 50, 50);
  },
  move: function(){
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1,1 );
  },
  change: function(){
    fill(random(255, this.x),(255, this.y), 255);
  }
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw(){
  background(0);
  bubble.move();
  bubble.display();
  bubble.change();
}
