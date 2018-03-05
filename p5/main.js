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
  setInterval(function(){
    for(var i=0; i<PI/4; i+=.1){
      branch(300, i);
    }
  }, 400)
}

function branch(len, angle){
  strokeWeight(3);
  stroke(277, 432, 523);
  line(0,0,0,-len);
  translate(0, -len);

  push();
  rotate(-angle);
  if (len>5) {
    branch(len*0.65, angle);
  }
  pop();

  rotate(angle);
  if (len>5) {
    branch(len*0.65, angle);
  }
}
