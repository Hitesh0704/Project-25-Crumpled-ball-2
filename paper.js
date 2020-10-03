class Ball {
constructor(x,y,r){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2 
      } 
this.body=Bodies.circle(x,y,r,options);
this.r=70;
World.add(world, this.body);
this.image=loadImage("images/paper.png");
} 
display(){
var pos =this.body.position;
var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image, 0, 0, this.r, this.r); 
      pop();
        fill("white");
}
}
