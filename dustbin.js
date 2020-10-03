class Dustbin {
    constructor(x,y){

      this.x=x;
      this.y=y;
      this.box1=Bodies.rectangle(this.x,this.y,200,20,{isStatic:true});
      this.box2=Bodies.rectangle(this.x-100,this.y-50,20,100,{isStatic:true});
      this.box3=Bodies.rectangle(this.x+100,this.y-50,20,100,{isStatic:true});
      World.add(world,this.box1);
      World.add(world,this.box2);
      World.add(world,this.box3);
      this.image=loadImage("images/dustbingreen.png");
      
    }
  display(){  
   
    var pos = this.box2.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
    rect(0,-40,20,200);
    pop();
   fill("white");

    var pos = this.box3.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        rect(0,-40,20,200);
        pop();
       fill("white");
   var pos = this.box1.position;
    push();
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,-90,240,200);
    pop();
   fill("white");

}
}