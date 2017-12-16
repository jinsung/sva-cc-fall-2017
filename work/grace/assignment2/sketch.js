var shoe;
var shoe2;


function setup() {
  createCanvas(500, 500);
  shoe = new Shoe();
  shoe2 = new Shoe();
}

function draw() {
  background(100);
  shoe.display();
  shoe.move();
  shoe2.display();
  shoe2.move2();
}
