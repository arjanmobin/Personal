
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);

canvas.width = 1000;
canvas.height = 600;
document.body.style.textAlign = "center";

function Node(x, y, direction, speed, text){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.text = text;
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

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );
        anHttpRequest.send( null );
    }
}



function getLyricLine(artist, song){
  let encodeArtist = encodeURIComponent(artist);
  let encodeSong = encodeURIComponent(song);
  let url = `http://lyric-api.herokuapp.com/api/find/${encodeArtist}/${encodeSong}`
  var client = new HttpClient();

  $.ajax({
  type: 'GET',

  url: "https://cors-anywhere.herokuapp.com/"+ url,
  contentType: 'jsonp',
  crossDomain: true,

  xhrFields: {
    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
    // This can be used to set the 'withCredentials' property.
    // Set the value to 'true' if you'd like to pass cookies to the server.
    // If this is enabled, your server must respond with the header
    // 'Access-Control-Allow-Credentials: true'.
    withCredentials: true
  },

  headers: {
    Access-Control-Allow-Credentials: *
  },

  success: function(data, textStatus, jqXHR) {
    console.log(data);
  },

  error: function() {
    // Here's where you handle an error response.
    // Note that if the error was due to a CORS issue,
    // this function will still fire, but there won't be any additional
    // information about the error.
  }
});

}

function spawnNodes(){
  var direction = "init";
  var xSpawn = 404;
  var ySpawn = 404;
  var text = ""

  let counter = randInt(0,100);
  //TOP BOTTOM NODE
  if (counter%2==0) {
    xSpawn = randInt(border, canvas.width);
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

  let noder = new Node(xSpawn, ySpawn, direction, randInt(3,8));
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
  ctx.fillStyle = "red";

  for (var i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    let dog = new Image(node.width, node.height);
    dog.src = "dog.png"
    ctx.drawImage(dog, node.x, node.y, node.width, node.height);

  }
}

getLyricLine("Kendrick Lamar", "DNA");

// setInterval(function(){
//   setPlayerPos();
//   drawBackground();
//   drawPlayer();
//   if (nodes.length<100) {
//     spawnNodes();
//   }
//   moveAndRecycleNodes();
//   drawNodes();
//
// }, 20);
