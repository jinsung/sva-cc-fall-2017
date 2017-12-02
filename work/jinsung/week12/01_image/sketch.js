var myImage;

function preload() {
  myImage = loadImage("assets/image.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(200);
  image(myImage, 0, 0, width, height);

  //noStroke();
  var pd = pixelDensity();
  loadPixels();

  fill(0);
  rect( 0, 0, width, height);
  //console.log("how many numbers you have? " + pixels.length + " " + pd);
  var gap = 10;
  var size = 7;
  for (var y = 0; y < height; y += gap) {
    for (var x = 0; x < width; x += gap) {
      var pixelIndex = ((x + ((y * width) * pd)) * pd) * 4;
      //pixels[]
      fill(pixels[pixelIndex], pixels[pixelIndex + 1], pixels[pixelIndex + 2], 255 * 0.5);
      //fill(pixels[pixelIndex]);

      ellipse(x + size/2, y + size/2, size, size);
    }
  }


}
