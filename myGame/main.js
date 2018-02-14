var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = 1000;
canvas.height = 600;
document.body.style.textAlign = "center";

function Node(x, y, width, height, direction, speed, color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.direction = direction;
  this.speed = speed;
  this.color = color;
}

var nodes = [];

var player = {
  x:0,
  y:0,
  size: 20
}

var border = (($(window).width()-canvas.width)/2);

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function drawBackground(){
  ctx.fillStyle = "blue";
  ctx.fillRect(0,0, canvas.width, canvas.height);
}

function drawPlayer(){
  ctx.fillStyle = "yellow";
  ctx.fillRect(player.x-10-border,player.y-20, player.size, player.size);
}

function setPlayerPos(){
  $(document).mousemove(function(e){
    player.x = e.pageX;
    player.y = e.pageY;
  });
}

function spawnNodes(){
  var direction = "init";
  var xSpawn = 404;
  var ySpawn = 404;
  var height = 44;
  var width = 44;

  let counter = randInt(0,100);
  //TOP BOTTOM NODE
  if (counter%2==0) {
    xSpawn = randInt(border, canvas.width);
    height = randInt(20, 100);
    width = randInt(10, 30);
    //TOP
    if (counter>50) {
      ySpawn = -10;
      direction = "d";


    }
    //BOTTOM
    else {
      ySpawn = canvas.height+10;
      direction = "u";
    }
  }

  //LEFT RIGHT NODE
  else {
    ySpawn = randInt(0, canvas.height);
    height = randInt(10, 30);
    width = randInt(20, 100);
    //LEFT
    if (counter>50) {
      xSpawn = -10;
      direction = "r";
    }
    //RIGHT
    else {
      xSpawn = canvas.width+10;
      direction = "l";
    }
  }

  let noder = new Node(xSpawn, ySpawn, width, height, direction, randInt(3,8), getRandomColor());
  nodes.push(noder);
}

function moveAndRecycleNodes(){
  for (var i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node.direction == "u") {
      node.y-=node.speed;
      if (node.y<-100) {
        nodes.splice(i, 1);
        console.log("DEL TOP");
      }
    }
    if (node.direction == "d") {
      node.y+=node.speed;
      if (node.y>canvas.height+100) {
        nodes.splice(i, 1);
        console.log("DEL BOT");
      }
    }
    if (node.direction == "l") {
      node.x-=node.speed;
      if (node.x<-100) {
        nodes.splice(i, 1);
        console.log("DEL LE");
      }
    }
    if (node.direction == "r") {
      node.x+=node.speed;
      if (node.x>canvas.width+border+100) {
        nodes.splice(i, 1);
        console.log("DEL R");
      }
    }
  }
}

function drawNodes(){

  for (var i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    ctx.fillStyle = node.color;
    ctx.fillRect(node.x, node.y, node.width, node.height);

  }
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
  setPlayerPos();
  drawBackground();
  drawPlayer();
  if (nodes.length<80) {
    spawnNodes();
  }
  moveAndRecycleNodes();
  drawNodes();

}, 20);
