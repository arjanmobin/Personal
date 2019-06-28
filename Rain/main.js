boxes = []
var score = 0;
var hiScore = 0;
var play = true;

function setup() {
    strokeWeight(10)
    frameRate(30)
	cnv = createCanvas(1905,910)
	rectMode(CENTER)
	textAlign(CENTER)
   
}

function draw() {
	background(100)
	stroke(255)
	
	fill(255, 0, 0)
	textSize(25)
	text("SCORE: " + score, 100, 900)

	if ((boxes.length < (10 + (score / 20))) && boxes.length < 75) {

		if (score > 300 && score % 2 == 0) {
			box = new Box(1)
		} else {
			box = new Box()
		}
			
		
		boxes.push(box)
	}

	boxes.forEach(box => {
		if (play) {
			if (box.pos.y > 900 || box.pos.y < 0 || box.pos.x > 1905 || box.pos.x < 0) {
				var index = boxes.indexOf(box);
	 
				if (index > -1) {
				   boxes.splice(index, 1);
				}
			}
			
			collideX = abs(mouseX - box.pos.x) <= (box.width * 1)
			collideY = abs(mouseY - box.pos.y) <= (box.height * 1)
	
			box.update()
			box.show()
	
			if (collideX && collideY) {
				endGame()
			}
	
		}
		
	});
	
	fill(255, 0, 0)
	ellipse(mouseX, mouseY, 10, 10)

	score++

	if (score > hiScore) {
		hiScore = score;
	}
    
}

function endGame() {
	noLoop();
	background(0)
	play = false
	textSize(40)
	fill(255, 0, 0)
	text("GAME OVER", width * 0.5, height * 0.5);
	textSize(20)
	text("SCORE: " + score, width * 0.5, height * 0.55)
	text("HIGH SCORE: " + hiScore, width * 0.5, height * 0.6)
	text("CLICK TO RESTART", width * 0.5, height * 0.65)

	cnv.mousePressed(resetGame)
	
}

function resetGame() {
	boxes = []
	score = 0
	loop()
	play = true
}





