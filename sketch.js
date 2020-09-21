
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,d1,d2,d3, dusty

function preload(){
dusty = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20);
	paper = new Paper(200, 660, 70)
	d1 = new Dustbin(600, 600, 20, 160)
	d2 = new Dustbin(680, 670, 150,20)
	d3 = new Dustbin(760, 600, 20,160)

	Engine.run(engine);
  
}


function draw() {
	background("white")
  rectMode(CENTER);
  
  
ground.display()
paper.display()
d1.display()
d2.display()
d3.display()
image(dusty, 680, 590, 150,150)


  drawSprites();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.setStatic(paper.body,false);
		Matter.Body.applyForce(paper.body, paper.body.position, {x:250,y:-180})

	}
}


