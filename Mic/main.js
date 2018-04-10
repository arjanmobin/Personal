var mic;

function setup(){
    mic = new p5.AudioIn()
    mic.start();
}
function draw(){
    background(0);
    let micLevel = mic.getLevel();
    console.log(micLevel);
    // ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}