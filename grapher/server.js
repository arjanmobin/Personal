const math = require("mathjs");
const express = require("express");
const socket = require('socket.io');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
var server = app.listen(3000);

io = socket(server);

var f = math.eval("f(x) = x^4");
console.log(f(2));
