function Box(num) {

    if (num != 1) {
        topBot = random(1, 10)

        if (topBot > 5) {
            this.pos = createVector(random(1900), 0)
            this.acc = createVector(0, random(1)*2)
        } else {
            this.pos = createVector(random(1900), 875)
            this.acc = createVector(0, random(1)* -2)
        }
        
        this.width = random(15, 31)
        this.height = random(51, 31)
        this.vel = createVector()
        
        this.color = {
            r: random(0, 256),
            g: random(0, 256),
            b: random(0, 256)
        }
    } else {
        topBot = random(1, 10)

        if (topBot > 5) {
            this.pos = createVector(0, random(900))
            this.acc = createVector(random(1)* 2, 0)
        } else {
            this.pos = createVector(1900, random(900))
            this.acc = createVector(random(1)* -2, 0)
        }
        
        this.height = random(15, 31)
        this.width = random(51, 31)
        this.vel = createVector()
        
        this.color = {
            r: random(0, 256),
            g: random(0, 256),
            b: random(0, 256)
        }
    }


}


Box.prototype.update = function() {
    this.pos.add(this.vel)
    this.vel.add(this.acc)
}

Box.prototype.show = function() {
    fill(this.color.r, this.color.g, this.color.b)
    strokeWeight(0)

    if(this.shape > 10) {
        ellipse(this.pos.x, this.pos.y, this.width, this.height)
    } else {
        rect(this.pos.x, this.pos.y, this.width, this.height)
    }

}