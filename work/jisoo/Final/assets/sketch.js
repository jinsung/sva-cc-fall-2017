var img;
function setup() {
  createCanvas(600, 600);
}
function preload() {
  img = loadImage("assets/JISOO.png");
}

function draw() {
  //background(0);
  //image(img,0, 0);
image(img, 50, height/5, img.width/10, img.height/10);

//imageMode(CENTER);
noStroke();


if (mouseIsPressed && mouseX>= 0 && mouseX <200 && mouseY>= 0 && mouseY <200 ) {
    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);
    size = random(50);
    var widthAmout = 20;
    x = random(widthAmout) - widthAmout/2 + mouseX;
    y = random(widthAmout) - widthAmout/2 + mouseY;
    noStroke();
    fill(r,g,b,a);
    rect(0, 0, 200, 200);
  }else if (mouseIsPressed && mouseX>= 200 && mouseX <400 && mouseY>= 200 && mouseY <400 ) {
      r = random(255);
      g = random(255);
      b = random(255);
      a = random(255);
      size = random(50);
      var widthAmout = 20;
      x = random(widthAmout) - widthAmout/2 + mouseX;
      y = random(widthAmout) - widthAmout/2 + mouseY;
      noStroke();
      fill(r,g,b,a);
      rect(200, 200, 200, 200);
    }else if (mouseIsPressed && mouseX>= 200 && mouseX <400 && mouseY>= 0 && mouseY <200 ) {
    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);
    size = random(50);
    var widthAmout = 20;
    x = random(widthAmout) - widthAmout/2 + mouseX;
    y = random(widthAmout) - widthAmout/2 + mouseY;
    noStroke();
    fill(r,g,b,a);
    rect(200, 0, 200, 200);
  }else if (mouseIsPressed && mouseX>= 400 && mouseX <600 && mouseY>= 0 && mouseY <400 ) {
      r = random(255);
      g = random(255);
      b = random(255);
      a = random(255);
      size = random(50);
      var widthAmout = 20;
      x = random(widthAmout) - widthAmout/2 + mouseX;
      y = random(widthAmout) - widthAmout/2 + mouseY;
      noStroke();
      fill(r,g,b,a);
      rect(400, 0, 200, 200)
    }else if (mouseIsPressed && mouseX>= 0 && mouseX <200 && mouseY>= 200 && mouseY <400 ) {
        r = random(255);
        g = random(255);
        b = random(255);
        a = random(255);
        size = random(50);
        var widthAmout = 20;
        x = random(widthAmout) - widthAmout/2 + mouseX;
        y = random(widthAmout) - widthAmout/2 + mouseY;
        noStroke();
        fill(r,g,b,a);
        rect(0, 200, 200, 200)
      }else if (mouseIsPressed && mouseX>= 0 && mouseX <200 && mouseY>= 200 && mouseY <400 ) {
          r = random(255);
          g = random(255);
          b = random(255);
          a = random(255);
          size = random(50);
          var widthAmout = 20;
          x = random(widthAmout) - widthAmout/2 + mouseX;
          y = random(widthAmout) - widthAmout/2 + mouseY;
          noStroke();
          fill(r,g,b,a);
          rect(0, 200, 200, 200)
          }else if (mouseIsPressed && mouseX>= 0 && mouseX <200 && mouseY>= 400 && mouseY <600 ) {
              r = random(255);
              g = random(255);
              b = random(255);
              a = random(255);
              size = random(50);
              var widthAmout = 20;
              x = random(widthAmout) - widthAmout/2 + mouseX;
              y = random(widthAmout) - widthAmout/2 + mouseY;
              noStroke();
              fill(r,g,b,a);
              rect(0, 400, 200, 200)
            }else if (mouseIsPressed && mouseX>= 200 && mouseX <400 && mouseY>= 400 && mouseY <600 ) {
                r = random(255);
                g = random(255);
                b = random(255);
                a = random(255);
                size = random(50);
                var widthAmout = 20;
                x = random(widthAmout) - widthAmout/2 + mouseX;
                y = random(widthAmout) - widthAmout/2 + mouseY;
                noStroke();
                fill(r,g,b,a);
                rect(200, 400, 200, 200)
              }else if (mouseIsPressed && mouseX>= 400 && mouseX <600 && mouseY>= 200 && mouseY <400 ) {
                  r = random(255);
                  g = random(255);
                  b = random(255);
                  a = random(255);
                  size = random(50);
                  var widthAmout = 20;
                  x = random(widthAmout) - widthAmout/2 + mouseX;
                  y = random(widthAmout) - widthAmout/2 + mouseY;
                  noStroke();
                  fill(r,g,b,a);
                  rect(400, 200, 200, 200)
              }else if (mouseIsPressed && mouseX>= 400 && mouseX <600 && mouseY>= 400 && mouseY <600 ) {
                  r = random(255);
                  g = random(255);
                  b = random(255);
                  a = random(255);
                  size = random(50);
                  var widthAmout = 20;
                  x = random(widthAmout) - widthAmout/2 + mouseX;
                  y = random(widthAmout) - widthAmout/2 + mouseY;
                  noStroke();
                  fill(r,g,b,a);
                  rect(400, 400, 200, 200)
                }
    }
