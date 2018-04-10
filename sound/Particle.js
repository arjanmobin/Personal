function Particle(x,y){
    this.pos = createVector(x,y);
    this.target = createVector(x,y);
    this.vel = createVector();
    this.acc = createVector();
    this.color = {
        r: random(255),
        g: random(255),
        b: random(255)
    }
}

Particle.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);

    if(this.pos.y>height){
        // this.vel.y*=-1;
    }
};

Particle.prototype.show = function(){
    stroke(this.color.r, this.color.g,this.color.b);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
};

Particle.prototype.addForce = function(vector){
    this.acc.add(vector);
};