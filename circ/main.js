function setup() {
    createCanvas(1265*2,2*630);
    translate(65*width/89, 40*height/55);
    background(200);
    strokeWeight(4);
    point(0,0);
}

var sf = 20;
var fib = [1,1];
for (let i=1; i<40; i++){
    fib[i+1] = fib[i-1]+fib[i];
}



function draw() {
    translate(65*width/89, 40*height/55);
    noLoop()
    for (let i=0; i<100; i++){
        k=fib[i];
        console.log(k)
        noFill();
        stroke(i,i,i)
        arc(-k*sf,0,2*k*sf, 2*k*sf, 3*PI/2 ,0);


        line(0,0,0, -k*sf);
        translate(0,-k*sf);
        rotate(-PI/2);
        line(0,0,0, -k*sf);
        translate(0, -k*sf);


    }


}