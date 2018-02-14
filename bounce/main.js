var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = 1000;
canvas.height = 600;
document.body.style.textAlign = "center";

var border = (($(window).width()-canvas.width)/2);

var ball = {
  x: 500+border,
  y: 300,
  xV: -10,
  yV: 7
}

var backColor = "blue";

var ballIMG = new Image(100, 100);
ballIMG.src = "circle1.gif"

$(document).keypress(function(e){
  var keyCode = e.keyCode;
  //UP
  if (keyCode==119 || keyCode == 87 || keyCode == 38) {
    ball.yV -=4;
  }

  //DOWN
  if (keyCode==115 || keyCode == 83 || keyCode == 40 ) {
    ball.yV +=4;
  }

  //LEFT
  if (keyCode==97 || keyCode == 65 || keyCode == 37) {
    ball.xV -=4;
  }

  //RIGHT
  if (keyCode==100 || keyCode == 68 || keyCode == 39) {
    ball.xV +=4;
  }

  if (keyCode==82) {
    ball.xV =0;
    ball.xy =0;
  }
})

function moveBall(){
  ball.x += ball.xV
  ball.y += ball.yV
}

function drawBackground(){
  ctx.fillStyle = backColor;
  ctx.fillRect(0,0, canvas.width, canvas.height);
}

function drawBall(){
  ctx.drawImage(ballIMG, ball.x, ball.y, 100, 100);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(function(){
  drawBackground();
  moveBall();
  drawBall();
  if (ball.x>(canvas.width-50)) {
    ball.xV*=-1
    backColor = getRandomColor();
  }
  if (ball.x<0){
    ball.xV*=-1;
    backColor = getRandomColor();
  }
  if (ball.y>(canvas.height-50)) {
    ball.yV*=-1;
    backColor = getRandomColor();
  }
  if (ball.y<0) {
    ball.yV*=-1;
    backColor = getRandomColor();
  }
}, 50)
