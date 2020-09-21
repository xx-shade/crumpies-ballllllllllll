class Paper{
    constructor(x,y,r){
       var options = {
           isStatic : true,
           restitution : 0.3,
           friction: 0.5,
            density : 1.2
       }
    this.body = Bodies.circle(x,y,r/2, options);
    this.r = r;
    World.add(world, this.body)
    this.image = loadImage("paper.png")
    }
    display(){
        fill("white")
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.r, this.r);
    }
}