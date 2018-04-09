var easycam;

var xZ = 10;
var yZ = 10;
var zZ = 10;

var detail = .1;

function setup() {
    createCanvas(1200, 500, WEBGL);

    easycam = createEasyCam();

    translate(width / 2, height / 2);
    line(0, -height / 2, 0, height / 2);
    line(-width / 2, 0, width / 2, 0);
    x=-width/(2*xZ);

    while((f(x)>height/(yZ*2))||(f(x)<-height/(yZ*2))){
        x+=detail;
    }
    x-=detail;
    console.log("x "+x);

    frameRate(60);

    frames = x/xZ;

    cylinder(.5, 100);

}

function draw(){
    background(255);
    fill(255);
    translate(width/2, height/2);
    strokeWeight(4);

    for(var y=0; y< 50; y+=.04){
        translate(x, y, f(x));
        sphere(3);
    }


    // line(x*xZ, f(x)*yZ, (x+detail)*xZ, f(x+detail)*yZ);
    x+=detail;

}



// var x;
//
// var xZ = 10;
// var yZ = 10;
//
//
// var frames=1;
//

//
// var mx;
//
// var sum=0;
//
// var easycam;
//
//
// //
// function setup() {
//     setAttributes('antialias', true);
//     createCanvas(1280, 720, WEBGL);
//
//
//     easycam = createEasyCam();
//
//
// }
//
//
// function draw(){
//     mx = mouseX-width/2;
//

//
//
//
//     // let dx=50;
//     // let dy =slope(mx)*dx;
//     //
//     // // background(255);
//     // line((mx-(dx/2))*xZ, (f(mx)+dy)*yZ, (mx+(dx/2))*xZ, (f(mx)-dy)*yZ);
//     // console.log()
//
//     console.log(x, f(x));
//     if((x>width/(2*xZ))||(-f(x)>height/(2*yZ))){
//         detail=0;
//         noLoop();
//         integral(-20,13.5);
//     }
//
// }
//
//
//
function f(x, y){
    let z = x+y;
    return z;
}
//
// function integral(a,b){
//     console.log("INTEGRATE")
//     let sum=0;
//     let dx = .001;
//     fill("red");
//     stroke("red");
//     let area =0;
//
//     for(var i=a; i<b; i+=dx){
//         rect(i*xZ,0*yZ, dx*xZ, f(i)*yZ);
//         area+=(dx*xZ*f(i)*yZ)
//     }
//     console.log(-area/(xZ*yZ));
//
//
// }
//
// function slope(x){
//     let s = (f(x)-f(x+.01))/(.01);
//     return s;
//
// }