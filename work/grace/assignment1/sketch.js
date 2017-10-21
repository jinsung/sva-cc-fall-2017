

  function setup() {
    createCanvas(1260, 600);
  }

  function draw() {
    var myColor = color(255, 204, 0);
    if(mouseX < 600 || mouseX > 800) {
      myColor = 0;
    }
    background(myColor);

//background
    triangle(0, 600, 0, 0, 400, 600);
    triangle(0, 0, 600, 0, 400, 600);
    triangle(800, 0, 820, 600, 1260, 600);
    triangle(800, 0, 1260, 0, 1260, 600);

//chair
    rect(600, 400, 170, 30, 20);
    rect(620, 500, 120, 20, 20);
    rect(620, 400, 23, 250, 20);
    rect(730, 400, 23, 250, 20);

//mic
    rect(550, 0, 10, 300);
    rect(540, 290, 50, 15);
    ellipse(600, 298, 32, 32);


  }
