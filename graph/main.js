let x =0;

function setup() {
    createCanvas(1265,630);
    strokeWeight(4);
    stroke(255,0,0);
    line(width/2,0,width/2, height);
    stroke(0,0,255);
    line(0, height/2, width, height/2);
    translate(width/2, height/2);

    for(let y=0; y<=height; y+=height/20){
        line(-6, y, 6, y);
        line(-6, -y, 6, -y);
        line(y, -6, y, 6);
        line(-y, -6, -y, 6);
    }
    x =-width/2;
    console.log(x, f(x));
    while(f(x)>height/2 || f(x)<height/2){
        x++;
    }
}

var sf = 6;
var fib = [1,1];
for (let i=1; i<40; i++){
    fib[i+1] = fib[i-1]+fib[i];
}

function f(x){
    let y = Math.pow(x,3);

    return y
}



function draw() {
    translate(width/2, height/2);
    point(x,-f(x));
    console.log(x, f(x));
    x+=1;

    if(x>width/2 || f(x)>height/2|| f(x)<-height/2){
        noLoop();
    }

}