function setup() {
  createCanvas(1000, 1000);
  angleMode(RADIANS);

}
function draw() {
  clear()
  translate(500, 500);

  line(-500, 0, 500, 0);
  line(0, 500, 0, -500);

  for (var x = -500; x < 500; x++) {
    let y= x^2-Math.sqrt(x)+8;
    point(x, y);
  }


}
