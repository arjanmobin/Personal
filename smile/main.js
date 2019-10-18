function setup(){
    createCanvas(1000,600);
    mic = new p5.AudioIn();
    mic.start();

}

function draw(){
    background(0);
    micLevel = mic.getLevel();


    translate(width/2, height/2);

    console.log(micLevel);
}

let mic;

function setup() {
    createCanvas(1000,600);

 
    mic = new p5.AudioIn();

  
    mic.start();
}

function draw() {
    background(0);

  
    let vol = mic.getLevel();
    fill(255, 255,0);
    

    translate(width*0.5, height*0.5);

    ellipse(0,0, height * 0.8, height * 0.8,);
    console.log(vol);

    fill(0);
    ellipse(-width*0.1, -height*0.12, width*.075, width*0.075);
    ellipse(width*0.1, -height*0.12, width*.075, width*0.075);

    let mouthY = map(vol, 0, 0.5, width*0.02, width*0.075);
    let mouthX = map(vol, 0, 0.5, width*0.06, width*0.2);

    ellipse(0, height*0.19, mouthX, mouthY);
    

}
