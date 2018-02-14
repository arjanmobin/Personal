function setup() {
  createCanvas(1000, 600);
  // angleSlider = createSlider(0, PI, PI/4, .1);
  // angleSlider.position(0, 620);
}
function draw() {
  // var angle = angleSlider.value();
  var angle = map(mouseX, 0, width, PI, PI/4);
  background(200);
  stroke(126);
  translate(width/2, height);
  branch(300, angle);
}

function branch(len, angle){
  strokeWeight(4);
  stroke(0);
  line(0,0,0,-len);
  translate(0, -len);

  push();
  rotate(-angle);
  if (len>5) {
    branch(len*0.7, angle);
  }
  pop();

  rotate(angle);
  if (len>5) {
    branch(len*0.7, angle);
  }
}
