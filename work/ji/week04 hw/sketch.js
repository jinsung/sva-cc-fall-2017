function setup() {
  createCanvas(800, 800);
  colorMode(HSB);
}

// variables //
var rainbow = 0;

var dicksize = 125;
var dickpos = 75;
var dickhead = 75;
// variables //

function draw() {
  background(255);

  // background changes //

  if (mouseIsPressed) {
    background(rainbow, 100, 100);
  }

  // RGB starts here //
  colorMode(RGB);
  noStroke();
  fill(246, 171, 142);
  ellipse(mouseX-50, mouseY+25, 50, 50);

  fill(246, 171, 142);
  rect(mouseX-25, mouseY-dickpos, 50, dicksize);
  fill(246, 171, 142);
  ellipse(mouseX, mouseY-dickhead, 50, 50);

  fill(246, 171, 142);
  ellipse(mouseX+50, mouseY+25, 50, 50);

  // HSB starts here //
  colorMode(HSB);
  rainbow += 5;

  if ( rainbow > 360 ) {
    rainbow = 0;
  }

  // dick gets longer //
  if ( mouseIsPressed ) {
    dicksize += 10;
    dickpos += 10;
    dickhead += 10;
  }

  // dick color changes //
  // if ( mouseIsPressed ) {
  //
  // }

  // dick gets smaller //

  if ( keyIsPressed ) {
    dicksize -= 20;
    dickpos -= 20;
    dickhead -= 20;
  }

  if ( dicksize < 125 ) {
    dicksize = 125;
    dickpos = 75;
    dickhead = 75;
  }


  // HSB starts from here //

  // colorMode(HSB);
  // rainbow += 5;
  //
  // if (rainbow > 360) {
  //   rainbow = 0;
  // }
  //
  // if ( mouseIsPressed ) {
  //    (rainbow, 100, 100);
  // }



  // colorMode(HSB);
  //
  // myHue += 1;
  //
  // if ( mouseIsPressed ) {
  //   rect(50, 0, 50, 100);
  // }
  //
  // if ( keyIsPressed ) {
  //
  // }



}
