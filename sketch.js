var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var leftWall,rightWall
var bottomWall
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);   
	groundSprite.shapeColor=color(255)
	
    bottomWall=createSprite(width/2,640,200,20);
	bottomWall.shapeColor="red"
	

	leftWall= new wall(300,610); 
	rightWall=new wall(500,610);
	
	
	

    


	engine = Engine.create();
	world = engine.world;

	bottomWall = Bodies.rectangle(width/2,640,200,20, {isStatic:true});
	bottomWall.shapeColor="red"
	World.add(world,bottomWall);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 Engine.update(engine);
 leftWall.display();
 rightWall.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) { 
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false)	
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
	
    
  }
}