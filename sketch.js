
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin;

function preload()
{
	dustbin_image=loadImage("sprites/dustbingreen.png");
 	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	D1= new Dustbin(600,680,200,20);
	D2=new Dustbin(500,590,20,200);
    D3=new Dustbin(700,590,20,200);

   
	paper= new Paper (100,600,70);
	dustbin=createSprite(600,580,100,200);
	dustbin.addImage("dustbingreen",dustbin_image);
	dustbin.scale=0.7;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);

  
  
  drawSprites();
 ground.display();
 D1.display();
 D2.display();
 D3.display();
 paper.display();

}

function keyPressed(){

	if(keyCode === UP_ARROW) {

   Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});
   

	}



}

