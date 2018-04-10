var mic;

var gunk;
var pts;

var particles = [];

var inputText;

var fontSize = 250;

function preload(){
    gunk = loadFont("with.otf");
}


function setup(){
    createCanvas(1000,600);
    mic = new p5.AudioIn();
    mic.start();


    textFont(gunk);
    textSize(fontSize);

    inputText = createInput("");


    pts = gunk.textToPoints("DEFAULT", 0 , 0);

}


function draw(){
    background(0);
    micLevel = mic.getLevel();

    dots();





}




function dots(){

    inputText.input(function(){
        clear();
        pts = [];
        particles = [];

        let words = this.value();
        let textW = textWidth(words);

        if(textW>width){
            fontSize-=20;
        }

        if(textW<width*.75){
            fontSize+=20;
        }



        textSize(fontSize);
        pts = gunk.textToPoints(words, (width-textW)/2, height/2);

        for(var i=0; i<pts.length; i++){
            var particle = new Particle(pts[i].x, pts[i].y);

            particles[i]=particle;

        }

    });





    for(var i=0; i<particles.length; i++){

        let mouseVec = createVector(mouseX-particles[i].pos.x, mouseY-particles[i].pos.y);
        let mouseD = mouseVec.mag();
        let mouseForce = map(mouseD, 0, 100, 1, 0, true);

        let homeVec = createVector(particles[i].target.x-particles[i].pos.x, particles[i].target.y-particles[i].pos.y);
        let homeD = homeVec.mag();
        let homeForce = map(homeD, 0, 500, 1, 0, true);




        let soundVec = createVector(particles[i].pos.x-width/2, particles[i].pos.y-height/2);

        let soundD = soundVec.mag();

        let soundForce = map(soundD, 0, 500, 1, 0, true);



        particles[i].acc = mouseVec.mult(-mouseForce/100);
        particles[i].acc.add(homeVec.mult(homeForce/100));
        particles[i].acc.add(soundVec.mult(soundForce/100).mult(10*micLevel));

        particles[i].vel.mult(.97);


        particles[i].update();
        particles[i].show();
    }

}