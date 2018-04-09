var x;

var xZ = 10;
var xSlider;
var yZ = 10;
var ySlider;


var frames=1;

var detail = .1;

var mx;

var start;


var c;

function setup() {
    textSize(100);

    xSlider = createSlider(1, 50, 10, .02);
    xSlider.position(40, 60);
    ySlider = createSlider(1,50,10,.02);
    ySlider.position(40,100);

    xZ = xSlider.value();
    yZ = ySlider.value();
    c  = createCanvas(1280, 720);
    translate(width / 2, height / 2);

    x=-width/(2*xZ);

    while((f(x)>height/(yZ*2))||(f(x)<-height/(yZ*2))){
        x+=detail;

    }
    x-=detail;
    start = x;
    console.log("x "+x);

    frameRate(60);

    frames = x/xZ;


}


function draw(){
    clear();

    xZ = xSlider.value();
    yZ = ySlider.value();

    strokeWeight(1);
    fill("black");
    text('X Zoom:'+xZ, 40, 40);
    text('Y Zoom:'+yZ, 40, 80);



    axis();

    drawF();
    drawG();


    // integral(-14,8*PI);

    // for(i=x; i<width/2; i+=detail){
    //
    // }

}


// function mousePressed(){
//
//     drawTangent();
//     console.log("drew at: "+mx)
//
// }
//
// function drawTangent(){
//     noLoop();
//     mx = (mouseX-width/2)/xZ;
//     let dx=50;
//     let dy =slope(mx)*dx;
//
//     // background(255);
//     line((mx-(dx/2))*xZ, (f(mx)+dy)*yZ, (mx+(dx/2))*xZ, (f(mx)-dy)*yZ);
//     console.log((mx-(dx/2))*xZ, (f(mx)+dy)*yZ, (mx+(dx/2))*xZ, (f(mx)-dy)*yZ);
//
//     console.log(x, f(x));
//
// }
function drawF(){
    for(var i=(-width/2)/xZ; i<(width/2)/xZ; i+=detail){
        line(i*xZ, f(i)*yZ, (i+detail)*xZ, f(i+detail)*yZ);


    }
}

function drawG(){
    for(var i=(-width/2)/xZ; i<(width/2)/xZ; i+=detail){
        line(i*xZ, g(i)*yZ, (i+detail)*xZ, g(i+detail)*yZ);

    }
}

function axis(){
    strokeWeight(1);
    stroke(55);
    translate(width/2, height/2);
    line(0, -height / 2, 0, height / 2);
    line(-width / 2, 0, width / 2, 0);
    strokeWeight(4);
    point(0,0);
}



function f(x){
    let y = Math.pow(x,2);
    return -y;
}

function g(x) {
    let y = 0;
    return -y;
}

function integral(a,b){
    console.log("INTEGRATE")
    let sum=0;
    let dx = .04;
    fill("red");
    stroke("red");
    let area =0;

    for(var i=a; i<b; i+=dx){

        if(f(i)-g(i)>0){
            fill("blue");
            stroke("blue");
        }
        rect(i*xZ,g(i)*yZ, dx*xZ, (f(i)-g(i))*yZ);
        area+=(dx*xZ*(f(i)-f(x)*yZ));
    }
    // console.log(-area/(xZ*yZ));


}

function slope(x){
    let s = (f(x)-f(x+.01))/(.01);
    return s;

}