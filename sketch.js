
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var wall1,wall2,wall3;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 650)

	engine = Engine.create();
	world = engine.world;

	//Creating Bodies
  	ground = new Ground(width/2,600);
    paper = new Waste(40,570);
    wall1 = new HorizontalWall(650,580);
    wall2 = new VerticalWall(565,530);
    wall3 = new VerticalWall(735,530);
	
	Engine.run(engine);
  
}

function draw() {
  background(0);
  Engine.update(engine);

  // Ground and Waste
  ground.display();
  paper.display();

  // Walls
  wall1.display();
  wall2.display();
  wall3.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
if (keyCode == UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:70});

}
}