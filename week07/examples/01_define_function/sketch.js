function drawArrow(x, y, size) {
  fill(0);
  line(x, y, x+size, y);
  var tSize = size * 0.15;
  triangle(x, y, x+tSize, y+tSize/3, x+tSize, y-tSize/3);
  // feathers
  var fPos = size * 0.7;
  var fSize = size * 0.05;
  line (x+fPos, y, x+fPos+fSize, y+fSize);
  line (x+fPos, y, x+fPos+fSize, y-fSize);
  fPos = size * 0.8;
  line (x+fPos, y, x+fPos+fSize, y+fSize);
  line (x+fPos, y, x+fPos+fSize, y-fSize);
  fPos = size * 0.9;
  line (x+fPos, y, x+fPos+fSize, y+fSize);
  line (x+fPos, y, x+fPos+fSize, y-fSize);
}
