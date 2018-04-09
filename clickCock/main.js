var sf;

function setup() {

    createCanvas(1200,720);
    // background(0,0,0);
    sf = width/89;

    translate(65*sf,40*sf);
    strokeWeight(4);
    point(0,0);
}
fib = [1,1];
for(var i=2; i< 25; i++){
    fib[i] = fib[i-1]+fib[i-2];
};


var a = .05;

function draw() {
    background(255)
    translate(65*sf,40*sf);
    strokeWeight(1)
    noFill()
    frameRate(60);


    for(var i=0; i<10; i++){
        rect(0,0,-fib[i]*sf,-fib[i]*sf);
        arc(0-fib[i]*sf,0,2*fib[i]*sf,2*fib[i]*sf, 3*PI/2,2*PI);
        translate(-fib[i]*sf,-fib[i]*sf);
        rotate(a+(3*PI/2));

    }


    if(a>0){
        a+=.01;
    }else{
        a-=.01;
    }


    if(a>PI || a<0){
        a*=-1;
    }







}