const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);

    dustbin = new Dustbin(720,390,100,10);
	paper = new Paper(100,300,10);
	ground = Bodies.rectangle(width /2,400,width,10,
	{
		isStatic:true
    });
	world.add(World,ground);	
   }


function draw() {
  rectMode(CENTER);
  background("black");
  background(0);
  dustbin.display();
  paper.display();
 
}


function Keypressed(){
	if (keyCode  === UP_ARROW){
		Matter.Body.applyForce(paper.Body,paper.Body.position,{
			x:12,
			y:-13
		});
	}
}
