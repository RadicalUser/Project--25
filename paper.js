class Paper {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.2
    }
    this.body = Bodies.circle(x, y, radius-40, options);
    this.radius = radius;
    this.image=loadImage("sprites/paper.png");
    
    
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill("white");
    imageMode(CENTER);
   image(this.image, 0, 0, this.radius);
    pop();
  }
};
