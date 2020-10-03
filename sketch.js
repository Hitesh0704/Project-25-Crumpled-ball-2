
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(800,height,1600,20);

	ball=new Ball(200,600,60);

	dustbin= new Dustbin(1200,680);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();
 ground.display();
 ball.display();
 dustbin.display();
}
function keyPressed() {
	if(keyCode===UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:500,y:-500});
	}

}
