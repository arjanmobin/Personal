var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

var snake = [{
  x: 25,
  y:15,
  color: "brown"
}];

var food = {
  x: randomInt(0,49),
  y: randomInt(0,29),
  color: "green"
}

var canvasWidth = 1020;
var canvasHeight = 620;
var boxSize = 20;
// 50x30 Board
canvas.width = canvasWidth;
canvas.height= canvasHeight;
document.body.style.textAlign = "center"

var direction = "u";

//Background
function drawBackground(){
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,1020,620);
  ctx.fillStyle = "grey";
  ctx.fillRect(10,10,1000,600);
}

//Draw Snake
function drawSnake(){
  drawBackground();

  for (var i = 0; i < snake.length; i++) {
    ctx.fillStyle = snake[i].color;
    ctx.fillRect(snake[i].x*boxSize+10+2, snake[i].y*boxSize+10+2, boxSize-2, boxSize-2);
  }
  drawFood();
}

//Called when snake gets food
function extendSnake(){
  ctx.fillStyle = "brown";

  let lastX = snake[snake.length-1].x;
  let lastY = snake[snake.length-1].y;
  let randColor = getRandomColor();

  if (snake.length==1) {
    snake.push({
      x: lastX+1,
      y: lastY,
      color: randColor
    })
  }
  //add to top
  else if (snake[snake.length-2].x==lastX && snake[snake.length-2].y==lastY+1) {
    snake.push({
      x: lastX,
      y: lastY-1,
      color: randColor
    })
  }
  //add to bottom
  else if (snake[snake.length-2].x==lastX && snake[snake.length-2].y==lastY-1) {
    snake.push({
      x: lastX,
      y: lastY+1,
      color: randColor
    })
  }
  //add to left
  else if (snake[snake.length-2].x==lastX+1 && snake[snake.length-2].y==lastY) {
    snake.push({
      x: lastX-1,
      y: lastY,
      color: randColor
    })
  }
  //add to right
  else if (snake[snake.length-2].x==lastX-1 && snake[snake.length-2].y==lastY) {
    snake.push({
      x: lastX+1,
      y: lastY,
      color: randColor
    })
  }
  else{
    snake.push({
      x: lastX+1,
      y: lastY,
      color: randColor
    })
  }
}

//Move snake every interval
function moveSnake(){
  firstSnake = snake[0];
  lastSnake = snake.pop();
  if (direction == "u") {
    lastSnake.x = firstSnake.x;
    lastSnake.y = firstSnake.y-1;
    snake.unshift(lastSnake);
  }
  if (direction == "d") {
    lastSnake.x = firstSnake.x;
    lastSnake.y = firstSnake.y+1;
    snake.unshift(lastSnake);
  }
  if (direction == "l") {
    lastSnake.x = firstSnake.x-1;
    lastSnake.y = firstSnake.y;
    snake.unshift(lastSnake);
  }
  if (direction == "r") {
    lastSnake.x = firstSnake.x+1;
    lastSnake.y = firstSnake.y;
    snake.unshift(lastSnake);
  }
  else {
    "no direction"
  }
  drawSnake();
}

//Place Food
function drawFood(){
  ctx.fillStyle = food.color;
  ctx.fillRect(food.x*boxSize+10, food.y*boxSize+10, boxSize, boxSize);
}


function gameOver(){
  // clearInterval(timer);
  // canvas.parentNode.removeChild(canvas);
  // let loss = document.createElement("h1");
  // loss.innerHTML = "YOU LOSE";
  // document.body.appendChild(loss);
  snake = [{
    x: 25,
    y:15,
    color: "brown"
  }]
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

$(document).keypress(function(e){
  var keyCode = e.keyCode;
  //UP
  if (direction!= "d" && keyCode==119 || keyCode == 87 || keyCode == 38) {
    direction = "u";
  }

  //DOWN
  if (direction!= "u" && keyCode==115 || keyCode == 83 || keyCode == 40 ) {
    direction = "d";
  }

  //LEFT
  if (direction!= "r" && keyCode==97 || keyCode == 65 || keyCode == 37) {
    direction = "l";
  }

  //RIGHT
  if (direction!= "l" && keyCode==100 || keyCode == 68 || keyCode == 39) {
    direction = "r"
  }
})

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

drawBackground();
drawSnake();

var timer = setInterval(function(){
  moveSnake();
  if (food.status == false) {
    placeFood();
  }
  if(snake[0].x == food.x && snake[0].y == food.y){
    food.x = randomInt(0,49);
    food.y = randomInt(0,29);
    food.color = getRandomColor();
    extendSnake();
    extendSnake();
    drawFood();
  }
  if (snake[0].x<0 || snake[0].y<0 || snake[0].x > 49 || snake[0].y >29) {
    gameOver();
  }
  if (snake.length>1) {
    for (var i = 1; i < snake.length; i++) {
      if(snake[0].x == snake[i].x && snake[0].y== snake[i].y){
        gameOver();
      }
    }
  }
}, 100);
