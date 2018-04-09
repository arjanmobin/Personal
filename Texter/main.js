var gunk;
var pts;

var particles = [];

var inputText;

var fontSize = 250;


function preload(){
    gunk = loadFont("Machine-Gunk.otf");
}

function setup() {
    background(255,255,255);
    createCanvas(1200,650);
    textFont(gunk);
    textSize(fontSize);

    inputText = createInput("");


    pts = gunk.textToPoints("DEFAULT", 0 , 0);
    console.log(particles);

}


function draw(){

    background(0);



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

        let homeVec = createVector(particles[i].target.x-particles[i].pos.x, particles[i].target.y-particles[i].pos.y);

        let d = mouseVec.mag();

        let force = map(d, 0, 300, 1000, 0, true);



        particles[i].acc = mouseVec.mult(-force/100000);
        particles[i].acc.add(homeVec.mult(.001));

        particles[i].vel.mult(.98);


        particles[i].update();
        particles[i].show();
    }


}

