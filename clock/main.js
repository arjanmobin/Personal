function setup() {
  createCanvas(1000, 600);
  ellipse(0,0,400,400);
  angleMode(DEGREES);

}
function draw() {
  clear()
  translate(500, 300);
  let current = new Date();
  let minutes = current.getMinutes();
  let hours = current.getHours();
  let seconds = current.getSeconds();

  push();
  rotate(seconds*6);
  line(0,0,0,-350);
  pop();

  push();
  rotate(minutes*6);
  line(0,0,0,-350);
  pop();

  push();
  rotate(hours*30);
  line(0,0,0,-310);
  pop();
}
