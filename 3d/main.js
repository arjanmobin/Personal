let angle = 0;
function setup(){
  createCanvas(600, 600, WEBGL);
}



function draw(){
  background(0);
  rectMode(CENTER);
  fill("blue")
  rotateY(angle);
  rotateX(angle);
  rect(0,0, 250, 250);

  angle+=.02;
}
