var myImage;

function preload(){
  myImage = loadImage("assets/image.jpg")
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(0);
  image(myImage, 0, 0, width, height);
  //noStroke();

  var pd = pixelDensity();
  loadPixels();

  fill(0);
  rect(0, 0, width, height);

  var gap = 5;
  var size = 4;
  for (var y = 0; y < height; y += gap) {
    for (var x=0; x < width; x += gap ) {
      var pixelIndex = ((x + ((y * width) * pd)) * pd) * 4;

      //pixels reads color
      fill(pixels[pixelIndex], pixels[pixelIndex + 1], pixels[pixelIndex + 2], pixels[pixelIndex + 3]);
      //grayscale
      //fill(pixels[pixelIndex]);
      ellipse(x + 2/size ,y + 2/size, size, size);
    }
  }

}
