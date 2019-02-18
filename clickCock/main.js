dicks = [];

function setup() {
    createCanvas(1200,720);

}



function mousePressed() {

    let ballRadius = random(10,50);

    let shaftHeight = random(40, 200);
    let shaftWidth = random(5, 30);

    let tipWidth = random(shaftWidth, shaftWidth+20);


    dicks.push({
        x: mouseX,
        y: mouseY,
        c: random(0,255),
        ballRadius,
        shaftHeight,
        shaftWidth,
        tipWidth
    });
}

function draw(){
    let a =0;
    for(var i=0; i<dicks.length; i++){
        dick(dicks[i].x, dicks[i].y,a, dicks[i].c, dicks[i].ballRadius, dicks[i].shaftHeight, dicks[i].shaftWidth, dicks[i].tipWidth);
    }
    a+=.1;

}

function dick(x, y, a, c, ballRadius, shaftHeight, shaftWidth, tipWidth){

    //translate(x,y);
    // // a = random(0,2*PI);
    // rotate(a);
    console.log("DICK");


    fill(c);


    ellipse(-ballRadius, 0, 2*ballRadius, 2*ballRadius);
    ellipse(ballRadius, 0, 2*ballRadius, 2*ballRadius);

    rect(-shaftWidth/2,0,shaftWidth, -shaftHeight);
    point(0, 0);
    translate(0, -shaftHeight);


    arc(0,0, tipWidth, tipWidth*2, PI, 2*PI);


}
